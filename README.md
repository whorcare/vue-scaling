# vue-scaling
基于vue开箱即用缩放组件
(A super easy zomm components for Vue!)
# pc & wap 端效果
![双击缩放或者移动到原点](https://1img.evente.cn/84/23/24/91d3e0e8561ea75bf9e4adcfdf.jpg?imageView2/2/w/740)
![双击缩放或者移动到原点](https://0img.evente.cn/69/1e/19/bcfd8bc55db61d537324789c18.jpg?imageView2/2/w/740)
# 安装
```
npm i vue-scaling
```
# 使用组件
##### 注册
```
// 全局
import vueScaling from 'vue-scaling'
Vue.use(vueScaling)
```

##### 使用
```
// 
<vueScaling :height="400" :width="400">
  <div style="background:rgba(97, 72, 72, 0.5);width:400px;height:400px"></div>
</vueScaling>
```

# 特性
使用 TypeScript 构建，完整的单元测试，提供完整的类型定义文件。
现代浏览器和 IE9 及以上。
pc&wap 通用的缩放放大点击 Vue 组件 开箱即用。

# API
### 参数
属性 | 含义 |  类型 |默认值 | 是否必填
---|---|---|---|---
width| 容器宽度 | Number| 400 |推荐必填|
height| 容器高度 | Number| 400 |推荐必填|
maxScale| 最大缩放倍数 | Number | 2 | 否|
minScale| 最小缩放倍数 | Number | 0.5 | 否|

### emit方法
属性 | 含义 |  返回值 | 是否必填
---|---|---|---
moveChange| 移动时的emit | {x, y} |  否 |
scaleChange| 缩放时的emit | {x, y} |  否 |

# 注意
通过改变css的overflow:hidden即可实现 拖动缩放隐藏边界的效果

### 相关参考
1. [vue-TypeScript](https://cn.vuejs.org/v2/guide/typescript.html) 
2. [vue-touch](https://github.com/vuejs/vue-touch)
3. [matrix](https://www.jianshu.com/p/956d54376338) 
...

### 如果你觉得这个项目有趣 务必请给个star~ (҂‾ ▵‾)σ(˚▽˚’!)/
[给我star~](https://github.com/whorcare/vue-scaling)

### 交流
##### 有什么意见,或者bug 或者想一起开发vue-scaling
![我的微信](https://0img.evente.cn/0f/41/65/8ad030fc5d9f82f6345b3d6e7c.jpg?imageView2/2/w/220)

### ISS
[提iss](https://github.com/whorcare/vue-scaling/issues/new)
