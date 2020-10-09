<template>
    <section>
        <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="新密码">
          <el-input v-model="form.newPwd" placeholder="新密码" show-password/>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.pwdAgain" placeholder="确认密码" show-password/>
        </el-form-item>
        <el-button @click="save">保存</el-button>
        <el-button @click="back">返回</el-button>
      </el-form>
    </section>
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
    save () {},
    back () {
      this.$router.replace('/home')
    }
  }
}
</script>

<style scoped>

</style>
