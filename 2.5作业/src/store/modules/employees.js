import {employees,role,add} from '@/api/employees'
const state={
car:[],
total:0,
}
const mutations={
get(state,obj){
// console.log(obj);
state.car=obj.rows
state.total=obj.total

}
}
const actions={
	gentlest(ctx,obj){
		employees(obj).then(res=>{
if(res.data.code==10000){
	ctx.commit('get',res.data.data)
}
})
	},
	set(ctx,obj){
		add(obj).then(res=>{
			console.log(res.data);

		})
	},


}


export default {
	namespaced: true,
	state,actions,mutations
}
