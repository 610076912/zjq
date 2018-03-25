import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Service from './component/service'
import Product from './component/product'
import Ours from './component/ours'
import Resources from './component/resources'

const routes = [
  {path: '/product', component: Product},
  {path: '/', component: Service},
  {path: '/ours', component: Ours},
  {path: '/resources', component: Resources}
]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
