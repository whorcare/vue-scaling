const url = 'http://momentjs.cn/docs/#/parsing/string-format/';

export const props = [
  {
    param: 'disabled',
    desc: '输入框失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'editable',
    desc: '文本框可输入',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'open',
    desc: '控制弹层是否展开',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'clearable',
    desc: '是否显示清除按钮',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'type',
    desc: '进度条类型，可选值：周<code>week</code> 、 月<code>month</code> 、 年<code>year</code> 或 世纪<code>age</code>',
    type: 'String',
    require: '否',
    default: 'date',
  },
  {
    param: 'defaultPickerValue',
    desc: '当 <code>v-model</code>( <code>value</code> ) 为空时，选择器打开时默认显示的时间',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置输入框大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placeholder',
    desc: '输入框占位文本',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'format',
    desc: `显示在输入框中的格式， 见 <a href="${url}" target="_blank" class="link">日期格式</a>`,
    type: 'String',
    require: '否',
    default: 'YYYY-MM-DD',
  },
  {
    param: 'valueFormat',
    desc: `绑定值的格式， 见 <a href="${url}" target="_blank" class="link">日期格式</a>`,
    type: 'String',
    require: '否',
    default: 'YYYY-MM-DD',
  },
  {
    param: 'placement',
    desc: '气泡框位置，可选 <code>top</code> 、 <code>bottom</code> 、 <code>topLeft</code> <br> <code>topRight</code> 、 <code>bottomLeft</code> 、 <code>bottomRight</code> 。',
    type: 'String',
    require: '否',
    default: 'top',
  },
  {
    param: 'interval',
    desc: '下拉框间距，单位 px',
    type: 'Number',
    require: '否',
    default: '4',
  },
  {
    param: 'firstDayOfWeek',
    desc: '周起始日，默认： 日',
    type: 'Number',
    require: '否',
    default: '0',
  },
  {
    param: 'pickerRender',
    desc: '自定义日期单元格的内容和样式',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'disabledRender',
    desc: '禁止选择部分日期',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'getContainer',
    desc: '浮层渲染父节点，默认渲染到 body 上。支持返回 <code> Promise </code>。支持返回 <code> Promise </code>',
    type: 'Function',
    require: '否',
    default: '() => document.body',
  },
  {
    param: 'change',
    desc: '输入时触发的方法，返回 {Event对象,处理过的值,格式的值,当前的对象,当前行}({ev,trueValue,value,item,dateWeek})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,处理过的值,格式的值,当前的对象,当前行}({ev,trueValue,value,item,dateWeek})',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '处理过的值',
    type: 'String',
    key: 'trueValue',
  },
  {
    desc: '格式的值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '当前的对象',
    type: 'Object',
    key: 'item',
  },
  {
    desc: '当前行',
    type: 'Array',
    key: 'dateWeek',
  },
];
