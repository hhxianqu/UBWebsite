<template>
    <section>
        <el-form ref="form" :model="form" label-width="100px">
      <el-form-item label="角色名称">
        <el-input v-model="form.roleName" placeholder="角色名称" />
      </el-form-item>
      <el-form-item label="角色描述">
        <el-input v-model="form.roleDescribe" placeholder="角色描述" />
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
        roleName: '',
        roleDescribe: ''
      }
    }
  },
  methods: {
    save () {},
    back () {
      this.$router.replace('/manage-role')
    }
  }
}
</script>

<style scoped>

</style>
