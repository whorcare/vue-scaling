export const props = [
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'enterDelay',
    desc: '鼠标移入后延时多少才显示 Tooltip ，单位：毫秒',
    type: 'Number',
    require: '否',
    default: '0',
  },
  {
    param: 'leaveDelay',
    desc: '鼠标移出后延时多少才隐藏 Tooltip ，单位：毫秒',
    type: 'Number',
    require: '否',
    default: '100',
  },
  {
    param: 'interval',
    desc: '下拉框间距，单位 px',
    type: 'Number',
    require: '否',
    default: '4',
  },
  {
    param: 'placement',
    desc: '气泡框位置，可选 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <br> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code> 。',
    type: 'String',
    require: '否',
    default: 'top',
  },
  {
    param: 'trigger',
    desc: '触发行为，可选 <code>hover/click</code>',
    type: 'String',
    require: '否',
    default: 'hover',
  },
  {
    param: 'content',
    desc: '内容',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'arrowColor',
    desc: '三角的颜色',
    type: 'Object',
    require: '否',
    default: '无',
  },
  {
    param: 'contentStyle',
    desc: '内容的样式',
    type: 'Object',
    require: '否',
    default: '无',
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
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '状态',
  },
];
