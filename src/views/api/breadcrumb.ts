export const props = [
  {
    param: 'separator',
    desc: '自定义的分隔符',
    type: 'String',
    require: '否',
    default: '/',
  },
  {
    param: 'to',
    desc: '站内跳转',
    type: 'Object',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'routerType',
    desc: '站内跳转的跳转方式',
    type: 'String',
    require: '否',
    default: 'push',
  },
  {
    param: 'open',
    desc: '站外跳转，新标签页打开',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'href',
    desc: '站外跳转',
    type: 'String',
    require: '否',
    default: '无',
  },
];

export const methods = [];
