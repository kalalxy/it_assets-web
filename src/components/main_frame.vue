<template>
  <div>
    <el-container style="height: 50rem;">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246);">
        <el-menu v-for="list,index in navList">
            <el-submenu :index="''+index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{list.label}}</span>
              </template>
              <el-menu-item v-for="child,cIndex in list.children" :index="''+cIndex" @click="menuSelect(child.path)">{{child.label}}</el-menu-item>
            </el-submenu>
        </el-menu>

      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px;">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>注销</el-dropdown-item>
              <el-dropdown-item>帮助中心</el-dropdown-item>
              <el-dropdown-item>关于我们</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>管理员，你好！</span>
          <el-badge :value="5" class="item" type="primary">
            <el-button size="small">消息</el-button>
          </el-badge>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

  export default {
    name: '',
    data () {
      return {
        hide: true,
        navList: [
          {
            label: '资产信息',
            children: [
              {label: '现有资产管理', path: '/crr/assets'},
              {label: '资产入库管理', path: '/assets/in'},
              {label: '资产出库管理', path: '/assets/out'},
              {label: '数据字典', path: '/dictionary'}
            ]
          },
          {
            label: '报表管理',
            children: [
              {label: '年报表管理', path: '/year/report'},
              {label: '月报表管理', path: '/report/month'},
              {label: '日报表管理', path: '/report/day'},
              {label: '总报表管理', path: '/report/total'},
              {label: '明细报表管理', path: '/report/detail'}
            ]
          },
          {
            label: '用户管理',
            children: [
              {label: '成员管理', path: '/member/managment'},
              {label: '用户权限管理', path: '/member/permission/handler'},
            ]
          },
          {
            label: '系统设置',
            children: [
              {label: '权限管理', path: '/permissions/handler'},
              {label: 'IP白名单管理', path: '/ip/white/sheet'},
              {label: '数据备份管理', path: '/data/backup/handler'},
              {label: '系统参数', path: '/system/parameters'},
              {label: '操作日志管理', path: '/opr/log/handler'}
            ]
          }
        ]
      }
    },
    mounted () {
      // this.menuSelect(0)
    },
    methods: {
      menuSelect (path) {
        // let url = this.getUrlByIndex(index);
        this.$router.push(path);
      },
      getUrlByIndex (index) {
        for (let i = 0; i < this.navList.length; i++) {
          if (this.navList[i].index == index) {
            return this.navList[i].url
          }
        }
      }
    }
  }
</script>

<style scoped>

  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }

  .el-aside {
    color: #333;
  }

  .el-badge__content.is-fixed {
    top: 10px !important;
  }

  .hide {
    display: none;
  }
</style>
