import {permission,del,add} from '@/api/permission'

import { Message} from 'element-ui'

const state={
car:[],
list:[],/**添加数据 */
}
const mutations={
get(state,obj){
// console.log(obj);
state.car=obj
},
/**添加 */
tad(state,obj){
console.log(obj);
// state.list
}
}
const actions={
	gent(ctx,obj){
		permission(obj).then(res=>{
			// console.log(res.data.data);
if(res.data.code==10000){
	ctx.commit('get',res.data.data)
}
})
	},
	// dee(ctx,obj){
	// 	del(obj).then(res=>{
	// 		const {code,message}=res.data
	// 		if(code===10000){
	// 			/**提示 */
	// 			Message({message: message,type: 'success'});

	// 		}
	// 	})
	// }

	/**添加 */
	gad(ctx,obj){
		add(obj).then(res=>{
		  if(res.data.code==10000){
				ctx.commit('tad',res.data.data)
			}
		})
	}
}


export default {
	namespaced: true,
	state,actions,mutations
}
