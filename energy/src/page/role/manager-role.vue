<template>
    <section>
      <el-button @click="addRole" type="primary">添加</el-button>
      <el-button @click="changeRole" type="success">保存</el-button>
      <el-button @click="deleteRole" type="danger">清空</el-button>
      <el-row>
        <h4>角色列表</h4>
        <el-table >
          <el-table-column
            prop="roleName"
            label="编号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="角色列表"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="状态"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="备注"
            width="180">
          </el-table-column>
          <el-table-column
            prop="discribe"
            label="操作"
            width="180">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">修改</el-button>
              <el-button type="text" size="small">禁用</el-button>
              <el-button type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        </el-row>
        <el-row>
          <h4>权限列表</h4>
          <el-tree
            :props="props"
            :load="loadNode"
            lazy
            show-checkbox
            @check-change="handleCheckChange">
          </el-tree>
        </el-row>
      <change-role :roleDialogVisible="roleDialogVisible" @closeRoleDialog="closeRoleDialog"/>
    </section>
</template>

<script>
import ChangeRole from '@/page/role/change-role'
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
      }
    }
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
    }
  }
}
</script>

<style scoped>

</style>
