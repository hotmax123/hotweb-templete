import { Component, Vue } from 'vue-property-decorator'
import BasicLayout from '@/layouts/BasicLayoutSingle/BasicLayout.vue'
import { abnormalType } from '@/model/example/AbnormalType'
import { State } from 'vuex-class'

@Component({
  components: { BasicLayout }
})
export default class MainFrame extends Vue {
  @State('permission') permission: string[]
  isCollapse: boolean = false

  // 获得聚焦菜单
  // 二级路由配置parent，为的是保持左侧菜单处于选中状态， default-active的值和el-menu-item标签的index值相同时，会默认展开菜单
  get activeMenu() {
    return this.$route.meta.parent
  }

  // 生成菜单
  get menuList() {
    return [
      {
        title: '列表页',
        icon: 'iconfont el-icon-location',
        index: 'list',
        children: [
          // index 控制哪个菜单高亮，每个submenu对应一个index
          // name 用于匹配路由，判断有没有权限，有权限才显示
          { title: '基础列表', url: '/basicList', index: 'basicList', name: 'basicList' },
          { title: '商品列表', url: '/skuList', index: 'skuList', name: 'skuList' },
          { title: '订单列表', url: '/orderList', index: 'orderList', name: 'orderList' }
        ]
      },
      {
        title: '表单页',
        icon: 'iconfont el-icon-location',
        index: 'form',
        children: [
          { title: '基础表单', url: '/basicForm', index: 'basicForm', name: 'basicForm' },
          { title: '复杂表单', url: '/complexForm', index: 'complexForm', name: 'complexForm' },
          { title: '分步表单', url: '/stepForm', index: 'stepForm', name: 'stepForm' }
        ]
      },
      {
        title: '详情页',
        icon: 'iconfont el-icon-location',
        index: 'detail',
        children: [
          { title: '基础详情', url: '/basicDetail', index: 'basicDetail', name: 'basicDetail' },
          { title: '复杂详情', url: '/complexDetail', index: 'complexDetail', name: 'complexDetail' }
        ]
      },
      {
        title: '异常页-无子菜单', // 一级菜单的index=url
        icon: 'iconfont el-icon-location',
        index: 'abnormal',
        url: `/abnormal/${abnormalType.noContent}`,
        name: 'abnormal',
        children: []
      },
      {
        title: '异常页',
        icon: 'iconfont el-icon-location',
        index: 'abnormal',
        children: [
          {
            title: '暂无任务',
            url: `/abnormal/${abnormalType.noTask}`,
            index: 'noTask',
            name: 'abnormal'
          },
          {
            title: '暂无搜索结果',
            url: `/abnormal/${abnormalType.noSearchResult}`,
            index: 'noSearchResult',
            name: 'abnormal'
          },
          {
            title: '系统异常',
            url: `/abnormal/${abnormalType.systemErr}`,
            index: 'systemErr',
            name: 'abnormal'
          },
          {
            title: '网络异常',
            url: `/abnormal/${abnormalType.networkErr}`,
            index: 'networkErr',
            name: 'abnormal'
          },
          {
            title: '权限控制',
            url: `/abnormal/${abnormalType.rightControl}`,
            index: 'rightControl',
            name: 'abnormal'
          }
        ]
      }
    ]
  }

  get menus() {
    // 过滤一级菜单
    let menus: any[] = []

    this.menuList.forEach((menu: any) => {
      if (menu.children.length > 0) {
        let array = menu.children.filter((item: any) => this.hasPermission(item)) || []
        if (array.length > 0) {
          menu.children = array
          menus.push(menu)
        }
      } else {
        if (this.hasPermission(menu)) {
          menus.push(menu)
        }
      }
    })

    return menus
  }

  hasPermission(menu: any): boolean {
    let mainFrameSubitems = (this.$router as any).options.routes.find((route: any) => route.name === 'mainFrame').children || []
    let route = mainFrameSubitems.find((route: any) => route.name === menu.name) || {}
    if (Object.keys(this.permission).length) {
      let hasPermission = this.permission.find((permission: any) => (route.meta || {}).permission === permission)
      if (hasPermission) {
        return true
      }
    }

    return false
  }
  /**
   * 进入MainFrame界面，若存在菜单列表，则跳转到第一个菜单项，否则跳转到默认界面
   */
  beforeRouteEnter(to: any, from: any, next: any) {
    if (to.name === 'mainFrame') {
      next((vm: any) => {
        if (vm.$refs.menuItem) {
          let index = vm.$refs.menuItem[0].index
          let routes = (vm.$router as any).options.routes.find((route: any) => route.name === 'mainFrame').children || []
          let route = routes.find((route: any) => route.name === index)
          vm.$router.push({ name: route.name })
        } else {
          vm.$router.push({ name: '403' })
        }
      })
    } else {
      next()
    }
  }

  /**
   * 登出事件
   */
  doLogout() {
    console.log('change...')
  }
}
