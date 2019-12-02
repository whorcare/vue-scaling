export const props = [
  {
    param: 'label',
    desc: '设置选中的值',
    type: 'Number | String | Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '单选失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'loading',
    desc: '单选加载中状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'textColor',
    desc: '文字的颜色, <code>0.11.0</code> 新增',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'hoverColor',
    desc: '鼠标移入的颜色',
    type: 'String',
    require: '否',
    default: '#34abfe',
  },
  {
    param: 'checkColor',
    desc: '选中的颜色',
    type: 'String',
    require: '否',
    default: '#1890ff',
  },
  {
    param: 'className',
    desc: 'radio 组件最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'before',
    desc: '输入之前触发的方法，返回 {Event对象,选中的label,选中的值}({ev,label,value})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'change',
    desc: '输入时触发的方法，返回 {Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
  },
];

export const groupProps = [
  {
    param: 'disabled',
    desc: '失效状态',
    type: 'Boolean',
    require: '否',
    default: 'false',
  },
  {
    param: 'radioClassName',
    desc: 'radio 最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'className',
    desc: 'radio 组件最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'hoverColor',
    desc: '鼠标移入的颜色',
    type: 'String',
    require: '否',
    default: '#34abfe',
  },
  {
    param: 'checkColor',
    desc: '选中的颜色',
    type: 'String',
    require: '否',
    default: '#1890ff',
  },
  {
    param: 'fieldNames',
    desc: '自定义 radio 属性的字段名',
    type: 'Object',
    require: '否',
    default: '{ value: \'value\', label: \'label\', key: \'key\', loading: \'loading\', disabled: \'disabled\' }',
  },
  {
    param: 'options',
    desc: '指定可选项， 每项具体设置参照 <code>fieldNames</code> 参数',
    type: 'Array',
    require: '否',
    default: '() => []',
  },
  {
    param: 'before',
    desc: '输入之前触发的方法，返回 {Event对象,选中的label,选中的值}({ev,label,value})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'change',
    desc: '输入时触发的方法，返回 {Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const groupMethods = [
  {
    name: 'change',
    desc: '输入时触发的方法',
    return: '{Event对象,选中的label,选中的值,当前状态}({ev,label,value,status})',
  },
];

export const beforeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '选中的 label',
    type: 'String | Number | Boolean',
    key: 'label',
  },
];

export const changeProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '选中的 label',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
];
