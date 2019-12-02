import { TITLE } from '@/views/common/constant';

export default [
  {
    path: '/vuescale',
    name: 'VueScale',
    meta: {
      title: TITLE.SCALE,
    },
    component: () => import(/* webpackChunkName: "vuescale" */ '@/views/demo/VueScale.vue'),
  },
];
