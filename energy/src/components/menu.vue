<template>
  <el-row class="main">
    <el-col :span="4" style="height: 100%; background-color:#4981BC">
      <el-menu :default-active="this.$router.path" router background-color="#4981BC" text-color="white" active-text-color="white"
            class="el-menu-demo" @open="handleOpen" @close="handleClose">
          <div class="title">供配电云平台</div>
          <el-submenu index="/">
              <template slot="title">系统配置</template>
              <el-menu-item index="/user-info">用户管理</el-menu-item>
              <el-menu-item index="/manage-role">角色管理</el-menu-item>
              <!-- <el-menu-item >权限管理</el-menu-item> -->
          </el-submenu>
          <el-menu-item index="/energy">供配电管理</el-menu-item>
          <el-menu-item index="/alarm">事件报警</el-menu-item>
          <el-menu-item index="/monitor">连接状态监控</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <div class="main-header">
        <el-button type="text" icon="el-icon-switch-button" class="logout" @click="logout">退出</el-button>
      </div>
      <!-- <tabs /> -->
      <el-main>
        <router-view />
      </el-main>
    </el-col>
  </el-row>
</template>

<script>
import Tabs from '@/components/tabs'
import axios from 'axios'
export default {
  name: 'customMenu',
  components: {
    Tabs: Tabs
  },
  data () {
    return {
      activeIndex: '1',
      imgURL: require('../assets/logo.png'),
      isCollapse: true
    }
  },
  mounted () {
    this.getMenu()
  },
  methods: {
    handleOpen () {
    },
    handleClose () {},
    logout () {
      this.$router.push('/')
    },
    getMenu () {
      // const that = this
      axios({
        method: 'get',
        url: '/system/menu/getAllMenusWithChildren'
      }).then(function (res) {
        const data = res.data.data
        console.log(data)
      })
    }
  }
}
</script>

<style scoped>
.main{
  width: 100vw;
  height: 100%;
  min-height: 100vh;
}
.el-menu-demo {
  font-weight: 200;
}
.el-main {
  padding: 0;
}
.el-menu {
  border-style: none;
}
.title{
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 48px;
  text-align: center;
}
.main-header {
  height: 8vh;
  background: #2B5D91;
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}
.logout {
  color: #FFFFFF;
  margin-right: 2vw;
}
</style>
