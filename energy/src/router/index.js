import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/index'
import ManageUser from '@/page/role/manage-user'
import ManagerRole from '@/page/role/manager-role'
import Login from '@/page/login/login'
import LoginManager from '@/page/login/login-manager'
import Energy from '@/page/energy/energy'
import Alarm from '@/page/alarm/alarm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/manager-pwd',
      name: 'ManagerPwd',
      component: LoginManager
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/user-info',
          name: 'Role Manager',
          component: ManageUser
        },
        {
          path: '/manage-role',
          name: 'Role Manager',
          component: ManagerRole
        },
        {
          path: '/energy',
          name: 'Energy',
          component: Energy
        },
        {
          path: '/alarm',
          name: 'Alarm',
          component: Alarm
        }
      ]
    }
  ]
})
