<template>
    <div class="user-bcg">
      <el-form :inline="true" ref="form" :model="form">
        <el-form-item label="位置">
          <el-input placeholder="全部" v-model="form.location"/>
        </el-form-item>
        <el-form-item label="类别">
          <el-select placeholder="全部" v-model="form.type"/>
        </el-form-item>
        <el-form-item label="动作">
          <el-select placeholder="全部" v-model="form.action"/>
        </el-form-item>
        <el-form-item label="时间段">
          <el-date-picker
            v-model="form.dateRange"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
      <div>
        <h4>事件和告警</h4>
        <el-table :data="tableData">
          <el-table-column
            prop="id"
            label="序号"
            width="60">
          </el-table-column>
          <el-table-column
            prop="username"
            label="发生时间"
            width="160">
          </el-table-column>
          <el-table-column
            prop="role"
            label="位置和单元"
            width="160">
          </el-table-column>
          <el-table-column
            prop="enabled"
            label="类别"
            width="120">
          </el-table-column>
          <el-table-column
            prop="phone"
            label="动作"
            width="160">
          </el-table-column>
          <el-table-column
            label="详情"
            width="200">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
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
      <detail-dialog :detailDialogVisible="detailDialogVisible" @closeDialog="closeDialog"/>
    </div>
</template>

<script>
import detailDialog from '@/page/alarm/alarm-detail'
import axios from 'axios'
export default {
  components: {
    detailDialog: detailDialog
  },
  data () {
    return {
      form: {
        dateRange: '',
        location: '',
        action: '',
        type: ''
      },
      detailDialogVisible: false,
      tableData: [],
      currentPage: 1,
      total: 0,
      limit: 10
    }
  },
  mounted () {
    this.getAlarm(1)
  },
  methods: {
    handleClick () {
      this.detailDialogVisible = true
    },
    closeDialog () {
      this.detailDialogVisible = false
      this.getAlarm(this.currentPage)
    },
    changeUser () {},
    deleteUser () {},
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
          that.getAlarm(that.currentPage)
        }
      })
    },
    getAlarm (page) {
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
      this.getAlarm(val)
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
