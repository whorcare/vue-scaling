<!--  -->
<template>
  <div class="box">
    <!-- 缩略图 -->
    <div class="box-min">
      <div class="box-min-kex" :style="{transform: `matrix(${this.tMatrixZ.join(',')})`}"></div>
    </div>
    <!-- eslint-disable -->
    <vueScaling :height="400" :width="400" :stopBorder="stopBorderZ" @moveChange="moveChange" @scaleChange="scaleChange">
      <!-- <img src="https://0img.evente.cn/1a/0a/f4/efa087176046673ba4820c8d32.jpg" style="width: 400px;height: 400px"> -->
      <div style="background:rgba(97, 72, 72, 0.5);width:400px;height:400px"></div>
    </vueScaling>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Vue,
} from 'vue-property-decorator';
import vueScaling from '@/components/vueScaling/vueScaling.vue';

@Component({
  components: {
    vueScaling,
  },
})
export default class vueScalingDemo extends Vue {
  tMatrixZ: Array<number> = [1, 0, 0, 1, 0, 0]; // x缩放，无，无，y缩放，x平移，y平移

  thumbnailScale: number = 4; // 缩略图缩放倍数

  stopBorderZ: number = 200; // 阻力

  moveChange(e) {
    // eslint-disable-next-line
    this.tMatrixZ = this.toolTM(e.tMatrix);
  }

  scaleChange(e) {
    // eslint-disable-next-line
    this.tMatrixZ = this.toolTM(e.tMatrix);
  }

  toolTM(arr: Array<number>): Array<number> {
    const toolTMArr: Array<number> = [1, 0, 0, 1, 0, 0];
    toolTMArr[0] = arr[0] === 1 ? arr[0] : arr[0] / this.thumbnailScale;
    toolTMArr[3] = arr[3] === 1 ? arr[3] : arr[3] / this.thumbnailScale;
    toolTMArr[4] = arr[4] === 0 ? arr[4] : -arr[4] / this.thumbnailScale / arr[0];
    toolTMArr[5] = arr[5] === 0 ? arr[5] : -arr[5] / this.thumbnailScale / arr[0];
    return toolTMArr;
  }
}
</script>
<style lang='scss'>
.box {
  position: relative;
}

.box-min {
  position: absolute;
  width: 100px;
  height: 100px;
  background: rgb(29, 21, 21);
  z-index: 10;
  top: 10px;
  left: 10px;
  overflow: hidden;
}

.box-min-kex {
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  border: 1px solid red;
  // background: rgba($color: #fff, $alpha: 0.2);
}

.vue-scale {
  background: #999;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

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
