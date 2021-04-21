import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: state, // 存储状态（变量）
  mutations: mutations, // 修改状态，并且是同步的
  actions: actions, // 异步操作
  getters: getters // 对数据获取之前的再次编译，可以理解为state的计算属性
})
