import { Permission } from '@/model/auth/Permission'

// 二级路由才设置parent，目的是保持菜单选中
const ExampleRouter: any = [
  {
    path: '/basicList',
    name: 'basicList',
    meta: { title: '基础列表', keepAlive: false, parent: 'basicList', permission: Permission.testpermission },
    component: () => import('../../example/basicList/BasicList.vue')
  },
  {
    path: '/applyAdd',
    name: 'applyAdd',
    meta: { title: '新增进件申请', keepAlive: false, parent: 'basicList', permission: Permission.testpermission },
    component: () => import('../../example/basicList/ApplyAdd.vue')
  },
  {
    path: '/skuList',
    name: 'skuList',
    meta: { title: '商品列表', keepAlive: false, parent: 'skuList', permission: Permission.testpermission },
    component: () => import('../../example/skuList/SkuList.vue')
  },
  {
    path: '/orderList',
    name: 'orderList',
    meta: { title: '订单列表', keepAlive: false, parent: 'orderList', permission: Permission.testpermission },
    component: () => import('../../example/orderList/OrderList.vue')
  },
  {
    path: '/basicDetail',
    name: 'basicDetail',
    meta: { title: '基础详情', keepAlive: false, parent: 'basicDetail', permission: Permission.testpermission },
    component: () => import('../../example/basicDetail/BasicDetail.vue')
  },
  {
    path: '/basicForm',
    name: 'basicForm',
    meta: { title: '基础表单', keepAlive: false, parent: 'basicForm', permission: Permission.testpermission },
    component: () => import('../../example/basicForm/BasicForm.vue')
  },
  {
    path: '/complexForm',
    name: 'complexForm',
    meta: { title: '复杂表单', keepAlive: false, parent: 'complexForm', permission: Permission.testpermission },
    component: () => import('../../example/complexForm/ComplexForm.vue')
  },
  {
    path: '/stepForm',
    name: 'stepForm',
    meta: { title: '分步表单', keepAlive: false, parent: 'stepForm', permission: Permission.testpermission },
    component: () => import('../../example/stepForm/StepForm.vue')
  },
  {
    path: '/abnormal/:abnormalStatus',
    name: 'abnormal',
    meta: { title: '异常页', keepAlive: false, parent: 'abnormal', permission: Permission.testpermission },
    component: () => import('../../example/abnormal/Abnormal.vue')
  },
  {
    path: '/complexDetail',
    name: 'complexDetail',
    meta: { title: '复杂详情', keepAlive: false, parent: 'complexDetail', permission: Permission.testpermission },
    component: () => import('../../example/complexDetail/ComplexDetail.vue')
  }
]
export default ExampleRouter
