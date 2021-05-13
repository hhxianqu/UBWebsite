<template>
    <el-dialog
      title="添加用户"
      :visible.sync="userDialogVisible"
      width="30%"
      :before-close="close">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="用户名称：">
            <el-input v-model="form.roleName" placeholder="用户名称" />
          </el-form-item>
          <el-form-item label="状态：">
            <el-input v-model="form.roleCode" placeholder="状态" />
          </el-form-item>
          <el-form-item label="联系电话：">
            <el-input v-model="form.roleDescribe" placeholder="联系电话" />
          </el-form-item>
          <el-form-item label="备注：">
            <el-input v-model="form.remark" placeholder="备注" />
          </el-form-item>
          <el-button @click="save" type="primary">保存</el-button>
          <el-button @click="close">退出</el-button>
        </el-form>
    </el-dialog>
</template>

<script>
import axios from 'axios'

export default {
  props: {
    userDialogVisible: Boolean
  },
  data () {
    return {
      form: {
        roleName: '',
        roleDescribe: '',
        roleCode: '',
        remark: ''
      }
    }
  },
  methods: {
    save () {
      const that = this
      axios({
        method: 'post',
        url: '/system/role/addRole',
        data: {
          nameZh: this.form.roleName,
          remark: this.form.roleDescribe,
          name: this.form.roleCode
        }
      }).then(function (res) {
        const data = res.data
        console.log(data)
        if (data.code === 200) {
          that.$message({
            message: data.message,
            type: 'success'
          })
          that.close()
        } else {
          that.$message.error(data.message)
        }
      })
    },
    close () {
      this.$emit('addClose')
    }
  }
}
</script>

<style scoped>

</style>
