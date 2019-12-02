export const props = [
  {
    param: 'col',
    desc: '表格列的配置描述，具体项见下表',
    type: 'Array',
    require: '否',
    default: '无',
  },
  {
    param: 'options',
    desc: '数据数组',
    type: 'Array',
    require: '否',
    default: '无',
  },
  {
    param: 'showSort',
    desc: '头部筛选的 UI 显示，点击头部可触发 change 回调钩子',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'border',
    desc: '是否展示外边框和列边框',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'showHeader',
    desc: '是否显示表头',
    type: 'Boolean',
    require: '否',
    default: 'true',
  },
  {
    param: 'loading',
    desc: '加载模式',
    type: 'Boolean',
    require: '否',
    default: '无',
  },
  {
    param: 'size',
    desc: '设置按钮大小，可选值为 <code>small</code> 或者不设',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'scroll',
    desc: '设置横向或纵向滚动，也可用于指定滚动区域的宽和高，可以设置为像素值，百分比，具体项见下表',
    type: 'Object',
    require: '否',
    default: '无',
  },
  {
    param: 'header',
    desc: '列头显示文字',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'footer',
    desc: '表格尾部',
    type: 'Function',
    require: '否',
    default: '无',
  },
];

export const methods = [
  {
    name: 'change',
    desc: '点击表头触发的方法',
    return: '{当前表头的配置， 当前表头的索引，排序类型，Event对象}({colItem, colIndex, sortType, ev})',
  },
];

export const colProps = [
  {
    param: 'colSpan',
    desc: '表头列合并,设置为 0 时，不渲染',
    type: 'Number',
    require: '否',
    default: '无',
  },
  {
    param: 'dataIndex',
    desc: '列数据在数据项中对应的 key',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'defaultSortOrder',
    desc: '默认排序顺序，可选值： <code>ascend<.code> | <code>descend</cpde>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'fixed',
    desc: '列是否固定，可选 <code>left</code> >code>right</code>',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'title',
    desc: '列头显示文字',
    type: 'String',
    require: '否',
    default: '无',
  },
  {
    param: 'width',
    desc: '列宽度',
    type: 'String|Number',
    require: '否',
    default: '无',
  },
  {
    param: 'render',
    desc: '生成复杂数据的渲染函数，参数分别为 createElement，{当前文案，行col，行数据，行索引，所有数据}((text, col, optItem, optIndex, options))，@return VNode',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'extendRowRender',
    desc: '生成<strong>行展开</strong>复杂数据的渲染函数，参数分别为 createElement，{行col，行数据，行索引，所有数据}((col, optItem, optIndex, options))，@return VNode',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'col',
    desc: '表身列合并，返回合并的数字， 0 则不显示，不合返回 <code>undefined</code>>',
    type: 'Function',
    require: '否',
    default: '无',
  },
  {
    param: 'row',
    desc: '表身行合并，返回合并的数字， 0 则不显示，不合返回 <code>undefined</code>>',
    type: 'Function',
    require: '否',
    default: '无',
  },
];

export const renderProps = [
  {
    desc: '当前文案',
    type: 'String',
    key: 'text',
  },
  {
    desc: '行col',
    type: 'Object',
    key: 'col',
  },
  {
    desc: '所有数据',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '行数据',
    type: 'Object',
    key: 'optItem',
  },
  {
    desc: '行索引',
    type: 'Number',
    key: 'optIndex',
  },
];

export const extendRowRenderProps = [
  {
    desc: '行col',
    type: 'Object',
    key: 'col',
  },
  {
    desc: '所有数据',
    type: 'Object',
    key: 'options',
  },
  {
    desc: '行数据',
    type: 'Object',
    key: 'optItem',
  },
  {
    desc: '行索引',
    type: 'Number',
    key: 'optIndex',
  },
];

export const changeProps = [
  {
    desc: '当前表头的配置',
    type: 'Object',
    key: 'col',
  },
  {
    desc: 'Event对象',
    type: 'Event',
    key: 'ev',
  },
  {
    desc: '排序类型',
    type: 'String',
    key: 'sortType',
  },
  {
    desc: '当前表头的索引',
    type: 'Number',
    key: 'colIndex',
  },
];
