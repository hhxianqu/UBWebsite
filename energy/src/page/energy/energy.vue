<template>
  <div class="background">
    <div class="contain">
      <el-input v-model="input" placeholder="南大供电图书馆2楼"/>
      <button class="search">切换</button>
    </div>
    <div class="energy-card info-card">
      <en-info />
    </div>
    <div class="energy-card"></div>
  </div>
</template>
<script>
import EnInfo from '@/page/energy/en-info'
export default {
  components: {
    EnInfo: EnInfo
  },
  data () {
    return {
      input: '',
      radio1: '日'
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.background {
  background-color: #1D3C5D;
}
.search {
  width: 75px;
  height: 34px;
  background: #1D3C5D;
  border-radius: 10px;
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #76B9FF;
  line-height: 24px;
  border: 1px solid #76B9FF;
}
el-input__inner {
  background-color: #1D3C5D !important;
  color: white !important;
}
.energy-card {
  background-color: rgba(255, 255, 255, 0.1);
  padding: 13px;
  margin: 10px;
}
.info-card {
  width:30vw;
}
</style>
