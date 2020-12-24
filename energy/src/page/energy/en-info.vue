<template>
  <div>
    <div class="card-header">
      <span class="title">用电概况</span>
      <el-radio-group v-model="radio1" size="small" change="changeTime" fill="#4981BC">
        <el-radio-button label="日"></el-radio-button>
        <el-radio-button label="月"></el-radio-button>
        <el-radio-button label="年"></el-radio-button>
      </el-radio-group>
    </div>
    <div class="power">
      <div>实时功率</div>
      <div>315.6 KW·H</div>
    </div>
    <div class="power">
      <div>历史累计</div>
      <div>42415.6 KW·H</div>
    </div>
    <div class="power">
      <div>昨日累计</div>
      <div>315.6 KW·H</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio1: '日'
    }
  },
  methods: {
    changeTime (value) {
      console.log(value)
    }
  }
}
</script>
<style scoped>
.title {
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 24px;
}
.power {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #88C1FC;
  line-height: 24px;
  display: flex;
  flex: row;
  justify-content: space-between;
}
.card-header {
  display: flex;
  flex: row;
  justify-content: space-between;
}
.el-radio-button__inner {
  background-color: transparent;
  border-style: none;
  color: #fff;
}
</style>
