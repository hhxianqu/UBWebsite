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
          <el-form-item label="角色描述">
            <el-input v-model="form.roleDescribe" placeholder="角色描述" />
          </el-form-item>
          <el-button @click="save" type="primary">保存</el-button>
          <el-button @click="close">退出</el-button>
        </el-form>
    </el-dialog>
</template>

<script>
export default {
  props: {
    roleDialogVisible: Boolean
  },
  data () {
    return {
      form: {
        roleName: '',
        roleDescribe: ''
      }
    }
  },
  methods: {
    save () {},
    close () {
      this.$emit('closeRoleDialog')
    }
  }
}
</script>

<style scoped>

</style>
