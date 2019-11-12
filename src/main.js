import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入全部组件
import Mint from 'mint-ui';
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

// Vue.use(VueRouter);
Vue.use(ViewUI);
// Vue.use(Mint);
// // 按需引入部分组件
// import { Cell, Checklist } from 'mint-ui';
// Vue.component(Cell.name, Cell);
// Vue.component(Checklist.name, Checklist);
// Vue.config.productionTip = false
// Vue.use(ElementUI)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
