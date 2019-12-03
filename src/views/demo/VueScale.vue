<template>
  <div class="affix">
    <VueScale :height="400" :width="400" @moveChange="moveChange">
      <div style="background:rgba(97, 72, 72, 0.5);width:400px;height:400px"></div>
    </VueScale>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VueScale from '@/views/components/VueScalingDemo.vue';

@Component({
  components: {
    VueScale,
  },
})
export default class vueScalingOut extends Vue {
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

<style lang="scss">
.affix {
  &-box {
    width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    &-left {
      height: 2000px;
      width: 760px;
      margin-right: 20px;
      background: #f00;
      padding: 32px 20px 24px;
      border-radius: 8px;
      box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.06);
    }

    &-right {
      position: relative;
      width: 320px;
    }
  }
}
</style>
