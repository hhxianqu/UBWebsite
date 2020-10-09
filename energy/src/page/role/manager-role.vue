<template>
    <div>
      <el-button @click="addRole">添加</el-button>
      <el-button @click="changeRole">编辑</el-button>
      <el-button @click="deleteRole">删除</el-button>
      <div>
        <h4>角色列表</h4>
        <el-table>
          <el-table-column
            prop="roleName"
            label="角色名称"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="角色描述"
            width="180">
          </el-table-column>
        </el-table>
      </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        newPwd: '',
        pwdAgain: ''
      }
    }
  },
  methods: {
    addRole () {
      this.$router.push('/change-role')
    },
    changeRole () {},
    deleteRole () {}
  }
}
</script>

<style scoped>

</style>
