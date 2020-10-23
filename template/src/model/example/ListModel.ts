export default class ListModel {
  // 订单号
  flowNo: Nullable<string> = ''
  // 订单状态
  sysState: Nullable<string> = ''
  // 订单类型
  type: Nullable<string> = ''
  // 下单渠道
  appId: Nullable<string> = ''
  // 客户信息
  memberInfo: Nullable<string> = ''
  // 收货人信息
  consignee: Nullable<string> = ''
  // 下单金额（元）
  realAmount: Nullable<string> = ''
  // 申请时间
  created: Nullable<string> = ''
}
