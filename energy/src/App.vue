<template>
  <div>
    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  display: flex;
  flex-flow: row;
}
</style>
