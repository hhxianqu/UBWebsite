<template>
  <div>
    <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="用户名">
        <el-input v-model="form.username" placeholder="用户名/User Name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" placeholder="密码/Password" show-password />
      </el-form-item>
      <el-button>登陆Login</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  }
}
</script>
<style scoped>
</style>
