export const props = [
  {
    param: 'disabled',
    desc: '失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'stop',
    desc: '点击事件是否冒泡',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'inline',
    desc: '是否有 <code>inline-block</code> ，属性排长一行',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'closable',
    desc: '标签是否可以关闭',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'color',
    desc: '标签色',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'colorType',
    desc: '标签颜色的渲染类型，可选值为 <code>all(全部)</code> <code>section(部分)</code>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'close',
    desc: '关闭触发的方法，返回 {Event对象}({ev})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'close',
    desc: '关闭触发的方法',
    return: '{Event对象}({ev})',
  },
];

export const checkTagProps = [
  {
    param: 'disabled',
    desc: '失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'inline',
    desc: '是否有 <code>inline-block</code> ，属性排长一行',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'size',
    desc: '设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
];

export const checkTagMethods = [];

export const newTagProps = [
  {
    param: 'disabled',
    desc: '失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'stop',
    desc: '点击事件是否冒泡',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置按钮大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placeholder',
    desc: '创建标签的默认提示文案',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'error',
    desc: '输入框报错的方法，当返回为 true 的时候，输入框为错误状态。',
    type: 'Function',
    require: '否',
    default: '() => false',
  },
  {
    param: 'before',
    desc: '改变之前触发，返回 Promise 对象',
    type: 'Function',
    require: '否',
    default: 'function() {return new Promise((resolve, reject) => {resolve();});}',
  },
  {
    param: 'change',
    desc: '改变触发，返回 {当前值}({ value })',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const newTagMethods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{当前值}({ value })',
  },
];
