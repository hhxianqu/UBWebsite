<template>
    <div class="user-bcg">
      <el-button @click="addUser" type="primary">添加</el-button>
      <el-button @click="changeUser" type="success">保存</el-button>
      <el-button @click="deleteUser" type="danger">清空</el-button>
      <div>
        <h4>用户列表</h4>
        <el-table :data="tableData">
          <el-table-column
            prop="id"
            label="编号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="username"
            label="用户名称"
            width="160">
          </el-table-column>
          <el-table-column
            prop="role"
            label="角色"
            width="160">
          </el-table-column>
          <el-table-column
            prop="enabled"
            label="状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="联系电话"
            width="160">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="备注"
            width="160">
          </el-table-column>
          <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">{{scope.row.enabled === '禁用' ? "启用" : '禁用'}}</el-button>
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
              <el-button type="text" size="small">重置密码</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="limit"
          layout="total, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
      <change-user :userDialogVisible="userDialogVisible" @closeUserDialog="closeUserDialog"/>
    </div>
</template>

<script>
import ChangeUser from '@/page/role/change-user-info'
import axios from 'axios'
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
      userDialogVisible: false,
      tableData: [],
      currentPage: 1,
      total: 0,
      limit: 10
    }
  },
  mounted () {
    this.getUser(1)
  },
  methods: {
    addUser () {
      this.userDialogVisible = true
    },
    closeUserDialog () {
      this.userDialogVisible = false
      this.getUser(this.currentPage)
    },
    changeUser () {},
    deleteUser () {},
    handleClick () {},
    handleDelete (id) {
      const that = this
      axios({
        method: 'post',
        url: '/system/user/deleteUser',
        data: {
          id: id
        }
      }).then(function (res) {
        const data = res.data
        if (data.code === 200) {
          that.getUser(that.currentPage)
        }
      })
    },
    getUser (page) {
      this.tableData = []
      const that = this
      axios({
        method: 'post',
        url: '/system/user/getAllUserWithRoles',
        data: {
          page: page,
          limit: that.limit
        }
      }).then(function (res) {
        if (res.data.code === 200) {
          const data = res.data.data
          that.total = data.total
          data.data.forEach(each => {
            const eachTableData = {}
            const role = each.roles.map(element => {
              return element.nameZh
            }).join(', ')
            eachTableData.role = role
            eachTableData.phone = each.phone
            eachTableData.id = each.id
            eachTableData.username = each.username
            eachTableData.enabled = each.enabled ? '启用' : '禁用'
            eachTableData.discribe = each.remark
            that.tableData.push(eachTableData)
          })
        }
      })
    },
    handleCurrentChange (val) {
      this.getUser(val)
    }
  }
}
</script>

<style scoped>
.user-bcg {
  padding-left: 20px;
  padding-top: 30px;
}
</style>
