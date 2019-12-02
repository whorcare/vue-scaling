export const props = [
  {
    param: 'overflowCount',
    desc: '展示封顶的数字值',
    type: 'Number',
    require: '否',
    default: '99',
  },
  {
    param: 'status',
    desc: '设置 Badge 为状态点。，可选值为 <code>success</code> <code>processing</code> <code>default</code> <code>error</code> <code>warning</code> 或者颜色的色值',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'text',
    desc: '在设置了 <code>status</code> 的前提下有效，设置状态点的文本',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'title',
    desc: '设置鼠标放在状态点上时显示的文字',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'showZero',
    desc: '当数值为 0 时，是否展示 Badge',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'dot',
    desc: '不展示数字，只有一个小红点',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
];

export const methods = [];
