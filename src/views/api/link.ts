export const props = [
  {
    param: 'tag',
    desc: 'link 实际渲染的标签',
    type: 'String',
    require: '否',
    default: 'a',
  },
  {
    param: 'href',
    desc: '点击跳转的外链地址',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'to',
    desc: '站内跳转的地址',
    type: 'Object',
    require: '否',
    default: '无',
  },
  {
    param: 'target',
    desc: '外链跳转的方式',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置超链大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '设置超链载入状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'disabled',
    desc: '按钮失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
];

export const methods = [];
