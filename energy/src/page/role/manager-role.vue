<template>
    <section>
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
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">禁用</el-button>
              <el-button @click="handleDelete(scope.row.id)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </el-col>
        <el-col :span="6">
          <h4>权限列表</h4>
          <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
          </el-tree>
        </el-col>
        </el-row>

      <change-role :roleDialogVisible="roleDialogVisible" @closeRoleDialog="closeRoleDialog"/>
    </section>
</template>

<script>
import ChangeRole from '@/page/role/change-role'
import axios from 'axios'
export default {
  components: {
    ChangeRole: ChangeRole
  },
  data () {
    return {
      form: {
        newPwd: '',
        pwdAgain: ''
      },
      roleDialogVisible: false,
      props: {
        label: 'name',
        children: 'zones'
      },
      tableData: []
    }
  },
  mounted () {
    this.getRole()
  },
  methods: {
    addRole () {
      this.roleDialogVisible = true
    },
    closeRoleDialog () {
      this.roleDialogVisible = false
    },
    changeRole () {},
    deleteRole () {},
    handleClick () {},
    handleDelete (id) {
      axios({
        method: 'post',
        url: '/system/role/deleteRole',
        data: {
          id: id
        }
      }).then(function (res) {
        console.log(res)
      })
    },
    handleCheckChange () {},
    loadNode (node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: '系统配置' }, { name: '供配电管理' }])
      }
      if (node.level > 3) return resolve([])

      var hasChild
      if (node.data.name === '系统配置') {
        hasChild = true
      } else if (node.data.name === '供配电管理') {
        hasChild = false
      } else {
        hasChild = Math.random() > 0.5
      }

      setTimeout(() => {
        var data
        if (hasChild) {
          data = [{
            name: '角色管理'
          }, {
            name: '用户管理'
          }]
        } else {
          data = []
        }

        resolve(data)
      }, 500)
    },
    getRole () {
      this.tableData = []
      const that = this
      axios({
        method: 'post',
        url: '/system/role/getAllRoles'
      }).then(function (res) {
        console.log(res.data)
        if (res.data.code === 200) {
          const data = res.data.data
          data.forEach(each => {
            const eachTableData = {}
            eachTableData.id = each.id
            eachTableData.roleName = each.nameZh
            eachTableData.enabled = '启用'
            eachTableData.discribe = '-'
            that.tableData.push(eachTableData)
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
