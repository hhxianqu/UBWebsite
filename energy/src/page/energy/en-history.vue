<template>
  <div>
    <div class="card-header">
      <el-date-picker
        v-model="month"
        type="month"
        placeholder="请选择年月"/>
    </div>
    <div>
      <div id="history" style="width: 650px; height:400px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      month: ''
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      var myChart = this.$echarts.init(document.getElementById('history'), 'macarons')
      // 指定图表的配置项和数据
      var option = {
        xAxis: {
          data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        },
        yAxis: {},
        series: [{
          name: '历史能耗',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20, 5, 20, 36, 10, 10, 20]
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
</style>
