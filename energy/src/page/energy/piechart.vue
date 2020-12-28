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
    <div>
      <div id="pie" style="width: 400px; height:400px"></div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.drawChart()
  },
  methods: {
    drawChart () {
      const myChart = this.$echarts.init(document.getElementById('pie'), 'macarons')
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['生产', '办公', '后勤', '其他']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              {value: 125, name: '生产'},
              {value: 125, name: '办公'},
              {value: 125, name: '后勤'},
              {value: 125, name: '其他'}
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
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
