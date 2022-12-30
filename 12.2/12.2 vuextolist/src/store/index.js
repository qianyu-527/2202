import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import vuexr from 'vuex-persistedstate'
export default new Vuex.Store({
  state: {
    arr: []
  },
  getters: {
  },
  mutations: {
    qd(state, val) {
      console.log(val);
      let obj = {
        id: state.arr.length,
        name: val.name,
        date1: val.date1,
        status: val.status

      }
      state.arr.push(obj)
    },
    // 吧数据添加到数组里
    edit(state, val) {
      console.log(val);
      state.arr.forEach((item, index) => {
        if (item.id == val.id) {
          state.arr[index].name = val.form.name
          state.arr[index].status = val.form.status
          state.arr[index].date1 = val.form.date1
        }
      })
    }

  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexr()]
})
