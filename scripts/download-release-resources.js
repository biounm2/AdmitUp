#!/usr/bin/env node

const fs = require('fs');
const https = require('https');
const path = require('path');
const { spawnSync } = require('child_process');

const rootDir = path.resolve(__dirname, '..');
const dataDir = path.join(rootDir, 'data');
const seedPath = path.join(dataDir, 'openexam.seed.db.gz');
const manifestPath = path.join(dataDir, 'question-assets-manifest.json');
const assetsDir = path.join(dataDir, 'question-assets');
const cacheDir = path.join(dataDir, '.resources');
const packageJson = require('../package.json');
const downloadAttempts = Number(process.env.ADMITUP_RESOURCES_DOWNLOAD_ATTEMPTS || 3);

function hasQuestionAssets() {
  try {
    return fs.statSync(assetsDir).isDirectory() && fs.readdirSync(assetsDir).length > 0;
  } catch {
    return false;
  }
}

function hasResources() {
  return fs.existsSync(seedPath) && fs.existsSync(manifestPath) && hasQuestionAssets();
}

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function downloadFile(url, targetPath, redirects = 0) {
  if (redirects > 5) {
    return Promise.reject(new Error(`Too many redirects while downloading ${url}`));
  }

  return new Promise((resolve, reject) => {
    const request = https.get(url, {
      headers: { 'User-Agent': 'AdmitUp-Resource-Downloader' },
    }, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode)) {
        response.resume();
        const nextUrl = response.headers.location;
        if (!nextUrl) {
          reject(new Error(`Redirect without location for ${url}`));
          return;
        }
        resolve(downloadFile(new URL(nextUrl, url).toString(), targetPath, redirects + 1));
        return;
      }

      if (response.statusCode !== 200) {
        response.resume();
        reject(new Error(`Download failed (${response.statusCode}) for ${url}`));
        return;
      }

      const output = fs.createWriteStream(targetPath);
      response.pipe(output);
      output.on('finish', () => {
        output.close(resolve);
      });
      output.on('error', reject);
    });

    request.on('error', reject);
  });
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function downloadFileWithRetry(url, targetPath) {
  const attempts = Number.isFinite(downloadAttempts) && downloadAttempts > 0
    ? Math.floor(downloadAttempts)
    : 3;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await downloadFile(url, targetPath);
      return;
    } catch (error) {
      if (fs.existsSync(targetPath)) {
        fs.rmSync(targetPath, { force: true });
      }

      if (attempt === attempts) throw error;

      const waitMs = attempt * 1500;
      console.warn(`Download attempt ${attempt} failed: ${error.message || error}`);
      console.warn(`Retrying in ${waitMs / 1000}s...`);
      await delay(waitMs);
    }
  }
}

function extractZip(zipPath) {
  const command = process.platform === 'win32'
    ? {
        bin: 'powershell.exe',
        args: [
          '-NoProfile',
          '-ExecutionPolicy',
          'Bypass',
          '-Command',
          `Expand-Archive -LiteralPath ${JSON.stringify(zipPath)} -DestinationPath ${JSON.stringify(rootDir)} -Force`,
        ],
      }
    : {
        bin: 'unzip',
        args: ['-o', zipPath, '-d', rootDir],
      };

  const result = spawnSync(command.bin, command.args, { stdio: 'inherit' });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`${command.bin} exited with code ${result.status}`);
  }
}

async function main() {
  const force = process.argv.includes('--force') || process.env.ADMITUP_RESOURCES_FORCE === '1';
  if (!force && hasResources()) {
    console.log('AdmitUp resources already exist. Skipping download.');
    return;
  }

  const version = String(process.env.ADMITUP_RESOURCES_VERSION || packageJson.version || '').replace(/^v/i, '');
  const url = process.env.ADMITUP_RESOURCES_URL
    || `https://github.com/biounm2/AdmitUp/releases/download/v${version}/AdmitUp-resources-v${version}.zip`;
  const zipPath = path.join(cacheDir, `AdmitUp-resources-v${version}.zip`);

  ensureDir(cacheDir);
  console.log(`Downloading AdmitUp resources from ${url}`);
  await downloadFileWithRetry(url, zipPath);
  console.log(`Extracting AdmitUp resources to ${rootDir}`);
  extractZip(zipPath);

  if (!hasResources()) {
    throw new Error('Resource extraction finished, but required data files are still missing.');
  }

  console.log('AdmitUp resources are ready.');
}

main().catch((error) => {
  console.error(error.message || error);
  process.exit(1);
});
