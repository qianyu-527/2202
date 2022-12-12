<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-input placeholder="请输入内容" clearable>
					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
		</el-row>
		<el-table :data="res" border>
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
					<el-button size="mini" icon="el-icon-edit" type="primary" @click="add(scope.$index, scope.row)"></el-button>
					<el-button size="mini" type="success" @click="del(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="size" @current-change="page" :current-page="num.pagenum" :page-sizes="[5,10,15,20]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tab.length">
		</el-pagination>
		<!-- 模态框 -->
		<el-dialog title="修改地址" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="省市区/县">
					<el-cascader :options="cityOptions" change-on-select >
					</el-cascader>
				</el-form-item>
				<el-form-item label="详细地址" prop="name">
					<el-input v-model="ruleForm.name" ref="saveTagInput"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 物流模态框 -->
		<el-dialog title="物流进度" :visible.sync="dialog">
 <el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in msg"
      :key="index"
      :timestamp="msg.ftime">
      {{activity.context}}
    </el-timeline-item>
  </el-timeline>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialog = false">取 消</el-button>
    <el-button type="primary" @click="dialog = false">确 定</el-button>
  </div>
</el-dialog>
	</div>
</template>

<script>
import cityOptions from '../assets/city_data2017_element.js'
export default {
	name: '',
	components: {},
	data () {
		return {
			input3:"",
			dialog:false,
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
			 rules: {
       name: [
            { required: true, message: '请输入详细地址', trigger: 'blur' },
          ],
		  },
		    ruleForm:{
				name:"",
			},
			cityOptions	: cityOptions,
			msg:[],reverse: true,
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
				// this.$message.success(res.data.meta.msg)
				this.tab=res.data.data.goods
			// console.log(this.tab)
			}
		})
	  },

	  //物流
	  del(i,val){
		this.dialog=true
		this.$http({
			method:"get",
			url:this.$http.addorUrl(`/kuaidi/${1106975712662}`)
		}).then(res=>{
			if(res.data.meta.status==200){
				this.msg=res.data.data
				console.log(this.msg);
			}
		})
	  },
	  //修改
	  add(i,val){
		this.dialogFormVisible=true
		if(this.ruleForm.name==""){
			return false
		}
	  },
	  /**点击确定**/
	  que(){
		if(this.ruleForm.name==''||this.cityOptions==''){
			this.$refs.saveTagInput.focus();
			return false
		}
		this.ruleForm.name=''
		this.dialogFormVisible = false
	  },
	}
}
</script>
<style scoped lang='scss'>
</style>
