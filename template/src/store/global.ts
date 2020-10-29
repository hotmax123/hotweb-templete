import User from '@/model/auth/User'
import { Commit, ActionTree } from 'vuex'
import Cookies from 'js-cookie'

export interface State {
  user: Nullable<User>
  permission: string[] // 权限列表
  isCollapse: boolean
  sidebar: any
  device: string
}

export const state: State = {
  user: null,
  permission: [],
  isCollapse: false,
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false
  },
  device: 'desktop'
}

export const mutations = {
  user(state: State, user: User) {
    state.user = user
  },
  permission(state: State, permission: string[]) {
    state.permission = permission
  },
  /**
   * 清除状态，通常在退出应用时执行
   */
  clear(state: State) {
    state.user = null
    state.permission = []
  },
  isCollapse(state: State, isCollapse: boolean) {
    state.isCollapse = isCollapse
  },
  sidebar(state: State) {
    state.sidebar.opened = !state.sidebar.opened
    state.sidebar.withoutAnimation = false
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1)
    } else {
      Cookies.set('sidebarStatus', 0)
    }
  },
  close_sidebar(state: State, withoutAnimation: boolean) {
    Cookies.set('sidebarStatus', 0)
    state.sidebar.opened = false
    state.sidebar.withoutAnimation = withoutAnimation
  },
  device: (state: State, device: string) => {
    state.device = device
  }
}

export const getters = {}

/**
 * 修改状态只提倡用dispatch
 */
export const actions: ActionTree<State, any> = {
  user(context: { commit: Commit }, user: User) {
    context.commit('user', user)
  },
  permission(context: { commit: Commit }, permission: string[]) {
    context.commit('permission', permission)
  },
  clear(context: { commit: Commit }) {
    context.commit('clear')
  },
  isCollapse(context: { commit: Commit }, isCollapse: boolean) {
    context.commit('isCollapse', isCollapse)
  },
  sidebar(context: { commit: Commit }) {
    context.commit('sidebar')
  },
  closeSideBar(context: { commit: Commit }, withoutAnimation: boolean) {
    context.commit('close_sidebar', withoutAnimation)
  },
  device(context: { commit: Commit }, device: string) {
    context.commit('device', device)
  }
}

export default { state, getters, mutations, actions }
