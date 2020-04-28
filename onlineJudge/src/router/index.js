import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/HelloWorld'
import personalCenter from '@/page/personal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
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
