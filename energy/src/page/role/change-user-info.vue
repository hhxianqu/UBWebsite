<template>
    <el-dialog
      title="添加用户"
      :visible.sync="userDialogVisible"
      width="30%"
      :before-close="close">
        <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="用户名称：">
        <el-input v-model="form.loginAccount" placeholder="用户名称：" />
      </el-form-item>
      <el-form-item label="角色选择：">
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="联系电话：">
        <el-input v-model="form.phone" placeholder="联系电话：" />
      </el-form-item>
      <el-form-item label="用户备注：">
        <el-input v-model="form.managerRole" placeholder="用户备注：" />
      </el-form-item>
      <el-button @click="save" type="primary">保存</el-button>
      <el-button @click="close">返回</el-button>
    </el-form>
    </el-dialog>
</template>

<script>
export default {
  props: {
    userDialogVisible: Boolean
  },
  data () {
    return {
      form: {
        loginAccount: '',
        name: '',
        phone: '',
        managerRole: '',
        remark: ''
      },
      options: [{
        value: '选项1',
        label: '系统管理员'
      }]
    }
  },
  methods: {
    save () {},
    close () {
      this.$emit('closeUserDialog')
    }
  }
}
</script>

<style scoped>

</style>
