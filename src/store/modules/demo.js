import { ADD_COUNT, RESET_COUNT } from '../mutation-types'

const state = {
  count: 0,
}

const mutations = {
  // 用计算属性命名功能将常量作为函数名
  [ADD_COUNT](state, count) {
    if (count) {
      state.count += Number(count)
    } else {
      state.count++
    }
  },
  [RESET_COUNT](state) {
    state.count = 0
  },
}

const actions = {
  incrementAsync({ commit }, count) {
    return new Promise((resolve) => {
      setTimeout(() => {
        commit('ADD_COUNT', count)
        resolve()
      }, 1500)
    })
  },
}

export default {
  namespaced: false, //避免模块命名冲突，类似style中的scoped
  state,
  mutations,
  actions,
}
