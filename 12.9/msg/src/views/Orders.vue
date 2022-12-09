<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-input placeholder="请输入内容" v-model="input3" clearable>

					<el-button slot="append" icon="el-icon-search" @change="sou"></el-button>
				</el-input>
			</el-col>
		</el-row>
		<el-table :data="res" border >
			<el-table-column type="index"  label="#">
			</el-table-column>
			<el-table-column prop="order_number" label="订单编号"  >
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
			<el-table-column  label="下单时间">
				<template v-slot="scope">
					<p>{{scope.row.create_time|fil}}</p>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" type="primary"  @click="add(scope.$index, scope.row)" ></el-button>
					<el-button size="mini" type="success" @click="del(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="size" @current-change="page" :current-page="num.pagenum" :page-sizes="[5,10,15,20]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tab.length">
		</el-pagination>
		<!-- 模态框 -->
		<el-dialog title="修改地址" :visible.sync="dialogFormVisible">

  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {
			input3:"",
			tab:[],
			num:{
	   	pagenum:1,
			pagesize:10,
			},
			num2:{
	   	pagenum:1,
			pagesize:800,
			},
			dialogFormVisible:false,//模态框
		}
	},
	created () {
		this.getters()
	},
	mounted () { },
	filters: {
		fil(value) {
			return new Date(value*1000).toLocaleString()

		}
	},
	computed:{
		res(){
			return this.tab.slice(this.num.pagesize*(this.num.pagenum-1),this.num.pagesize*(this.num.pagenum))
		}
	},
	methods: {
		//每页页码  和每页的页数
		  size(val) {
		this.num.pagesize=val
      },
      page(val) {
		this.num.pagenum=val
      },
	  // 数据
	  getters(){
		this.$http({
			method:"get",
			url:this.$http.addorUrl("orders"),
			params:this.num2
		}).then(res=>{
			if(res.data.meta.status==200){
				this.$message.success(res.data.meta.msg)
				this.tab=res.data.data.goods
			console.log(this.tab)
			}
		})
	  },
	  // 搜索
	  sou(){
		  //  this.input3=333
	  },
	  //物流
	  del(i,val){
		console.log(val);

	  },
	  //修改
	  add(i,val){
		console.log(i,val);
		this.dialogFormVisible=true
	  }
	}
}
</script>
<style scoped lang='scss'>
</style>
