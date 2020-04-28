<template>
  <div id="app">
    <customMenu></customMenu>
    <router-view/>
  </div>
</template>

<script>
import customMenu from '@/components/menu'

export default {
  name: 'App',
  components: {
    customMenu: customMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
