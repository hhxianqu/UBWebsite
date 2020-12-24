<template>
  <el-row class="main">
    <el-col :span="4">
      <el-menu :default-active="this.$router.path" router background-color="#4981BC" text-color="white" active-text-color="white" class="el-menu-demo" @open="handleOpen" @close="handleClose">
          <div class="title">供配电云平台</div>
          <el-submenu index="/">
              <template slot="title">系统配置</template>
              <el-menu-item index="/user-info">用户管理</el-menu-item>
              <el-menu-item index="/manage-role">角色管理</el-menu-item>
              <!-- <el-menu-item >权限管理</el-menu-item> -->
          </el-submenu>
          <el-menu-item index="/energy">供配电管理</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="20">
      <!-- <tabs /> -->
      <el-main>
        <router-view />
      </el-main>
    </el-col>
  </el-row>
</template>

<script>
import Tabs from '@/components/tabs'
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
  methods: {
    handleSelect () {
    },
    handleOpen () {
    },
    handleClose () {}
  }
}
</script>

<style scoped>
.main{
  width: 100vw;
}
.el-menu-demo {
  height: 100vh;
  font-weight: 200;
}
.title{
  font-size: 20px;
  font-weight: 400;
  color: #FFFFFF;
  line-height: 48px;
  text-align: center;
}
</style>
