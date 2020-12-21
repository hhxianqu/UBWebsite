<template>
  <div class="contain">
    <customMenu class="menu" />
  </div>
</template>

<script>
import customMenu from '@/components/menu'

export default {
  components: {
    customMenu: customMenu
  }
}
</script>

<style>
.contain {
  display: flex;
  flex-flow: row;
}

.el-menu--collapse{
  width: 10vw;
}
</style>
