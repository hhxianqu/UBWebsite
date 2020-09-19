<template>
  <div>
    <div id="app">
      <customMenu class="menu"></customMenu>
      <frameHeader>
      </frameHeader>
    </div>
  </div>
</template>

<script>
import customMenu from '@/components/menu'
import FrameHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    customMenu: customMenu,
    frameHeader: FrameHeader
  }
}
</script>

<style>
#app {
  display: flex;
  flex-flow: row;
}

.el-menu--collapse{
  width: 10vw;
}
</style>
