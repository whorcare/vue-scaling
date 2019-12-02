import Vue from 'vue';
import Router from 'vue-router';
import concat from 'lodash/concat';
import Home from '@/views/Home.vue';
import { TITLE } from '@/views/common/constant';

Vue.use(Router);

// 动态路由管理
export const importDemoRouters = () => {
  const rq = require.context('@/routers', true, /\.routers\.ts$/);
  return rq.keys().map(key => rq(key).default);
};

export default new Router({
  mode: 'history',
  // base: process.env.NODE_ENV === 'development' ? '/' : '/water/',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
    },
    {
      path: '/',
      name: 'Index',
      redirect: { name: 'vuescale' },
      children: concat(
        [
          {
            path: '/vuescale',
            name: 'vuescale',
            meta: {
              title: TITLE.SCALE,
            },
            component: () => import(/* webpackChunkName: "VueScale" */ '@/views/demo/VueScale.vue'),
          },
        ],
        ...importDemoRouters(),
      ),
      component: () => import(/* webpackChunkName: "index" */ '@/views/Index.vue'),
    },
  ],
});
