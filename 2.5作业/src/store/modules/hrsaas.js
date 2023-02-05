import {	list,department,clear} from '@/api/hrsaas'
const state={
car:[],
list:[],/**部门 */
skt:[],/**社保报表数据 */
}
const mutations={
get(state,obj){
// console.log(obj);
state.car=obj

},
/**部门 */
set(state,obj){
	// console.log(obj);
	state.list=obj
	},
	// 社保设置报表数据
	ent(state,obj){
		console.log(obj);
		state.skt=obj
	}
}
const actions={
	gentlest(ctx,obj){
		list().then(res=>{
if(res.data.code==10000){
	ctx.commit('get',res.data.data.rows)
}
})
	},
		/**部门 */
		met(ctx,obj){
			department(obj).then(res=>{
				// console.log(res.data.data);
				if(res.data.code==10000){
					ctx.commit('set',res.data.data.depts)
				}
			})
		},
   /**社保设置表格*/
	 set(ctx,obj){
     clear().then(res=>{
			// console.log(res.data.data);
			if(res.data.code==10000){
				ctx.commit('ent',res.data.data)
			}
		 })
	 }

}


export default {
	namespaced: true,
	state,actions,mutations
}
