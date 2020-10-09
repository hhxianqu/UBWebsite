<template>
    <section>
        <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="登陆账号">
        <el-input v-model="form.loginAccount" placeholder="登陆账号" />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name" placeholder="姓名" />
      </el-form-item>
      <el-form-item label="电话">
        <el-input v-model="form.phone" placeholder="电话" />
      </el-form-item>
      <el-form-item label="操作员角色">
        <el-input v-model="form.managerRole" placeholder="操作员角色" />
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark" placeholder="备注" />
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
        loginAccount: '',
        name: '',
        phone: '',
        managerRole: '',
        remark: ''
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
