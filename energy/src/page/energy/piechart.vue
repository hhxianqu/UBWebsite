<template>
  <div>
    <div class="card-header">
      <div class="power">
        <div class="power-title">最大用电时间</div>
        <div class="power-data">11:30-11:45</div>
      </div>
      <div class="power">
        <div class="power-title">该时段平均功率</div>
        <div class="power-data">84.8KW</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.card-header {
  display: flex;
  flex: row;
  justify-content: space-between;
}
.power {
  font-size: 12px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #88C1FC;
  line-height: 24px;
  display: flex;
  flex-direction: column;
  border: 1px solid #4981BC;
}
.power-title {
  background: #467EB7;
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 24px;
  text-align: center;
  padding: 6px 37px;
}
.power-data {
  font-size: 15px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #7BFAAB;
  line-height: 24px;
  text-align: center;
  padding: 18px;
}
</style>
