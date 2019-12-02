export const props = [
  {
    param: 'options',
    desc: '指定可选项， 每项具体设置参照 <code>fieldNames</code> 参数',
    type: 'Array',
    require: '否',
    default: '无',
  },
  {
    param: 'fieldNames',
    desc: '自定义属性的字段名',
    type: 'Object',
    require: '否',
    default: '{ value: \'value\', label: \'label\', children: \'children\', loading: \'loading\', disabled: \'disabled\' }',
  },
  {
    param: 'search',
    desc: '搜索的开关',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'disabled',
    desc: '禁用模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'transfer',
    desc: '是否转移到 body 下',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'emptyText',
    desc: '搜索未匹配到的文案',
    type: 'String',
    require: '否',
    default: '未匹配到结果',
  },
  {
    param: 'searchWidth',
    desc: '搜索模式，弹框的宽度',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置大小，可选值为 <code>small</code> <code>large</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placeholder',
    desc: '选择框默认文字',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'placement',
    desc: '下拉框位置',
    type: 'String',
    require: '否',
    default: 'bottomLeft',
  },
  {
    param: 'interval',
    desc: '下拉框间距，单位 px',
    type: 'Number',
    require: '否',
    default: '4',
  },
  {
    param: 'before',
    desc: '改变之前触发，返回 Promise 对象',
    type: 'Function',
    require: '否',
    default: 'function() {return new Promise((resolve, reject) => {resolve();});}',
  },
  {
    param: 'getContainer',
    desc: '浮层渲染父节点，默认渲染到 body 上。支持返回 <code> Promise </code>',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'searchRender',
    desc: '搜索模式，搜索后展示的渲染函数。 返回 {当前render方法的渲染函数， 搜索关键词，每条搜索结果的数据，所有搜索结果集合}(createElement,searchKeyWord,item,searchResult)',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'displayRender',
    desc: '选择后展示的渲染函数。 返回{选到最后一级之后的数据，所有点击元素的数据，真正的value值，选择时候的value 值。所有下拉选项配置，当前点击选项的数据}(chooseResult, chooseAllItem, realValue, chooseValue, options, currentOption)',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'change',
    desc: '改变触发，返回 {当前选项的label值，当前多级值的集合，下拉选项，当前索引，级数索引，下一级的数据，Event对象,当前选中的数据}({current,value,options,index,floor,nextPanel,ev,item})',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
  {
    param: 'click',
    desc: '点击触发，返回 Event 对象',
    type: 'Function',
    require: '否',
    default: '() => {}',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '改变触发',
    return: '{当前选项的label值，当前多级值的集合，下拉选项，当前索引，级数索引，下一级的数据，Event对象,当前选中的数据}({current,value,options,index,floor,nextPanel,ev,item})',
  },
  {
    name: 'click',
    desc: '点击触发',
    return: 'Event 对象',
  },
];

export const searchRenderProps = [
  {
    desc: '当前render方法的渲染函数',
    type: 'Function',
    key: 'createElement',
  },
  {
    desc: '搜索关键词',
    type: 'String',
    key: 'searchKeyWord',
  },
  {
    desc: '每条搜索结果的数据',
    type: 'Object',
    key: 'item',
  },
  {
    desc: '所有搜索结果集合',
    type: 'Array',
    key: 'searchResult',
  },
];

export const displayRenderProps = [
  {
    desc: '选到最后一级之后的数据',
    type: 'Array',
    key: 'chooseResult',
  },
  {
    desc: '所有点击元素的数据',
    type: 'Array',
    key: 'chooseAllItem',
  },
  {
    desc: '真正的value值',
    type: 'Array',
    key: 'realValue',
  },
  {
    desc: '选择时候的 value 值',
    type: 'Array',
    key: 'chooseValue',
  },
  {
    desc: '所有下拉选项配置',
    type: 'Array',
    key: 'options',
  },
  {
    desc: '当前点击选项的数据',
    type: 'Object',
    key: 'currentOption',
  },
];

export const changeProps = [
  {
    desc: '当前选项的label值',
    type: 'String',
    key: 'current',
  },
  {
    desc: '下一级的数据',
    type: 'Array',
    key: 'children',
  },
  {
    desc: '当前多级值的集合',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '当前选中的数据',
    type: 'Object',
    key: 'item',
  },
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '下拉选项',
    type: 'Array',
    key: 'value',
  },
  {
    desc: '当前索引',
    type: 'Number',
    key: 'index',
  },
  {
    desc: '级数索引',
    type: 'Number',
    key: 'floor',
  },
];
