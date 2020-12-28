<template>
    <el-dialog
      title="添加用户"
      :visible.sync="userDialogVisible"
      width="30%"
      :before-close="close">
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="用户名称：">
            <el-input v-model="form.username" placeholder="用户名称" />
          </el-form-item>
          <el-form-item label="角色选择：">
            <el-select v-model="role" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="联系电话："
          :rules="[
            { type: 'number', message: '手机号必须为数字'}
          ]">
            <el-input v-model="form.phone" placeholder="联系电话" />
          </el-form-item>
          <el-form-item label="用户备注：">
            <el-input v-model="form.remark" placeholder="用户备注" />
          </el-form-item>
          <el-button @click="save" type="primary">保存</el-button>
          <el-button @click="close">返回</el-button>
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
        username: '',
        phone: '',
        remark: ''
      },
      options: [{
        value: '1',
        label: '系统管理员'
      }],
      role: ''
    }
  },
  mounted () {
    this.getRole()
  },
  methods: {
    save () {
      const that = this
      axios({
        method: 'post',
        url: '/system/user/addUser',
        data: {
          username: this.form.username,
          password: 123456,
          phone: this.form.phone,
          remark: this.form.remark,
          roleId: this.role
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
      this.$emit('closeUserDialog')
    },
    getRole () {
      this.options = []
      const that = this
      axios({
        method: 'post',
        url: '/system/role/getAllRoles',
        data: {
          page: 1,
          limit: 10
        }
      }).then(function (res) {
        console.log(res.data)
        if (res.data.code === 200) {
          const data = res.data.data
          data.forEach(each => {
            const eachTableData = {}
            eachTableData.value = each.id
            eachTableData.label = each.nameZh
            that.options.push(eachTableData)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
