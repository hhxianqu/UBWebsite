<template>
    <div class="user-bcg">
      <el-tabs type="card">
        <el-tab-pane label="当前连接状态">
          <el-table :data="tableData">
            <el-table-column
              prop="enName"
              label="英文名"
              width="220">
            </el-table-column>
            <el-table-column
              prop="cnName"
              label="中文名"
              width="160">
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              width="150">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="110">
            </el-table-column>
            <el-table-column
              prop="lastHundred"
              label="近100次连通率"
              width="160">
            </el-table-column>
            <el-table-column
              prop="today"
              label="当日连通率"
              width="160">
            </el-table-column>
            <el-table-column
              prop="lastTime"
              label="最后连接时间"
              width="200">
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="limit"
            layout="total, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-tab-pane>
        <el-tab-pane label="历史连接状态">
          <el-table :data="tableData">
            <el-table-column
              prop="enName"
              label="英文名"
              width="220">
            </el-table-column>
            <el-table-column
              prop="cnName"
              label="中文名"
              width="160">
            </el-table-column>
            <el-table-column
              prop="type"
              label="类型"
              width="150">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              width="110">
            </el-table-column>
            <el-table-column
              prop="lastHundred"
              label="近100次连通率"
              width="160">
            </el-table-column>
            <el-table-column
              prop="today"
              label="当日连通率"
              width="160">
            </el-table-column>
            <el-table-column
              prop="lastTime"
              label="最后连接时间"
              width="200">
            </el-table-column>
          </el-table>
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="limit"
            layout="total, prev, pager, next, jumper"
            :total="total">
          </el-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  components: {
    // detailDialog: detailDialog
  },
  data () {
    return {
      detailDialogVisible: false,
      tableData: [],
      currentPage: 1,
      total: 6,
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
    getAlarm () {
      this.tableData = [
        {
          enName: 'XG_XG_commIP1_192.168.1.4',
          cnName: '新港新港通信服务IP1',
          type: 'commsv',
          state: '中断',
          lastHundred: '76%',
          today: '80%',
          lastTime: '2021/4/6 13:35:14'
        },
        {
          enName: 'XG_XG_commIP1_192.168.1.5',
          cnName: '新港新港通信服务IP2',
          type: 'commsv',
          state: '中断',
          lastHundred: '98%',
          today: '76%',
          lastTime: '2021/4/6 13:35:14'
        },
        {
          enName: 'XG_XG_10KV_commDrv1_192.1.0.200',
          cnName: '新港新港中心电站10KV通信设备1',
          type: 'commDrv',
          state: '连接',
          lastHundred: '33%',
          today: '71%',
          lastTime: '2021/4/6 13:35:14'
        },
        {
          enName: 'XG_XG_10KV_commDrv1_prot4001',
          cnName: '新港新港中心电站10KV通信设备1端口4001',
          type: 'commPort',
          state: '中断',
          lastHundred: '42%',
          today: '71%',
          lastTime: '2021/4/6 13:35:14'
        },
        {
          enName: 'XG_XG_10KVS20_121',
          cnName: '新港新港中心电站10KV保护设备121',
          type: 'Drv',
          state: '中断',
          lastHundred: '0%',
          today: '51%',
          lastTime: '2021/4/6 13:35:14'
        },
        {
          enName: 'XG_XG_10KVS20_119',
          cnName: '新港新港中心电站10KV保护设备119',
          type: 'Drv',
          state: '中断',
          lastHundred: '20%',
          today: '80%',
          lastTime: '2021/4/6 13:35:14'
        }
      ]
      // const that = this
      // axios({
      //   method: 'post',
      //   url: '/system/user/getAllUserWithRoles',
      //   data: {
      //     page: page,
      //     limit: that.limit
      //   }
      // }).then(function (res) {
      //   if (res.data.code === 200) {
      //     const data = res.data.data
      //     that.total = data.total
      //     data.data.forEach(each => {
      //       const eachTableData = {}
      //       const role = each.roles.map(element => {
      //         return element.nameZh
      //       }).join(', ')
      //       eachTableData.role = role
      //       eachTableData.phone = each.phone
      //       eachTableData.id = each.id
      //       eachTableData.username = each.username
      //       eachTableData.enabled = each.enabled ? '启用' : '禁用'
      //       eachTableData.discribe = each.remark
      //       that.tableData.push(eachTableData)
      //     })
      //   }
      // })
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
