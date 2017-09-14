import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Index from '../components/index.vue'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/login',
      component: Login
    },
    {
      path: '/index',
      component: Index
    }
  ]
})

export default router
