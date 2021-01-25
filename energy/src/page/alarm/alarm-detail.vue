<template>
    <el-dialog
      title="详情"
      :visible.sync="detailDialogVisible"
      width="30%"
      :before-close="close">
    </el-dialog>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    detailDialogVisible: Boolean
  },
  data () {
    return {
    }
  },
  mounted () {
    this.getRole()
  },
  methods: {
    close () {
      this.$emit('closeDialog')
    },
    getDetail () {
      // const that = this
      axios({
        method: 'post',
        url: '/system/role/getAllRoles',
        data: {
          page: -1,
          limit: -1
        }
      }).then(function () {
      })
    }
  }
}
</script>

<style scoped>

</style>
