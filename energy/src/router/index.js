import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/index'
import personalCenter from '@/page/personal/personal'
import Login from '@/page/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/personalCenter',
      name: 'Personal Center',
      component: personalCenter
    }
  ]
})
