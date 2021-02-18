<template>
    <el-dialog
      title="添加角色"
      :visible.sync="roleDialogVisible"
      width="30%"
      :before-close="close">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="角色名称">
            <el-input v-model="form.roleName" placeholder="角色名称" />
          </el-form-item>
          <el-form-item label="角色代码">
            <el-input v-model="form.roleCode" placeholder="角色代码需以“ROLE_”开头" />
          </el-form-item>
          <el-form-item label="角色描述">
            <el-input v-model="form.roleDescribe" placeholder="角色描述" />
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
    roleDialogVisible: Boolean
  },
  data () {
    return {
      form: {
        roleName: '',
        roleDescribe: '',
        roleCode: ''
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
      this.$emit('closeRoleDialog')
    }
  }
}
</script>

<style scoped>

</style>
