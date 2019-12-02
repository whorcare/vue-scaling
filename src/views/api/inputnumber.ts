export const props = [
  {
    param: 'disabled',
    desc: '设置失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'readonly',
    desc: '设置输入框只读状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'animate',
    desc: '是否动画改变数字',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'animateTime',
    desc: '动画改变的时间',
    type: 'Number',
    require: '否',
    default: '0.3',
  },
  {
    param: 'min',
    desc: '最小值',
    type: 'Number',
    require: '否',
    default: '-Infinity',
  },
  {
    param: 'max',
    desc: '最大值',
    type: 'Number',
    require: '否',
    default: 'Infinity',
  },
  {
    param: 'step',
    desc: '每次改变步数，可以为小数',
    type: 'Number',
    require: '否',
    default: '1',
  },
  {
    param: 'precision',
    desc: '数值精度，原则 step 的小数位和 precision 取最多位数的',
    type: 'Number',
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
    param: 'decimalSeparator',
    desc: '小数点转译',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'formatter',
    desc: '指定输入框展示值的格式',
    type: 'Function',
    require: '否',
    default: 'num => num',
  },
  {
    param: 'parser',
    desc: '指定从 formatter 里转换回数字的方式，和 formatter 搭配使用，用于输入的时候',
    type: 'Function',
    require: '否',
    default: 'input => input',
  },
  {
    param: 'change',
    desc: '改变触发的方法，返回 {当前的值，原始值}({value, original})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发的方法',
    return: '{当前的值，原始值}({value, original})',
  },
];

export const changeProps = [
  {
    desc: '当前的值',
    type: 'Number | String',
    key: 'value',
  },
  {
    desc: '原始值',
    type: 'Number | String',
    key: 'original',
  },
];
