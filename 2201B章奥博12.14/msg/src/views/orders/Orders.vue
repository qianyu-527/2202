<template>
<div>
	<el-card>
		<!-- 搜索框 -->
			<el-col :span="8">
				<el-input placeholder="请输入内容" clearable>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
			<!-- 表格 -->
			<el-table :data="tab" border>
			<el-table-column type="index" label="#">
			</el-table-column>
			<el-table-column prop="order_number" label="订单编号">
			</el-table-column>
			<el-table-column prop="order_price" label="订单价格">
			</el-table-column>
			<el-table-column prop="order_pay" label="是否付款">
				<template v-slot="scope">
					<el-tag v-if="scope.row.order_pay==1?'scope.row.order_pay':''" effect="dark">已付款</el-tag>
					<el-tag type="danger" v-else effect="dark">未付款</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="is_send" label="是否发货">
			</el-table-column>
			<el-table-column label="下单时间">
				<template v-slot="scope">
					<p>{{scope.row.create_time|fil}}</p>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" type="primary" @click="add( scope.row)"></el-button>
					<el-button size="mini" type="success" @click="del( scope.row)" icon="el-icon-delete"></el-button>
				</template>
			</el-table-column>
		</el-table>
	</el-card>
		<!-- 模态框 -->
		<update v-if="dialogFormVisible" ref="update"></update>
</div>
</template>

<script>
import update from './update'
export default {
  name: '',
  components: {update},
  data () {
	return {
		tab:[],
		total:0,
			num:{
	   	pagenum:1,
			pagesize:27,
			},
			dialogFormVisible:false,
			dialog:false,
	}
  },
  created () {
	this.getters()
  },
  methods: {
	/**编辑模态框 */
	  add(row){
		this.dialogFormVisible=true
		this.$nextTick(() => {
			this.$refs.update.info()
		})
	  },
	  /**数据 */
	  getters(){
		this.$http({
			method:"get",
			url:this.$http.addorUrl("orders"),
			params:this.num
		}).then(res=>{
			const {status,msg}=res.data.meta
			if(status==200){
				console.log(res.data.data);
				const {total,goods}=res.data.data
				this.tab=goods
				 this.total=total
			}
		})
	  },
	  /**物流模态框 */
	  del(row){
		this.dialogFormVisible=true
		this.dialog=true
		this.$nextTick(()=>{
			this.$refs.update.into()
		})
	  }
  }
}
</script>
<style scoped lang='scss'>
.flex{
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
