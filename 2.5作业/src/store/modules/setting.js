import {setting,set,setDel,edit,add} from '@/api/setting'
const state={
car:[],/*** 表格*/
total:0,
list:[],/**物流信息 */
}
const mutations={
	/**表格 */
get(state,obj){
// console.log(obj);
state.car=obj.rows

},
/**物流信息的数据 */
gest(state,obj){
state.list=obj
}
}
const actions={
	gentlest(ctx,obj){
		setting(obj).then(res=>{
			// console.log(res);
if(res.data.code==10000){
	const {rows,total}=res.data.data
	ctx.commit('get',res.data.data)
}
})
	},
	/**物流信息的数据 */
	gest(ctx,obj){
		set().then(res=>{
			ctx.commit('gest',res.data.data)
		})
	}
}


export default {
	namespaced: true,
	state,actions,mutations
}
