<template>
  <div class="contain">
    <h1>{{ title }}</h1>
    <h2>{{ content }}</h2>
    <button class="btn">点击进入</button>
  </div>
</template>

<script>
export default {
  name: 'type',
  props: {
    title: String,
    content: String
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.contain {
    width: 188px;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 0 8px 0 rgba(0,0,0,.1);
    float: left;
    margin-right: 10px;
    transition: all .3s;
    height: 242px;
}

.btn {
    width: 140px;
    height: 36px;
    line-height: 36px;
    vertical-align: middle;
    text-align: center;
    color: #fff;
    background: #42b983;
    border-radius: 2px;
    margin: 0 auto;
    margin-top: 41px;
    font-size: 16px;
}
</style>
