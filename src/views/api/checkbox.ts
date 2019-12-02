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
    desc: '失效状态',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'indeterminate',
    desc: '设置 indeterminate 状态，只负责样式控制',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'textColor',
    desc: '文字的颜色 <code>0.11.0</code> 新增',
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
    desc: '自定义组件最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc: '状态改变触发的方法，返回 {Event对象,当前状态，选中的值，显示的值，失效状态，半选状态}({ev, status,label,value,disabled,indeterminate})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '{Event对象,当前状态，选中的值，显示的值，失效状态，半选状态}({ev, status,label,value,disabled,indeterminate})',
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
    param: 'checkboxClassName',
    desc: 'checkbox 最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'className',
    desc: 'checkboxgroup 最外层的 class 名字',
    type: 'String | Object | Array',
    require: '否',
    default: '无',
  },
  {
    param: 'fieldNames',
    desc: '自定义 checkbox 属性的字段名',
    type: 'Object',
    require: '否',
    default: '{ value: \'value\', label: \'label\', key: \'key\', disabled: \'disabled\' }',
  },
  {
    param: 'options',
    desc: '指定可选项， 每项具体设置参照 <code>fieldNames</code> 参数',
    type: 'Array',
    require: '否',
    default: '() => []',
  },
  {
    param: 'change',
    desc: '状态改变触发的方法，返回 {Event对象,当前状态，选中的值，选中的数据}({ev,status,value,item})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const groupMethods = [
  {
    name: 'change',
    desc: '状态改变触发的方法',
    return: '{Event对象,当前状态，选中的值，选中的数据}({ev,status,value,item})',
  },
];

export const changeCheckboxGroupProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '选中的数据',
    type: 'Object',
    key: 'item',
  },
];

export const changeCheckboxProps = [
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '当前状态',
    type: 'String | Number | Boolean',
    key: 'status',
  },
  {
    desc: '选中的值',
    type: 'String | Number | Boolean',
    key: 'label',
  },
  {
    desc: '显示的值',
    type: 'String | Number | Boolean',
    key: 'value',
  },
  {
    desc: '失效状态',
    type: 'Boolean',
    key: 'disabled',
  },
  {
    desc: '半选状态',
    type: 'Boolean',
    key: 'indeterminate',
  },
];
