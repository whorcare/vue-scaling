const url = 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type';

export const props = [
  {
    param: 'type',
    desc: '设置按钮类型，可选值为 <code>info</code> <code>border</code> <code>dashed</code> <code>danger</code> 或者不设',
    type: 'String',
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
    param: 'htmlType',
    desc: `设置 <code>button</code> 原生的 <code>type</code> 值，可选值请参考 <a class="link" target="_blank" href="${url}">HTML 标准</a>`,
    type: 'String',
    require: '否',
    default: 'button',
  },
  {
    param: 'stop',
    desc: '按钮点击是否冒泡。 <code>0.9.0</code> 新增。',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '设置按钮载入状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '按钮失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'ghost',
    desc: '幽灵属性，使按钮背景透明',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'className',
    desc: '自定义按钮最外层的 class',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'click',
    desc: '点击动效之后触发的点击事件，返回 {event, key}',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'click',
    desc: '点击动效之后触发',
    return: '{event, key}',
  },
];

export const clickProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '组件传入的 key 属性',
    type: 'String',
    key: 'key',
  },
  {
    desc: '动画的Event对象',
    type: 'String',
    key: 'animEvent',
  },
];
