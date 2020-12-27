<template>
  <div class="login-bg">
    <div class="login-contain">
      <h4 class="login-title">账号登录</h4>
      <el-form ref="form" :model="form" label-width="0px">
        <el-form-item prop="username" :rules="[
          { required: true, message: '用户名不能为空'},
        ]">
          <el-input v-model="form.username" placeholder="用户名/User Name" class="login-input"/>
        </el-form-item>
        <el-form-item prop="password" :rules="[
          { required: true, message: '密码不能为空'},
        ]">
          <el-input v-model="form.password" placeholder="密码/Password" show-password class="login-input"/>
        </el-form-item>
        <el-button @click="login" class="login-btn">登陆Login</el-button>
      </el-form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      // var that = this
      this.$refs['form'].validate((valid) => {
        if (valid) {
          axios({
            method: 'post',
            url: '/api/login',
            data: {
              username: this.form.username,
              password: this.form.password
            }
          }).then(function (res) {
            console.log(res.data)
            // that.$router.push('/Home/energy')
          })
        } else {
          console.log('error submit!!')
        }
      })
    }
  }
}
</script>
<style scoped>
.login-bg {
  width: 100vw;
  height: 100vh;
  background-color: rgba(77, 144, 218, 0.79);
}
.login-title{
  font-size: 28px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
}
.login-contain {
  background: rgba(255, 255, 255, 0.2);
  box-shadow: 2px 2px 5px 0px rgba(27, 29, 30, 0.25);
  border-radius: 4px;
  padding: 50px;
  position: absolute;
  right: 18vw;
  top: 20vh;
}
.login-input{
  width: 370px;
  box-shadow: 2px 2px 2px 0px rgba(15, 42, 63, 0.13);
  border-radius: 2px;
  border-width: 0;
}
.login-btn {
  width: 370px;
  background: linear-gradient(180deg, rgba(77, 144, 218, 0.79), rgba(51, 187, 237, 0.79));
  box-shadow: 2px 2px 7px 0px rgba(15, 63, 42, 0.35);
  border-radius: 2px;
  font-size: 18px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #FFFFFF;
  border-width: 0;
}
</style>
