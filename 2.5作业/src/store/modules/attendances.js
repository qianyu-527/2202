import {	car,list} from '@/api/attendances'
const state={
car:[],
list:[]
}
const mutations={
get(state,obj){
// console.log(obj);
state.car=obj

},
// 报表数据
set(state,obj){
	// console.log(obj);
	state.list=obj

	},
}
const actions={
	gentlest(ctx,obj){
		car().then(res=>{
if(res.data.code==10000){
	ctx.commit('get',res.data.data.data.rows)
}
})
	},
	met(ctx,obj){
		list().then(res=>{
			console.log(res.data.data);
if(res.data.code==10000){
	ctx.commit('set',res.data.data)
}
})
	},
}


export default {
	namespaced: true,
	state,actions,mutations
}
