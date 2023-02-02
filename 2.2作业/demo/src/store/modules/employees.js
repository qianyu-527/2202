import {employees} from '@/api/employees'
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
	const {rows,total}=res.data.data
	ctx.commit('get',res.data.data)
}
})
	}
}


export default {
	namespaced: true,
	state,actions,mutations
}
