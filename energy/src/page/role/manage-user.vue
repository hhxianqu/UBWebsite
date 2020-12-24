<template>
    <section>
      <el-button @click="addUser" type="primary">添加</el-button>
      <el-button @click="changeUser" type="success">保存</el-button>
      <el-button @click="deleteUser" type="danger">清空</el-button>
      <div>
        <h4>用户列表</h4>
        <el-table >
          <el-table-column
            prop="roleName"
            label="编号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="用户名称"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="角色"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="状态"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="联系电话"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="备注"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="操作"
            width="160">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">禁用</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <change-user :userDialogVisible="userDialogVisible" @closeUserDialog="closeUserDialog"/>
    </section>
</template>

<script>
import ChangeUser from '@/page/role/change-user-info'
export default {
  components: {
    ChangeUser: ChangeUser
  },
  data () {
    return {
      form: {
        newPwd: '',
        pwdAgain: ''
      },
      userDialogVisible: false
    }
  },
  methods: {
    addUser () {
      this.userDialogVisible = true
    },
    closeUserDialog () {
      this.userDialogVisible = false
    },
    changeUser () {},
    deleteUser () {},
    handleClick () {}
  }
}
</script>

<style scoped>

</style>
