export const props = [
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'loading',
    desc: '确定按钮的加载状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'interval',
    desc: '下拉框间距，单位 px',
    type: 'Number',
    require: '否',
    default: '4',
  },
  {
    param: 'okText',
    desc: '设置确定文案',
    type: 'String',
    require: '否',
    default: '确定',
  },
  {
    param: 'cancelText',
    desc: '设置取消文案',
    type: 'String',
    require: '否',
    default: '取消',
  },
  {
    param: 'placement',
    desc: '气泡框位置，可选 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <br> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code> 。',
    type: 'String',
    require: '否',
    default: 'top',
  },
  {
    param: 'className',
    desc: '自定义组件最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'getContainer',
    desc: '浮层渲染父节点，默认渲染到 body 上。支持返回 <code> Promise </code>',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc: '改变触发，返回 状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'ok',
    desc: '点击确定触发，返回 状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'cancel',
    desc: '点击取消触发，返回 状态',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '状态',
  },
  {
    name: 'ok',
    desc: '点击确定触发',
    return: '状态',
  },
  {
    name: 'cancel',
    desc: '点击取消触发',
    return: '状态',
  },
];
