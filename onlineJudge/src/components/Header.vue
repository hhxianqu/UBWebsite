<template>
  <div>
    <div class="frame-header">
      <div class="title">企业运维电力云平台</div>
      <el-menu :default-active="activeIndex" mode="horizontal" @open="handleOpen" @close="handleClose">
          <el-menu-item index="1">变配电站状态</el-menu-item>
          <el-menu-item index="2">用能报表</el-menu-item>
          <el-menu-item index="3">同比分析</el-menu-item>
          <el-menu-item index="4">电力数据</el-menu-item>
      </el-menu>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleOpen () {
    },
    handleClose () {}
  }
}
</script>
<style scoped>
.frame-header {
  display: flex;
  flex-direction: row;
}
.el-menu.el-menu--horizontal {
  border-bottom: none
}
</style>
