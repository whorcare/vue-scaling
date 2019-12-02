import Vue from 'vue';
import VueCodemirror from 'vue-codemirror';
// eslint-disable-next-line
import VueTouch from 'vue-touch';

// require styles
import 'codemirror/lib/codemirror.css';

import App from '@/App.vue';
import router from '@/routers';
import './registerServiceWorker';


Vue.config.productionTip = false;

Vue.use(VueCodemirror);
VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2,
});
Vue.use(VueTouch, {
  name: 'v-touch',
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
