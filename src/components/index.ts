// 组件
import vueScaling from './vueScaling/vueScaling.vue';

const waterCpt = {
  vueScaling,
};

const install = (Vue: any) => {
  if ((install as any).installed) return;

  Object.keys(waterCpt).forEach((key) => {
    Vue.component(`${key}`, (waterCpt as any)[key]);
  });
};


if (typeof window !== 'undefined' && (window as any).Vue) {
  install((window as any).Vue);
}

export default {
  version: '1.0.0',
  install,
};
