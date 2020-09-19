<template>
  <div class="contain">
    <customMenu class="menu" />
    <frameHeader />
  </div>
</template>

<script>
import customMenu from '@/components/menu'
import FrameHeader from '@/components/Header'

export default {
  components: {
    customMenu: customMenu,
    frameHeader: FrameHeader
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
