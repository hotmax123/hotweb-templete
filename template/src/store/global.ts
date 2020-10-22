import User from '@/model/auth/User'
import { Commit, ActionTree } from 'vuex'

export interface State {
  user: Nullable<User>
  permission: string[] // 权限列表
}

export const state: State = {
  user: null,
  permission: []
}

/**
 * 通常不直接调用这个方法
 */
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
  }
}

export default { state, getters, mutations, actions }
