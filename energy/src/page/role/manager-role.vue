<template>
    <div>
       <el-button @click="addRole">添加</el-button>
      <el-button @click="changeRole">编辑</el-button>
      <el-button @click="deleteRole">删除</el-button>
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
