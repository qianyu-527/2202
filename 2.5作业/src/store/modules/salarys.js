import {	car} from '@/api/attendances'
const state={
car:[],
}
const mutations={
get(state,obj){
console.log(obj);
state.car=obj

},

}
const actions={
	gentlest(ctx,obj){
		car(obj).then(res=>{
if(res.data.code==10000){
	ctx.commit('get',res.data.data.data.rows)
}
})
	},
}


export default {
	namespaced: true,
	state,actions,mutations
}
