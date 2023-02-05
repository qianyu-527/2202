import Vue from 'vue'
import Vuex from 'vuex'
import employees from './modules/employees'
import  setting from './modules/setting'
import permission from './modules/permission'
import approvals from './modules/approvals'
import hrsaas from './modules/hrsaas'
import attendances from './modules/attendances'
import salarys from './modules/salarys'
import {index} from '@/api/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		index:[]
	},
  getters: {},
  mutations: {
		add(state,obj){
			index(obj).then(res=>{
				if(res.data.code==10000){
					 state.index=res.data.data
				}
			})
		},

	},
  actions: {},
  modules: {employees,setting,permission,approvals,hrsaas,attendances,salarys}
})
