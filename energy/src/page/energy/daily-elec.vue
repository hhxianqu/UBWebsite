<template>
  <div>
    <div class="card-header">
      <span class="title">当日逐时用电曲线</span>
      <el-radio-group v-model="radio" size="small" change="changeTime" fill="#4981BC">
        <el-radio-button label="分时段"></el-radio-button>
        <el-radio-button label="总用电"></el-radio-button>
      </el-radio-group>
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
  methods: {
    changeTime (value) {
      console.log(value)
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
