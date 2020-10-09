<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">系统设置</template>
            <el-menu-item >系统配置</el-menu-item>
            <el-menu-item @click="()=>{this.$router.push('/user-info')}">用户管理</el-menu-item>
            <el-menu-item @click="()=>{this.$router.push('/manage-role')}">角色管理</el-menu-item>
            <el-menu-item >权限管理</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'customMenu',
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
.el-menu-demo {
  width: 15vw;
}
</style>
