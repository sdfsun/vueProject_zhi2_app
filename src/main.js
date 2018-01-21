import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'



import Vuex from 'vuex'
//zby:为了在全局环境中使用vue
window.Vue = Vue;


import sell from './components/sell.vue'
import my from './components/my/my.vue'
import buy from './components/buy/buy.vue'

//zby：引入Muse-Ui
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

// 引入mint-ui
import { Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use({ Swipe, SwipeItem });
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);




Vue.use(VueRouter);

var router  = new VueRouter({
  routes:[
    {path:'/sell',component:sell},
    {path:'/my',component:my},
    {path:'/buy',component:buy}
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
