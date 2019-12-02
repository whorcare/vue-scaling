const url = 'https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#%E5%B1%9E%E6%80%A7';

export const props = [
  {
    param: 'maxLength',
    desc: '最大输入长度。 <code>0.15.0</code> 新增。',
    type: 'String|Number',
    require: '否',
    default: '无',
  },
  {
    param: 'showWordLimit',
    desc: '是否显示输入字数统计。 <code>0.15.0</code> 新增。',
    type: 'Boolean',
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
    param: 'size',
    desc: '设置输入框大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'type',
    desc: `设置 <code>input</code> 原生的 <code>type</code> 值，可选值请参考 <a class="link" target="_blank" href="${url}">HTML 标准</a>`,
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '输入框失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'readonly',
    desc: '输入框可读状态 <code>0.17.0</code>',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'error',
    desc: '当返回为 true 的时候，输入框为错误状态。该函数返回的参数(params)： Event对象(ev)， 输入的值(value)， 最大长度(maxLength)，触发的事件或阶段(eventType <code>0.16.0</code> 新增)',
    type: 'Function',
    require: '否',
    default: '(params) => false',
  },
  {
    param: 'change',
    desc: '输入时触发的方法，返回 {Event对象,输入的值}({ev,value})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,输入的值}({ev,value})',
  },
];

export const errorProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '输入的值',
    type: 'String',
    key: 'value',
  },
  {
    desc: '最大长度',
    type: 'String|Number',
    key: 'maxLength',
  },
  {
    desc: '触发的事件或阶段 <code>0.16.0</code> 新增',
    type: 'String',
    key: 'eventType',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '输入的值',
    type: 'String',
    key: 'value',
  },
];
