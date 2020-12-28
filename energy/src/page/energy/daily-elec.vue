<template>
  <div>
    <div class="card-header">
      <span class="title">当日逐时用电曲线</span>
      <el-radio-group v-model="radio" size="small" change="changeTime" fill="#4981BC">
        <el-radio-button label="分时段"></el-radio-button>
        <el-radio-button label="总用电"></el-radio-button>
      </el-radio-group>
    </div>
    <div>
      <div id="line" style="width: 650px;height:400px;"></div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      radio: '分时段'
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    changeTime (value) {
      console.log(value)
    },
    drawChart () {
      var myChart = this.$echarts.init(document.getElementById('line'), 'macarons')
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          data: ['0:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'line',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
        }]
      }
      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option)
    }
  }
}
</script>
<style scoped>
.card-header {
  display: flex;
  flex: row;
  justify-content: space-between;
}
.title {
  font-size: 8px;
  font-family: Microsoft YaHei;
  font-weight: 300;
  color: #FFFFFF;
  line-height: 24px;
}
</style>
