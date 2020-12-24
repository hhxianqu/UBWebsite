<template>
  <div class="background">
    <div class="contain">
      <el-input v-model="input" placeholder="南大供电图书馆2楼"/>
      <button class="search">切换</button>
    </div>
    <div class="energy-card">
      <span class="title">用电概况</span>
      <el-radio-group v-model="radio1" size="small">
        <el-radio-button label="日"></el-radio-button>
        <el-radio-button label="月"></el-radio-button>
        <el-radio-button label="年"></el-radio-button>
      </el-radio-group>
      <div class="power">实时功率</div>
      <div class="power">历史累计</div>
      <div class="power">昨日累计</div>
    </div>
    <div class="energy-card"></div>
  </div>
</template>
<script>
export default {
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
.title {
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 24px;
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
}
.power {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #88C1FC;
  line-height: 24px;
}
</style>
