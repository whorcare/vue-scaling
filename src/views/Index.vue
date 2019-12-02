<template>
  <div class="layout">
    <router-view/>
  </div>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';

interface MenuStyleEntity {
  height?: string;
}

@Component
export default class IndexView extends Vue {
  menuStyle: MenuStyleEntity = {};

  mounted() {
    this.setTitle(this.$route);
  }

  @Watch('$route')
  setTitle(val: any) {
    document.title = val.meta.title;
  }
}
</script>

<style lang="scss">
</style>
