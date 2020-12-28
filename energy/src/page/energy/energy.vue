<template>
  <div class="background">
    <div class="contain">
      <el-input v-model="input" placeholder="南大供电图书馆2楼"/>
      <button class="search">切换</button>
    </div>
    <el-row>
      <el-col :span="10">
        <div class="energy-card">
          <en-info />
        </div>
        <div class="energy-card">
          <piechart />
        </div>
      </el-col>
      <el-col :span="14">
        <div  class="energy-card">
          <daily-elec />
        </div>
        <div  class="energy-card">
          <en-history />
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import EnInfo from '@/page/energy/en-info'
import Piechart from '@/page/energy/piechart'
import DailyElec from '@/page/energy/daily-elec'
import EnHistory from '@/page/energy/en-history'
export default {
  components: {
    EnInfo: EnInfo,
    Piechart: Piechart,
    DailyElec: DailyElec,
    EnHistory: EnHistory
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
  padding-top: 30px;
  padding-left: 20px;
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
</style>
