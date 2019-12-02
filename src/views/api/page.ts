export const props = [
  {
    param: 'prevText',
    desc: '上一页文案',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'nextText',
    desc: '下一页文案',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'total',
    desc: '数据总数',
    type: 'Number',
    require: '否',
    default: '50',
  },
  {
    param: 'midleSize',
    desc: '数据过多的时候省略号中间的个数',
    type: 'Number',
    require: '否',
    default: '5',
  },
  {
    param: 'pageSize',
    desc: '每页条数',
    type: 'Number',
    require: '否',
    default: '10',
  },
  {
    param: 'Boolean',
    desc: '当添加该属性时，显示为简单分页',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc: '状态改变触发的方法，返回 当前页数',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'showTotal',
    desc: '用于显示数据总量和当前数据顺序，返回 {总数,区间}({total, range})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '当前页数',
  },
];

export const pageJumpProps = [
  {
    param: 'prefix',
    desc: '设置前缀文案',
    type: 'String',
    require: '否',
    default: '跳转',
  },
  {
    param: 'suffix',
    desc: '设置后缀文案',
    type: 'String',
    require: '否',
    default: '页',
  },
];

export const pageJumpMethods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '当前页数',
  },
];

export const showTotalProps = [
  {
    desc: '总数',
    type: 'Number',
    key: 'total',
  },
  {
    desc: '区间',
    type: 'Array',
    key: 'range',
  },
];
