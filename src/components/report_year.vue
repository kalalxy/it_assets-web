<template>
  <div style="padding: 10px;">
    <div>
      请选择需要统计的年份：
      <el-input-number v-model="num8" controls-position="right" :min="1970"></el-input-number>
      <el-button style="margin-left: 5px;">统 计</el-button>
      <el-button style="margin-left: 1050px;">导出统计数据到Excel</el-button>
    </div>
    <div style="margin-top:15px;">
      <el-table
        :data="tableData"
        border
        :height="600"
        style="width: 1710px">
        <el-table-column
          fixed
          type="index"
          label="编号"
          width="50">
        </el-table-column>
        <el-table-column
          prop="code"
          label="资产编号"
          width="190">
        </el-table-column>
        <el-table-column
          prop="name"
          label="资产名称"
          width="150">
        </el-table-column>
        <el-table-column
          prop="principal"
          label="资产责任人"
          width="150">
        </el-table-column>
        <el-table-column
          prop="quantity"
          label="库存量"
          width="150">
        </el-table-column>
        <el-table-column
          prop="totalWorth"
          label="库存总价值"
          width="200">
        </el-table-column>
        <el-table-column
          prop="totalPurchase"
          label="年度总购进量"
          width="150">
        </el-table-column>
          <el-table-column
            prop="totalPurchaseSpent"
            label="年度购进总价"
            width="200">
          </el-table-column>
          <el-table-column
            prop="totalBrokenQuantity"
            label="年度报废数量"
            width="150">
          </el-table-column>
          <el-table-column
            prop="totalBrokenWorth"
            label="年度报废总价值"
            width="200">
          </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
        width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
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
        :total="12">
      </el-pagination>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        num8: new Date().getFullYear() - 1,
        tableData: [
          {
            code: 1004998100000001,
            name: '联想牌电脑',
            principal: '杨小闲',
            quantity: '80台',
            totalWorth: '400000.00元（人民币）',
            totalPurchase: '6台',
            totalPurchaseSpent: '30000.00元（人民币）',
            totalBrokenQuantity: '3台',
            totalBrokenWorth: '15000.00元（人民币）',
          },
          {
            code: 1004998100000002,
            name: '华硕笔记本',
            principal: '杨小闲',
            quantity: '20台',
            totalWorth: '80000.00元（人民币）',
            totalPurchase: '1台',
            totalPurchaseSpent: '4000.00元（人民币）',
            totalBrokenQuantity: '1台',
            totalBrokenWorth: '4000.00元（人民币）',
          },
          {
            code: 1004998100000003,
            name: '弘基刀片式服务器',
            principal: '杨小闲',
            quantity: '5台',
            totalWorth: '600000.00元（人民币）',
            totalPurchase: '0台',
            totalPurchaseSpent: '0.00元（人民币）',
            totalBrokenQuantity: '0台',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000004,
            name: '华硕机柜式服务器',
            principal: '杨小闲',
            quantity: '3台',
            totalWorth: '450000元（人民币）',
            totalPurchase: '0台',
            totalPurchaseSpent: '0.00元（人民币）',
            totalBrokenQuantity: '0台',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000005,
            name: '思科牌交换机',
            principal: '杨小闲',
            quantity: '5台',
            totalWorth: '45000.00元（人民币）',
            totalPurchase: '1台',
            totalPurchaseSpent: '9000.00元（人民币）',
            totalBrokenQuantity: '0台',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000006,
            name: '斐讯企业级路由器',
            principal: '杨小闲',
            quantity: '4台',
            totalWorth: '3200.00元（人民币）',
            totalPurchase: '1台',
            totalPurchaseSpent: '800.00元（人民币）',
            totalBrokenQuantity: '1台',
            totalBrokenWorth: '800.00元（人民币）',
          },
          {
            code: 1004998100000007,
            name: '思科智能投影仪',
            principal: '杨小闲',
            quantity: '3台',
            totalWorth: '21000.00元（人民币）',
            totalPurchase: '1台',
            totalPurchaseSpent: '7000.00元（人民币）',
            totalBrokenQuantity: '0台',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000008,
            name: '雷珀机械键盘',
            principal: '杨小闲',
            quantity: '80个',
            totalWorth: '8000.00元（人民币）',
            totalPurchase: '20个',
            totalPurchaseSpent: '2000.00元（人民币）',
            totalBrokenQuantity: '0个',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000009,
            name: '罗技鼠标',
            principal: '杨小闲',
            quantity: '80个',
            totalWorth: '8000.00元（人民币）',
            totalPurchase: '15个',
            totalPurchaseSpent: '1500.00元（人民币）',
            totalBrokenQuantity: '2个',
            totalBrokenWorth: '200.00元（人民币）',
          },
          {
            code: 1004998100000010,
            name: '苹果笔记本',
            principal: '杨小闲',
            quantity: '8台',
            totalWorth: '64000.00元（人民币）',
            totalPurchase: '2台',
            totalPurchaseSpent: '16000.00元（人民币）',
            totalBrokenQuantity: '0',
            totalBrokenWorth: '0.00元（人民币）',
          },
          {
            code: 1004998100000011,
            name: '可联网激光打印机',
            principal: '杨小闲',
            quantity: '2台',
            totalWorth: '30000.00元（人民币）',
            totalPurchase: '0台',
            totalPurchaseSpent: '0.00元（人民币）',
            totalBrokenQuantity: '0台',
            totalBrokenWorth: '0.00元（人民币）',
          }
        ],
      }
    }
  }

</script>
