import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../components/login')
    },
    {
      path: '/main/frame/:account/:roleId',
      name: 'mainFrame',
      component: () => import('../components/main_frame'),
      children: [
        {
          path: '/default',
          name: 'default',
          component: () => import('../components/main_default')
        },
        {
          path: '/assets/in',
          name: 'assetsIn',
          component: () => import('../components/assets_in')
        },
        {
          path: '/assets/out',
          name: 'assetsOut',
          component: () => import('../components/assets_out')
        },
        {
          path: '/crr/assets',
          name: 'crrAssets',
          component: () => import('../components/crr_assets')
        },
        {
          path: '/data/backup/handler',
          name: 'dataBackupHandler',
          component: () => import('../components/data_backup_handler')
        },
        {
          path: '/dictionary',
          name: 'dictionary',
          component: () => import('../components/dictionary')
        },
        {
          path: '/ip/white/sheet',
          name: 'ipWhiteSheet',
          component: () => import('../components/ip_white_sheet')
        },
        {
          path: '/member/handler',
          name: 'memberHandler',
          component: () => import('../components/member_handler')
        },
        {
          path: '/member/managment',
          name: 'memberManagment',
          component: () => import('../components/member_managment')
        },
        {
          path: '/member/permission/handler',
          name: 'memberPermissionHandler',
          component: () => import('../components/member_permission_handler')
        },
        {
          path: '/opr/log/handler',
          name: 'oprLogHandler',
          component: () => import('../components/opr_log_handler')
        },
        {
          path: '/permissions/handler',
          name: 'permissionsHandler',
          component: () => import('../components/permissions_handler')
        },
        {
          path: '/report/day',
          name: 'reportDay',
          component: () => import('../components/report_day')
        },
        {
          path: '/report/detail',
          name: 'reportDetail',
          component: () => import('../components/report_detail')
        },
        {
          path: '/report/month',
          name: 'reportMonth',
          component: () => import('../components/report_month')
        },
        {
          path: '/year/report',
          name: 'yearReport',
          component: () => import('../components/report_year')
        },
        {
          path: '/report/total',
          name: 'reportTotal',
          component: () => import('../components/report_total')
        },
        {
          path: '/system/parameters',
          name: 'systemParameters',
          component: () => import('../components/system_parameters')
        }
      ]
    }
  ]
})
