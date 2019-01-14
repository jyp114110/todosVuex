import Vue from 'vue'
import Vuex from 'vuex'

// 安装 vuex
Vue.use(Vuex)

const state = {
  list: [
    { id: 1, name: '吃饭', done: true },
    { id: 2, name: '睡觉', done: false },
    { id: 3, name: '打豆豆', done: true }
  ]

}
const mutations = {
  // 添加 任务
  addTodo (state, payload) {
    // console.log(payload.name)
    let id = state.list.length === 1 ? 1 : state.list[state.list.length - 1].id + 1
    // console.log(id)
    state.list.push({
      id,
      name: payload.name,
      done: false
    })
  },

  // 更新 任务状态
  changeTodoState (state, payload) {
    const task = state.list.find(item => item.id === payload.id)
    task.done = !task.done
  },

  // 更新 任务名
  updateTodo (state, payload) {
    const {value, id} = payload
    const task = state.list.find(item => item.id === id)
    task.name = value
  },
  delTodo (state, payload) {
    state.list = state.list.filter(item => item.id !== payload.id)
  },
  clearCompleted (state) {
    state.list = state.list.filter(item => !item.done)
  }

}
const getters = {

  isShowFooter (state) {
    return state.list.length > 0
  },
  leftCount (state) {
    return state.list.filter(item => !item.done).length
  },
  isShowCompleted (state) {
    return state.list.some(item => item.done)
  }

}
const store = new Vuex.Store({
  strict: true,
  state,
  mutations,
  getters
})

export default store
