<template>
  <div>
    <div class="card-header">
      <el-date-picker
        v-model="month"
        type="month"
        placeholder="请选择年月"/>
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
</style>
