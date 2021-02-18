<template>
    <div class="role-bcg">
      <el-button @click="addRole" type="primary">添加</el-button>
      <el-button @click="changeRole" type="success">保存</el-button>
      <el-button @click="deleteRole" type="danger">清空</el-button>
      <el-row>
        <el-col :span="18">
        <h4>角色列表</h4>
        <el-table :data="tableData">
          <el-table-column
            prop="id"
            label="编号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="roleName"
            label="角色列表"
            width="180">
          </el-table-column>
          <el-table-column
            prop="enabled"
            label="状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="备注"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button @click="updateRole(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">禁用</el-button>
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
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
        </el-col>
        <el-col :span="6">
          <h4>权限列表</h4>
          <el-tree
            :data="nodeData"
            :props="props"
            node-key="id"
            show-checkbox
            @check-change="handleCheckChange">
            <span class="custom-tree-node" slot-scope="{ node, data }">
              <span>{{ node.label }}</span>
              <span>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => append(data)">
                  Append
                </el-button>
                <el-button
                  type="text"
                  size="mini"
                  @click="() => remove(node, data)">
                  Delete
                </el-button>
              </span>
            </span>
          </el-tree>
        </el-col>
        </el-row>

      <add-role :roleDialogVisible="addDialogVisible" @closeRoleDialog="addCloseDialog"/>
      <change-role :roleDialogVisible="changeDialogVisible" @closeRoleDialog="changeCloseDialog"/>
    </div>
</template>

<script>
import ChangeRole from '@/page/role/change-role'
import AddRole from '@/page/role/add-role'
import axios from 'axios'
export default {
  components: {
    ChangeRole: ChangeRole,
    AddRole: AddRole
  },
  data () {
    return {
      form: {
        newPwd: '',
        pwdAgain: ''
      },
      changeDialogVisible: false,
      addDialogVisible: false,
      nodeData: [],
      props: {
        label: 'name',
        children: 'children'
      },
      tableData: [],
      limit: 10,
      total: 0,
      currentPage: 1
    }
  },
  mounted () {
    this.getRole(1)
    this.getMenu()
  },
  methods: {
    addRole () {
      this.addDialogVisible = true
    },
    addCloseDialog () {
      this.addDialogVisible = false
      this.getRole(this.currentPage)
    },
    updateRole () {
      this.changeCloseDialog = true
    },
    changeCloseDialog () {
      this.changeDialogVisible = false
      this.getRole(this.currentPage)
    },
    append (data) {
      const newChild = { label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },
    remove (node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    },
    changeRole () {},
    deleteRole () {},
    handleDelete (id) {
      const that = this
      axios({
        method: 'post',
        url: '/system/role/deleteRole',
        data: {
          id: id
        }
      }).then(function (res) {
        const data = res.data
        if (data.code === 200) {
          that.getRole(that.currentPage)
        }
      })
    },
    handleCheckChange () {},
    getMenu () {
      const that = this
      axios({
        method: 'get',
        url: '/system/menu/getAllMenusWithChildren'
      }).then(function (res) {
        const data = res.data.data
        console.log(data)
        data.forEach(element => {
          const node = {}
          node.id = element.id
          node.name = element.name
          node.children = element.children.map(e => {
            return {
              name: e.name,
              id: e.id
            }
          })
          that.nodeData.push(data)
        })
      })
    },
    getRole (page) {
      this.tableData = []
      const that = this
      axios({
        method: 'post',
        url: '/system/role/getAllRoles',
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
            eachTableData.id = each.id
            eachTableData.roleName = each.nameZh
            eachTableData.enabled = '启用'
            eachTableData.discribe = '-'
            that.tableData.push(eachTableData)
          })
        }
      })
    },
    handleCurrentChange (val) {
      this.getRole(val)
    }
  }
}
</script>

<style scoped>
.role-bcg {
  padding-left: 20px;
  padding-top: 30px;
}
</style>
