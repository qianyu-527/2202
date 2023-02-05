import {approvals,leaveApproval,leave} from '@/api/approvals'
const state={
car:[],
total:0,
list:[],/**申请数据 */
skt:[],/**申请数据 */
}
const mutations={
get(state,obj){
// console.log(obj);
state.car=obj

},
/**申请请假 */
set(state,obj){
// console.log(obj);
state.list=obj
},
/**申请请假 */
aet(state,obj){
	// console.log(obj);
	state.skt=obj
	}
}
const actions={
	gentlest(ctx,obj){
		approvals().then(res=>{
if(res.data.code==10000){
	ctx.commit('get',res.data.data.rows)
}
})
	},
	/**申请请假 */
	met(ctx,obj){
		leaveApproval(obj).then(res=>{
			if(res.data.code==10000){
				ctx.commit('set',res.data.data)
			}
		})
	},
	aet(ctx,obj){
		leave(obj).then(res=>{
			if(res.data.code==10000){
				ctx.commit('aet',res.data.data)
			}
		})
	}
}


export default {
	namespaced: true,
	state,actions,mutations
}
