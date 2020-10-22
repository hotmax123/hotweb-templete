/**
 * 对vuex state进行持久化存储，主要用来跨页面间调用
 *
 * @param store
 */
/* eslint-disable */
import { CommonUtil } from 'hotweb-ui'

const storagePlugin = store => {
  var key = 'my_vuex'
  // 从缓存中读取
  var storageState = JSON.parse(sessionStorage.getItem(key))
  let initState = CommonUtil.copy(store.state)
  Object.assign(initState, storageState)
  store.replaceState(initState)

  store.subscribe((mutation, state) => {
    sessionStorage.setItem(key, JSON.stringify(state))
  })
}

export default storagePlugin
