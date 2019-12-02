export const props = [
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '禁用模式',
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
    desc: '设置大小，可选值为 <code>small</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
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
    desc: '改变触发，返回 {Event对象,当前状态}({ev,status})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{Event对象,当前状态}({ev,status})',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'Boolean',
    key: 'status',
  },
];
