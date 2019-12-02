export const props = [
  {
    param: 'strokeWidth',
    desc: '进度条的宽度，单位 px',
    type: 'Number',
    require: '否',
    default: '8',
  },
  {
    param: 'width',
    desc: '环形进度条画布宽度（只在 <code>type</code> 为 <code>circle</code> 或 <code>dashboard</code> 时可用）',
    type: 'Number',
    require: '否',
    default: '126',
  },
  {
    param: 'type',
    desc: '进度条类型，可选值：<code>line</code> 、 <code>circle</code> 或 <code>dashboard</code>',
    type: 'String',
    require: '否',
    default: 'line',
  },
  {
    param: 'strokeLinecap',
    desc: '进度条末端的类型，可选值: <code>round</code> 或 <code>square</code>',
    type: 'String',
    require: '否',
    default: 'round',
  },
  {
    param: 'status',
    desc: '进度条当前状态，可选值: <code>warning</code> 、 <code>error</code> 、 <code>success</code> 或 <code>空</code>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'color',
    desc: '进度条背景色（会覆盖 <code>status</code> 状态颜色）',
    type: 'String/Function(percent)/Array',
    require: '否',
    default: '无',
  },
  {
    param: 'format',
    desc: '内容的模板函数',
    type: 'Function(percent)',
    require: '否',
    default: 'percent => percent + \'%\'',
  },
  {
    param: 'showInfo',
    desc: '是否显示进度数值或状态图标',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'inside',
    desc: '进度条显示文字内置在进度条内（只在 <code>type="line"</code> 时可用）',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
];

export const methods = [];
