<template>
  <div style="padding: 10px;">
    <div>
      用户姓名：
      <el-input v-model="_name" placeholder="请输入内容" style="width:200px;margin-right: 15px;"></el-input>
      用户账号：
      <el-input v-model="account" placeholder="请输入内容" style="width:200px;margin-right: 15px;"></el-input>
      联系电话：
      <el-input v-model="phone" placeholder="请输入内容" style="width:200px;margin-right: 15px;"></el-input>
      QQ号码：
      <el-input v-model="qq" placeholder="请输入内容" style="width:150px;"></el-input>
      <el-button style="margin-left: 25px;">检 索</el-button>
      <el-button style="margin-left: 25px;">添加用户</el-button>
    </div>
    <div style="margin-top: 15px;">
      <el-table
        :data="tableData"
        border
        :height="600"
        style="width: 1450px">
        <el-table-column
          fixed
          type="index"
          label="编号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="account"
          label="账号"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="用户姓名"
          width="150">
        </el-table-column>
        <el-table-column
          prop="sex"
          label="性别"
          width="150">
        </el-table-column>
        <el-table-column
          prop="birth"
          label="出生年月"
          width="150">
        </el-table-column>
        <el-table-column
          prop="phone"
          label="联系电话"
          width="200">
        </el-table-column>
        <el-table-column
          prop="qq"
          label="QQ号码"
          width="200">
        </el-table-column>
        <el-table-column
          prop="email"
          label="邮箱"
          width="200">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="150">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
            <el-button type="text" size="small">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[8, 10, 16, 20]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="4">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        _name: '',
        account: '',
        phone: '',
        qq: '',
        tableData: [
          {
            account: '1400221',
            name: '姬大德',
            sex: '男',
            birth: '1977-11-12',
            phone: '18899991011',
            qq: '52418819910',
            email: 'lhhlsf@qq.com'
          },
          {
            account: 'admin',
            name: '姬成道',
            sex: '男',
            birth: '1979-11-12',
            phone: '13899991011',
            qq: '524188910',
            email: 'lhrrt@qq.com'
          }
          ,
          {
            account: '1400222',
            name: '叶凡',
            sex: '男',
            birth: '1978-11-12',
            phone: '18899981011',
            qq: '524188110',
            email: 'uuiip@qq.com'
          }
          ,
          {
            account: '1400221',
            name: '罗南',
            sex: '男',
            birth: '1977-01-12',
            phone: '18877771011',
            qq: '52412219910',
            email: 'ee~@qq.com'
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
