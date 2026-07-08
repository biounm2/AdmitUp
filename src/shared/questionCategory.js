const { normalizeQuestionTaxonomy } = require('./examTaxonomy');

const FAKE_QUESTION_PATTERNS = ['题目正在全力以赴征集', '将会在征集到后第一时间上传'];

function trimText(value) {
  return String(value || '').trim();
}

function isFakeQuestionContent(content) {
  const text = trimText(content);
  return !text || text === '<' || FAKE_QUESTION_PATTERNS.some((pattern) => text.includes(pattern));
}

function hasQuestionHtmlContent(content) {
  const html = trimText(content);
  return /<img\b/i.test(html) || /<svg\b/i.test(html) || /<table\b/i.test(html);
}

function isFakeQuestion(question = {}) {
  if (hasQuestionHtmlContent(question.content_html || question.contentHtml)) return false;
  return isFakeQuestionContent(question.content);
}

function inferCategoryFromQuestion(question = {}) {
  return normalizeQuestionTaxonomy(question).category;
}

module.exports = {
  inferCategoryFromQuestion,
  normalizeQuestionTaxonomy,
  isFakeQuestion,
  isFakeQuestionContent,
};
