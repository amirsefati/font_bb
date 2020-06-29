import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSax from 'vuesax'

Vue.use(VueRouter)
Vue.use(VueSax)

import 'vuesax/dist/vuesax.css'
import mamad from './components/mamad'
import app from './App'
import daily_report from './components/daily_report'

const routes = [
  {path: '/',name:'home',component:app},
  {path: '/mamad',name:'mamad',component:mamad},
  {path: '/daily_report',name:'daily_report',component:daily_report}


]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render:h=>h(app)
}).$mount('#app')
