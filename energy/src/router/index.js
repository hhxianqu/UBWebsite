import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/index'
import ChangeRole from '@/page/role/change-role'
import ChangeUserInfo from '@/page/role/change-user-info'
import ManagerRole from '@/page/role/manager-role'
import Login from '@/page/login/login'
import LoginManager from '@/page/login/login-manager'

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
      component: Home
    },
    {
      path: '/change-role',
      name: 'Role Manager',
      component: ChangeRole
    },
    {
      path: '/user-info',
      name: 'Role Manager',
      component: ChangeUserInfo
    },
    {
      path: '/manage-role',
      name: 'Role Manager',
      component: ManagerRole
    }
  ]
})
