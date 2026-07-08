export const EXAM_TRACKS = [
  { key: "gongkao", label: "考公", subject: "xingce" },
  { key: "kaoyan", label: "考研", subject: "kaoyan" },
];

const GONGKAO_CATEGORIES = [
  { key: "yanyu", name: "言语理解", color: "var(--category-yanyu)", aliases: ["言语理解", "言语理解与表达", "言语"], subCategories: [{ key: "xuanci", name: "选词填空" }, { key: "yueduan", name: "片段阅读" }, { key: "yuju", name: "语句表达" }, { key: "wenzhang", name: "文章阅读" }] },
  { key: "shuliang", name: "数量关系", color: "var(--category-shuliang)", aliases: ["数量关系", "数量"], subCategories: [{ key: "jisuan", name: "数学运算" }, { key: "tuili", name: "数字推理" }] },
  { key: "panduan", name: "判断推理", color: "var(--category-panduan)", aliases: ["判断推理", "判断"], subCategories: [{ key: "tuxing", name: "图形推理" }, { key: "dingyi", name: "定义判断" }, { key: "leibi", name: "类比推理" }, { key: "luoji", name: "逻辑判断" }] },
  { key: "ziliao", name: "资料分析", color: "var(--category-ziliao)", aliases: ["资料分析", "资料"], subCategories: [{ key: "wenzi", name: "文字资料" }, { key: "biaoge", name: "表格资料" }, { key: "tubiao", name: "图形资料" }, { key: "zonghe", name: "综合资料" }, { key: "zengzhang", name: "增长率" }] },
  { key: "changshi", name: "常识判断", color: "var(--category-changshi)", aliases: ["常识判断", "常识"], subCategories: [{ key: "zhengzhi", name: "政治" }, { key: "jingji", name: "经济" }, { key: "falv", name: "法律" }, { key: "keji", name: "科技" }, { key: "renwen", name: "人文" }, { key: "dili", name: "地理" }] },
];

const KAOYAN_CATEGORIES = [
  { key: "kaoyan_math", name: "高等数学", color: "var(--category-kaoyan-math, #5d77c8)", aliases: ["高等数学", "考研数学", "数学一", "数学二", "数学三", "高数", "数学"], subCategories: [{ key: "limit_continuity", name: "极限与连续" }, { key: "derivative", name: "导数与微分" }, { key: "integral", name: "积分学" }, { key: "multivariable", name: "多元函数" }, { key: "series_equation", name: "级数与微分方程" }, { key: "linear_probability", name: "线代与概率" }] },
  { key: "kaoyan_408_data_structure", name: "408 数据结构", color: "var(--category-kaoyan-408-ds, #b1823f)", aliases: ["408 数据结构", "数据结构", "408数据结构"], subCategories: [{ key: "linear_list", name: "线性表" }, { key: "stack_queue", name: "栈与队列" }, { key: "tree_graph", name: "树与图" }, { key: "search_sort", name: "查找与排序" }, { key: "algorithm_complexity", name: "算法复杂度" }] },
  { key: "kaoyan_408_computer_org", name: "408 计算机组成原理", color: "var(--category-kaoyan-408-co, #8b7de8)", aliases: ["408 计算机组成原理", "计算机组成原理", "计组", "408计组"], subCategories: [{ key: "data_representation", name: "数据表示" }, { key: "cpu", name: "CPU 与指令系统" }, { key: "memory_system", name: "存储系统" }, { key: "io_system", name: "输入输出系统" }] },
  { key: "kaoyan_408_os", name: "408 操作系统", color: "var(--category-kaoyan-408-os, #4aa98b)", aliases: ["408 操作系统", "操作系统", "408操作系统"], subCategories: [{ key: "process_thread", name: "进程与线程" }, { key: "sync_deadlock", name: "同步与死锁" }, { key: "memory_management", name: "内存管理" }, { key: "file_io", name: "文件与 I/O" }] },
  { key: "kaoyan_408_network", name: "408 计算机网络", color: "var(--category-kaoyan-408-network, #c89a46)", aliases: ["408 计算机网络", "计算机网络", "计网", "408计网"], subCategories: [{ key: "network_arch", name: "体系结构" }, { key: "data_link", name: "数据链路层" }, { key: "network_layer", name: "网络层" }, { key: "transport_layer", name: "传输层" }, { key: "application_layer", name: "应用层" }] },
  { key: "kaoyan_english", name: "考研英语", color: "var(--category-kaoyan-english, #4f8f7f)", aliases: ["考研英语", "英语", "英语一", "英语二"], subCategories: [{ key: "cloze", name: "完形填空" }, { key: "reading", name: "阅读理解" }, { key: "new_type", name: "新题型" }, { key: "translation", name: "翻译" }, { key: "writing", name: "写作" }, { key: "vocabulary", name: "词汇语法" }] },
  { key: "kaoyan_politics", name: "考研政治", color: "var(--category-kaoyan-politics, #c65f5f)", aliases: ["考研政治", "政治", "政治理论"], subCategories: [{ key: "marxism", name: "马原" }, { key: "mao_special", name: "毛中特" }, { key: "modern_history", name: "史纲" }, { key: "ethics_law", name: "思修法基" }, { key: "current_politics", name: "时政" }] },
];

function normalizeTrack(track) {
  return EXAM_TRACKS.some((item) => item.key === track) ? track : "gongkao";
}

export function getCategories(track = "gongkao") {
  return normalizeTrack(track) === "kaoyan" ? KAOYAN_CATEGORIES : GONGKAO_CATEGORIES;
}

export function getDefaultCategory(track = "gongkao") {
  return getCategories(track)[0]?.key || "yanyu";
}

export function getSubjectForTrack(track = "gongkao") {
  return EXAM_TRACKS.find((item) => item.key === normalizeTrack(track))?.subject || "xingce";
}

export function getCategoryName(categoryKey, track = "gongkao") {
  return getCategories(track).find((category) => category.key === categoryKey)?.name || categoryKey || "";
}

export function getCategoryNameToKey(track = "gongkao") {
  return Object.fromEntries(getCategories(track).flatMap((category) => (
    [category.key, category.name, ...(category.aliases || [])].map((alias) => [alias, category.key])
  )));
}

export function getSubCategoryName(subCategoryKey, track = "gongkao") {
  for (const category of getCategories(track)) {
    const subCategory = category.subCategories.find((item) => item.key === subCategoryKey);
    if (subCategory) return subCategory.name;
  }
  return subCategoryKey || "";
}
