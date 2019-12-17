<!--  -->
<template>
  <vueScaling style="width: 400px;height:400px;overflow: hidden">
    <!-- <img src="https://0img.evente.cn/1a/0a/f4/efa087176046673ba4820c8d32.jpg" style="width: 400px;height: 400px"> -->
    <div style="background:rgba(97, 72, 72, 0.5);width:400px;height:400px"></div>
  </vueScaling>
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

}
</script>
<style lang='scss'>
</style>
