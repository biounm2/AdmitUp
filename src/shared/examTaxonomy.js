const EXAM_TRACKS = [
  { key: 'gongkao', label: '考公', subject: 'xingce' },
  { key: 'kaoyan', label: '考研', subject: 'kaoyan' },
];

const GONGKAO_CATEGORIES = [
  {
    key: 'yanyu',
    name: '言语理解',
    color: 'var(--category-yanyu)',
    aliases: ['言语理解', '言语理解与表达', '言语'],
    subCategories: [
      { key: 'xuanci', name: '选词填空', aliases: ['逻辑填空', '选词填空'] },
      { key: 'yueduan', name: '片段阅读', aliases: ['中心理解', '细节判断', '标题填入', '片段阅读'] },
      { key: 'yuju', name: '语句表达', aliases: ['语句排序', '病句', '歧义句', '语句表达'] },
      { key: 'wenzhang', name: '文章阅读', aliases: ['篇章阅读', '文章阅读'] },
    ],
    rules: ['这段文字', '文段', '依次填入', '语句排序', '病句', '成语', '词语'],
  },
  {
    key: 'shuliang',
    name: '数量关系',
    color: 'var(--category-shuliang)',
    aliases: ['数量关系', '数量'],
    subCategories: [
      { key: 'jisuan', name: '数学运算', aliases: ['数学运算', '计算问题', '工程问题', '行程问题', '概率问题', '几何问题'] },
      { key: 'tuili', name: '数字推理', aliases: ['数字推理', '数字序列', '数列'] },
    ],
    rules: ['工程问题', '行程问题', '概率问题', '几何问题', '利润', '浓度', '速度', '效率'],
  },
  {
    key: 'panduan',
    name: '判断推理',
    color: 'var(--category-panduan)',
    aliases: ['判断推理', '判断'],
    subCategories: [
      { key: 'tuxing', name: '图形推理', aliases: ['图形推理', '图像推理', '空间重构', '立体拼合'] },
      { key: 'dingyi', name: '定义判断', aliases: ['定义判断'] },
      { key: 'leibi', name: '类比推理', aliases: ['类比推理'] },
      { key: 'luoji', name: '逻辑判断', aliases: ['逻辑判断', '加强削弱', '翻译推理', '真假推理'] },
    ],
    rules: ['根据上述定义', '图形', '最能支持', '最能削弱', '如果那么', '只有才'],
  },
  {
    key: 'ziliao',
    name: '资料分析',
    color: 'var(--category-ziliao)',
    aliases: ['资料分析', '资料'],
    subCategories: [
      { key: 'wenzi', name: '文字资料', aliases: ['文字资料'] },
      { key: 'biaoge', name: '表格资料', aliases: ['表格资料'] },
      { key: 'tubiao', name: '图形资料', aliases: ['图形资料'] },
      { key: 'zonghe', name: '综合资料', aliases: ['资料分析', '综合资料'] },
      { key: 'zengzhang', name: '增长率', aliases: ['增长率'] },
    ],
    rules: ['根据下列资料', '根据以下资料', '图表', '统计表', '同比', '环比', '增长率'],
  },
  {
    key: 'changshi',
    name: '常识判断',
    color: 'var(--category-changshi)',
    aliases: ['常识判断', '常识'],
    subCategories: [
      { key: 'zhengzhi', name: '政治', aliases: ['理论政策', '马克思主义', '政治'] },
      { key: 'jingji', name: '经济', aliases: ['经济', '管理'] },
      { key: 'falv', name: '法律', aliases: ['法律', '公文'] },
      { key: 'keji', name: '科技', aliases: ['自然科技', '科技'] },
      { key: 'renwen', name: '人文', aliases: ['人文历史', '历史', '人文'] },
      { key: 'dili', name: '地理', aliases: ['地理国情', '地理'] },
    ],
    rules: ['习近平', '新时代', '法律', '经济', '科技', '历史', '地理'],
  },
];

const KAOYAN_CATEGORIES = [
  {
    key: 'kaoyan_math',
    name: '高等数学',
    color: 'var(--category-kaoyan-math, #5d77c8)',
    aliases: ['高等数学', '考研数学', '数学一', '数学二', '数学三', '高数', '数学'],
    subCategories: [
      { key: 'limit_continuity', name: '极限与连续', aliases: ['极限', '连续', '极限与连续'] },
      { key: 'derivative', name: '导数与微分', aliases: ['导数', '微分', '一元微分'] },
      { key: 'integral', name: '积分学', aliases: ['积分', '不定积分', '定积分'] },
      { key: 'multivariable', name: '多元函数', aliases: ['多元函数', '多元微积分'] },
      { key: 'series_equation', name: '级数与微分方程', aliases: ['级数', '微分方程'] },
      { key: 'linear_probability', name: '线代与概率', aliases: ['线性代数', '概率统计', '矩阵', '概率'] },
    ],
    rules: ['函数', '极限', '导数', '微分', '积分', '矩阵', '向量', '概率', '统计'],
  },
  {
    key: 'kaoyan_408_data_structure',
    name: '408 数据结构',
    color: 'var(--category-kaoyan-408-ds, #b1823f)',
    aliases: ['408 数据结构', '数据结构', '408数据结构'],
    subCategories: [
      { key: 'linear_list', name: '线性表', aliases: ['线性表', '链表', '顺序表'] },
      { key: 'stack_queue', name: '栈与队列', aliases: ['栈', '队列'] },
      { key: 'tree_graph', name: '树与图', aliases: ['树', '二叉树', '图'] },
      { key: 'search_sort', name: '查找与排序', aliases: ['查找', '排序'] },
      { key: 'algorithm_complexity', name: '算法复杂度', aliases: ['算法', '复杂度'] },
    ],
    rules: ['线性表', '链表', '栈', '队列', '二叉树', '图', '排序', '查找'],
  },
  {
    key: 'kaoyan_408_computer_org',
    name: '408 计算机组成原理',
    color: 'var(--category-kaoyan-408-co, #8b7de8)',
    aliases: ['408 计算机组成原理', '计算机组成原理', '计组', '408计组'],
    subCategories: [
      { key: 'data_representation', name: '数据表示', aliases: ['数据表示', '补码', '浮点数'] },
      { key: 'cpu', name: 'CPU 与指令系统', aliases: ['CPU', '指令系统', '控制器'] },
      { key: 'memory_system', name: '存储系统', aliases: ['存储器', 'Cache', '虚拟存储'] },
      { key: 'io_system', name: '输入输出系统', aliases: ['I/O', '输入输出', '总线'] },
    ],
    rules: ['补码', '浮点数', '指令', 'CPU', 'Cache', '存储器', '总线'],
  },
  {
    key: 'kaoyan_408_os',
    name: '408 操作系统',
    color: 'var(--category-kaoyan-408-os, #4aa98b)',
    aliases: ['408 操作系统', '操作系统', '408操作系统'],
    subCategories: [
      { key: 'process_thread', name: '进程与线程', aliases: ['进程', '线程', '调度'] },
      { key: 'sync_deadlock', name: '同步与死锁', aliases: ['同步', '互斥', '死锁', '信号量'] },
      { key: 'memory_management', name: '内存管理', aliases: ['内存管理', '分页', '分段'] },
      { key: 'file_io', name: '文件与 I/O', aliases: ['文件系统', '磁盘', 'I/O'] },
    ],
    rules: ['进程', '线程', '调度', '死锁', '信号量', '分页', '文件系统'],
  },
  {
    key: 'kaoyan_408_network',
    name: '408 计算机网络',
    color: 'var(--category-kaoyan-408-network, #c89a46)',
    aliases: ['408 计算机网络', '计算机网络', '计网', '408计网'],
    subCategories: [
      { key: 'network_arch', name: '体系结构', aliases: ['OSI', 'TCP/IP', '体系结构'] },
      { key: 'data_link', name: '数据链路层', aliases: ['数据链路层', '以太网', 'MAC'] },
      { key: 'network_layer', name: '网络层', aliases: ['IP', '路由', '网络层'] },
      { key: 'transport_layer', name: '传输层', aliases: ['TCP', 'UDP', '传输层'] },
      { key: 'application_layer', name: '应用层', aliases: ['HTTP', 'DNS', '应用层'] },
    ],
    rules: ['OSI', 'TCP', 'UDP', 'IP', 'HTTP', 'DNS', '路由', '以太网'],
  },
  {
    key: 'kaoyan_english',
    name: '考研英语',
    color: 'var(--category-kaoyan-english, #4f8f7f)',
    aliases: ['考研英语', '英语', '英语一', '英语二'],
    subCategories: [
      { key: 'cloze', name: '完形填空', aliases: ['完形', '完形填空'] },
      { key: 'reading', name: '阅读理解', aliases: ['阅读', '阅读理解'] },
      { key: 'new_type', name: '新题型', aliases: ['新题型', '段落排序', '小标题'] },
      { key: 'translation', name: '翻译', aliases: ['翻译', '英译汉'] },
      { key: 'writing', name: '写作', aliases: ['写作', '作文', '小作文', '大作文'] },
      { key: 'vocabulary', name: '词汇语法', aliases: ['词汇', '语法', '长难句'] },
    ],
    rules: ['read the following', 'passage', 'translation', 'writing', 'vocabulary', 'cloze'],
  },
  {
    key: 'kaoyan_politics',
    name: '考研政治',
    color: 'var(--category-kaoyan-politics, #c65f5f)',
    aliases: ['考研政治', '政治', '政治理论'],
    subCategories: [
      { key: 'marxism', name: '马原', aliases: ['马原', '马克思主义基本原理'] },
      { key: 'mao_special', name: '毛中特', aliases: ['毛中特', '毛泽东思想和中国特色社会主义理论体系'] },
      { key: 'modern_history', name: '史纲', aliases: ['史纲', '中国近现代史纲要'] },
      { key: 'ethics_law', name: '思修法基', aliases: ['思修', '法基', '思想道德与法治'] },
      { key: 'current_politics', name: '时政', aliases: ['时政', '形势与政策'] },
    ],
    rules: ['马克思主义', '中国特色社会主义', '毛泽东思想', '近现代史', '思想道德', '法治', '时政'],
  },
];

const EXAM_TAXONOMIES = {
  gongkao: {
    defaultCategory: 'yanyu',
    categories: GONGKAO_CATEGORIES,
  },
  kaoyan: {
    defaultCategory: 'kaoyan_math',
    categories: KAOYAN_CATEGORIES,
  },
};

function trimText(value) {
  return String(value || '').trim();
}

function normalizeText(value) {
  return trimText(value).replace(/\s+/g, '').toLowerCase();
}

function normalizeExamTrack(input) {
  const value = trimText(input);
  return EXAM_TRACKS.some((track) => track.key === value) ? value : 'gongkao';
}

function getSubjectForTrack(track) {
  return EXAM_TRACKS.find((item) => item.key === normalizeExamTrack(track))?.subject || 'xingce';
}

function getTrackBySubject(subject) {
  const value = trimText(subject).toLowerCase();
  if (value === 'kaoyan' || value.startsWith('kaoyan_')) return 'kaoyan';
  return 'gongkao';
}

function getTaxonomy(input = 'gongkao') {
  const key = EXAM_TAXONOMIES[input] ? input : getTrackBySubject(input);
  return EXAM_TAXONOMIES[key] || EXAM_TAXONOMIES.gongkao;
}

function getCategories(input = 'gongkao') {
  return getTaxonomy(input).categories;
}

function getDefaultCategory(input = 'gongkao') {
  return getTaxonomy(input).defaultCategory;
}

function getCategoryMap(input = 'gongkao') {
  return Object.fromEntries(getCategories(input).map((category) => [category.key, category]));
}

function getSubCategoryMap(input = 'gongkao') {
  const entries = [];
  getCategories(input).forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      entries.push([subCategory.key, { ...subCategory, category: category.key }]);
    });
  });
  return Object.fromEntries(entries);
}

function getCategoryNameToKey(input = 'gongkao') {
  const entries = [];
  getCategories(input).forEach((category) => {
    [category.key, category.name, ...(category.aliases || [])].forEach((alias) => {
      if (alias) entries.push([trimText(alias), category.key]);
    });
  });
  return Object.fromEntries(entries);
}

function getSubCategoryNameToKey(input = 'gongkao') {
  const entries = [];
  getCategories(input).forEach((category) => {
    category.subCategories.forEach((subCategory) => {
      [subCategory.key, subCategory.name, ...(subCategory.aliases || [])].forEach((alias) => {
        if (alias) entries.push([trimText(alias), subCategory.key]);
      });
    });
  });
  return Object.fromEntries(entries);
}

function getDefaultSubCategory(categoryKey, input = 'gongkao') {
  const category = getCategoryMap(input)[categoryKey];
  return category?.subCategories?.[0]?.key || '';
}

function inferByRules(content, input = 'gongkao') {
  const normalized = normalizeText(content);
  let best = '';
  let bestScore = 0;
  getCategories(input).forEach((category) => {
    const score = (category.rules || []).reduce((sum, pattern) => (
      sum + (normalized.includes(normalizeText(pattern)) ? 1 : 0)
    ), 0);
    if (score > bestScore) {
      best = category.key;
      bestScore = score;
    }
  });
  return best;
}

function normalizeQuestionTaxonomy(question = {}, options = {}) {
  const trackOrSubject = options.track || options.subject || question.subject || question.track || 'gongkao';
  const categoryMap = getCategoryMap(trackOrSubject);
  const subCategoryMap = getSubCategoryMap(trackOrSubject);
  const categoryNameToKey = getCategoryNameToKey(trackOrSubject);
  const subCategoryNameToKey = getSubCategoryNameToKey(trackOrSubject);

  const rawCategory = trimText(question.category);
  const rawSubCategory = trimText(question.subCategory || question.sub_category);
  const aliasedSubCategory = subCategoryNameToKey[rawSubCategory] || subCategoryNameToKey[rawCategory] || '';
  const categoryFromSub = aliasedSubCategory ? subCategoryMap[aliasedSubCategory]?.category : '';
  const category = categoryFromSub
    || inferByRules(question.content || '', trackOrSubject)
    || categoryNameToKey[rawCategory]
    || (categoryMap[rawCategory] ? rawCategory : '')
    || getDefaultCategory(trackOrSubject);

  const subCategory = (
    aliasedSubCategory && subCategoryMap[aliasedSubCategory]?.category === category ? aliasedSubCategory : ''
  ) || getDefaultSubCategory(category, trackOrSubject);

  return { category, subCategory };
}

function getCategoryName(categoryKey, input = 'gongkao') {
  return getCategoryMap(input)[categoryKey]?.name || categoryKey || '';
}

function getSubCategoryName(subCategoryKey, input = 'gongkao') {
  return getSubCategoryMap(input)[subCategoryKey]?.name || subCategoryKey || '';
}

module.exports = {
  EXAM_TRACKS,
  EXAM_TAXONOMIES,
  getCategories,
  getCategoryMap,
  getCategoryName,
  getCategoryNameToKey,
  getDefaultCategory,
  getDefaultSubCategory,
  getSubCategoryMap,
  getSubCategoryName,
  getSubCategoryNameToKey,
  getSubjectForTrack,
  getTaxonomy,
  getTrackBySubject,
  inferByRules,
  normalizeExamTrack,
  normalizeQuestionTaxonomy,
};
