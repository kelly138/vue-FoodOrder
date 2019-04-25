import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import {
  store
} from './store/store'
import {
  routes
} from './routes'

Vue.use(VueRouter)

// 配置默认根路径
axios.defaults.baseURL = 'https://wd1695319840sjftof.wilddogio.com/'

// 配置Vue原型 (在任何组件中都可以正常使用axios)
Vue.prototype.http = axios


const router = new VueRouter({
  routes,
  mode: 'history', //如果不配置的话，就会在url中加一个 # 
  scrollBehavior(to, from, savedPosition) {
    // 路由控制滚动行为，也就是控制滚动条一开始定位到哪个位置

    // 控制滚动条一开始在高度向下100的位置显示
    // return {
    //   x: 0,
    //   y: 100
    // },

    // 控制滚动条一开始在btn按钮的位置开始显示
    // return {
    //   selector: '.btn'
    // }

    // 保存上次浏览的页面的位置，再次回退到那个页面时，显示上次浏览的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})