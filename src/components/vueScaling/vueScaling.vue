<!--  -->
<template>
  <div class="vue-scale" ref="vueScalingRef" :style="{height: `${height}px`, width: `${width}px`}">
    <!-- eslint-disable max-len -->
    <v-touch
      class="box"
      @panmove="onPan"
      @panstart="onPanStart"
      @pinchmove="onPinch"
      @pinchstart="onPinchStart"
      @doubletap="onDoubleTap"
      @tap="onTap"
      :pinch-options="{ threshold: 0.09 }" :pan-options="{ threshold: 0.01 }"
      :style="{transform: `matrix(${this.tMatrix.join(',')})`, transition: this.duration ? '.3s ease all' : ''}">
      <!--此插槽可以缩放,拖动-->
      <slot></slot>
    </v-touch>
  </div>
</template>

<script lang="ts">
import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';
import VueTouch from '../../../node_modules/vue-touch';

interface point2D {
  x: number,
  y: number,
}

@Component({
  components: {
    VueTouch,
  },
})
export default class vueScaling extends Vue {
  @Prop({ type: Number, default: 100 }) private height!: number;

  @Prop({ type: Number, default: 100 }) private width!: number;

  @Prop({ type: Number, default: 2 }) private maxScale!: number;

  @Prop({ type: Number, default: 0.5 }) private minScale!: number;

  @Prop({ type: Number, default: 2 }) private tapNumber!: number;

  // 阻力 如果为0则没有阻力
  @Prop({ type: Number, default: 0 }) private stopBorder!: number;

  // 开场动画
  @Prop({ type: Boolean, default: false }) private animation!: boolean;

  e: any = null;

  tMatrix: Array<number> = [1, 0, 0, 1, 0, 0]; // x缩放，无，无，y缩放，x平移，y平移

  initScale: number = 1; // 初始化scale

  poscenter: point2D = this.point2D(0, 0); // 缓存双指的中心坐标

  duration: boolean = false; // 设置过渡效果，用于双击缩放效果

  lastTranslate: point2D = this.point2D(0, 0); // 记录上次的偏移值

  lastcenter: point2D = this.point2D(this.width / 2, this.height / 2); // 图像的中心点，用于对比双指中心点

  center: point2D = this.point2D(this.width / 2, this.height / 2);

  nowScale: number = 1; // 缩放scale

  top: number = 0; // 距离顶部

  left: number = 0; // 距离左边

  created() {
    if (this.animation) {
      this.tMatrix = [0.01, 0, 0, 0.01, 0, 0];
    }
  }

  mounted() {
    this.top = (this.$refs.vueScalingRef as Element).getBoundingClientRect().top;
    this.left = (this.$refs.vueScalingRef as Element).getBoundingClientRect().left;
    if (this.animation) {
      this.animationStart();
    }
  }

  onPanStart() {
    this.lastTranslate = this.point2D(this.tMatrix[4], this.tMatrix[5]); // 缓存上一次的偏移值
  }

  // 移动
  onPan(ev: any) {
    this.duration = false;
    const cloneTMatrix = [...this.tMatrix];
    const xStave = this.lastTranslate.x + ev.deltaX;
    const yStave = this.lastTranslate.y + ev.deltaY;
    // debugger;
    if (this.stopBorder > 0) { // 如果stop阻力大于0 移动时将会有边界判定
      const stopTrans = this.stopBorder * this.nowScale;
      if ((xStave < -stopTrans) || (xStave > stopTrans)) {
        return;
      }
      if ((yStave < -stopTrans) || (yStave > stopTrans)) {
        return;
      }
    }
    cloneTMatrix[4] = xStave;
    cloneTMatrix[5] = yStave;
    this.tMatrix = cloneTMatrix;
    this.moveChange({ x: ev.center.x - this.left, y: ev.center.y - this.top });
  }

  onPinch(ev) {
    const nowScale = ev.scale;
    if (this.initScale * nowScale > this.maxScale) { // 最大缩放值
      return;
    }
    if (this.initScale * nowScale < this.minScale) { // 最小缩放值
      return;
    }
    const cloneTMatrix = [...this.tMatrix];
    cloneTMatrix[0] = this.initScale * nowScale;
    cloneTMatrix[3] = this.initScale * nowScale;
    cloneTMatrix[4] = ((1 - nowScale) * this.poscenter.x) + this.lastTranslate.x;
    cloneTMatrix[5] = ((1 - nowScale) * this.poscenter.y) + this.lastTranslate.y;
    this.tMatrix = cloneTMatrix;
    // eslint-disable-next-line
    this.scaleChange(this.initScale * nowScale, { x: ev.center.x - this.left, y: ev.center.y - this.top });
  }

  @Emit('moveChange')
  // eslint-disable-next-line
  moveChange(point2DObj) {
    return { point2DObj, tMatrix: this.tMatrix };
  }

  // 缩放开始
  onPinchStart(ev) {
    this.duration = false;
    this.lastTranslate = this.point2D(this.tMatrix[4], this.tMatrix[5]);//记录上一次的偏移值
    this.initScale = this.tMatrix[0] || 1;
    this.poscenter = this.point2D(ev.center.x - this.left, ev.center.y - this.top);

    //重新计算放大后的中心坐标
    // eslint-disable-next-line
    this.lastcenter = this.point2D(this.center.x + this.lastTranslate.x, this.center.y + this.lastTranslate.y);
    // eslint-disable-next-line
    this.poscenter = this.point2D(ev.center.x - this.lastcenter.x - this.left, ev.center.y - this.top - this.lastcenter.y);
  }

  onTap(ev) {
    if (this.tapNumber !== 1) {
      return;
    }
    this.tapAllFun(ev);
  }

  onDoubleTap(ev) {
    if (this.tapNumber !== 2) {
      return;
    }
    this.tapAllFun(ev);
  }

  // 点击事件合集
  tapAllFun(ev) {
    this.duration = true;
    [this.nowScale] = this.tMatrix;
    const cloneTMatrix = [...this.tMatrix];
    if (this.nowScale !== 1 || this.tMatrix[4] !== 0) {
      //scale不等于1，要重回1
      cloneTMatrix[0] = 1;
      cloneTMatrix[3] = 1;
      cloneTMatrix[4] = 0;
      cloneTMatrix[5] = 0;
      [this.nowScale] = cloneTMatrix;
      this.tMatrix = cloneTMatrix;
      this.scaleChange(1, this.poscenter);
    } else {
      const pointer = ev.center;
      const scale = this.maxScale;
      this.nowScale = scale;
      cloneTMatrix[0] = scale;
      cloneTMatrix[3] = scale;
      cloneTMatrix[4] = (1 - scale) * (pointer.x - this.center.x - this.left);
      cloneTMatrix[5] = (1 - scale) * (pointer.y - this.top - this.center.y);
      this.tMatrix = cloneTMatrix;
      this.scaleChange(scale, { x: pointer.x - this.left, y: pointer.y - this.top });
    }
  }

  // 回到初始状态
  backState() {
    const cloneTMatrix = [...this.tMatrix];
    this.duration = true;
    cloneTMatrix[0] = 1;
    cloneTMatrix[3] = 1;
    cloneTMatrix[4] = 0;
    cloneTMatrix[5] = 0;
    this.tMatrix = cloneTMatrix;
    this.scaleChange(1);
  }

  // 动画函数
  animationStart() {
    setTimeout(() => {
      this.duration = true;
      this.tMatrix = [1.2, 0, 0, 1.2, 0, 0];
      setTimeout(() => {
        this.tMatrix = [1, 0, 0, 1, 0, 0];
      }, 400);
    }, 200);
  }

  @Emit('scaleChange')
  // eslint-disable-next-line
  scaleChange(scale: number, point = {}): object {
    return { scale, point, tMatrix: this.tMatrix };
  }

  // eslint-disable-next-line
  point2D(x: number, y: number): point2D {
    return { x, y };
  }
}
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2,
});
Vue.use(VueTouch, {
  name: 'v-touch',
});
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
  }
}
</style>
