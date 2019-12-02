<!--  -->
<template>
  <vueScale :height="400" :width="400" @moveChange="moveChange">
    <!-- <img src="https://0img.evente.cn/1a/0a/f4/efa087176046673ba4820c8d32.jpg" style="width: 400px;height: 400px"> -->
    <div style="background:rgba(97, 72, 72, 0.5);width:400px;height:400px"></div>
  </vueScale>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import vueScale from '@/components/vueScale/vueScale.vue';

@Component({
  components: {
    vueScale,
  },
})
export default class vueScaleDemo extends Vue {
  // eslint-disable-next-line
  moveChange(e) {
    console.log(e, 'moveChangeEmit');
  }

  // eslint-disable-next-line
  scaleChange(e) {
    console.log(e, 'scaleChange');
  }
}
</script>
<style lang='scss'>
.vue-scale {
  background: #999;
  // overflow: hidden;

  .box {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    // transform-origin: center center;
  }
}
</style>
