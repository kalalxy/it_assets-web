<template>
  <div v-loading="loading"
       element-loading-text="拼命加载中"
       element-loading-spinner="el-icon-loading"
       element-loading-background="rgba(0, 0, 0, 0.8)"
       style="width: 100%;height:42rem;">
    <div style="margin-top: 1rem;width:35%;margin-bottom:1rem;">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择筛选类型" style="width:10rem;text-align: center">
          <el-option label="资产名称" value="1"></el-option>
          <el-option label="资产负责人" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search" @click="searchAssets()"></el-button>
      </el-input>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="assetsId"
        label="资产编号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="assetsName"
        label="资产名称"
        width="180">
      </el-table-column>
      <el-table-column
        prop="quantity"
        label="资产数量">
      </el-table-column>
      <el-table-column
        prop="perWorth"
        label="单件价值">
      </el-table-column>
      <el-table-column
        prop="worth"
        label="资产总价值">
      </el-table-column>
      <el-table-column
        prop="principal"
        label="资产负责人">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        select: '',
        input: '',
        loading: false,
        tableData:[]
      }
    },
    mounted () {
      this.initParams()
    },
    methods: {
      searchAssets () {
      },
      initParams () {
        this.loading = true
        let _this = this
        setTimeout(function () {
          _this.loading = false
        }, 1500)
      }
    }
  }
</script>

<style scoped>
  .el-select .el-input {
    width: 130px;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>
