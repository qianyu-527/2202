import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'
import  setting from './modules/setting'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		car:"是啊"
	},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
		employees,setting
	}
})
