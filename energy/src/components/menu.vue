<template>
  <div class="header">
    <el-menu :default-active="activeIndex" class="el-menu-demo" :collapse="isCollapse" @open="handleOpen" @close="handleClose">
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
            <template slot="title">课程</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3">关于我们</el-menu-item>
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
    handleSelect (key, keyPath) {
      if (key !== this.activeIndex) {
        switch (key) {
          case '1' :
            this.$router.push('/')
            break
          case '2' :
            this.$router.push('/')
            break
          case '3' :
            this.$router.push('/')
            break
          case '4' :
            this.$router.push('/personalCenter')
            break
          default :
            break
        }
        this.activeIndex = key
      }
    },
    handleOpen () {
    },
    handleClose () {}
  }
}
</script>

<style scoped>

</style>
