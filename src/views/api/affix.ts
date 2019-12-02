export const props = [
  {
    param: 'offsetTop',
    desc: '距离窗口顶部达到指定偏移量后触发，单位 <code>px</code>',
    type: 'Number',
    require: '否',
    default: '10',
  },
  {
    param: 'offsetBottom',
    desc: '距离窗口底部达到指定偏移量后触发，单位 <code>px</code>',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'index',
    desc: '图钉定位的层级',
    type: 'Number',
    require: '否',
    default: '10',
  },
  {
    param: 'disabled',
    desc: '图钉是否禁用，如果为 true ，那么到达条件也不悬停定位',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'destroy',
    desc: '是否删除滚动监听',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'position',
    desc: '图钉的定位类型',
    type: 'String',
    require: '否',
    default: 'fixed',
  },
  {
    param: 'change',
    desc: '滚动触发的方法，返回 {总状态，滚动状态}({affixStatus, scrollStatus})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '滚动触发的方法',
    return: '{总状态，滚动状态}({affixStatus, scrollStatus})',
  },
];
