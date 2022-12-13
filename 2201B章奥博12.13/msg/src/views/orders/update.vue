<template>
<div>
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
				<el-button @click="qx">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 第二个模态框 -->
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
import cityOptions from '../../assets/city_data2017_element.js'
export default {
  name: '',
  components: {},
  data () {
	return {
			dialogFormVisible:false,//模态框
			dialog:false,
			/***表单和验证*/
			 rules: {name: [{ required: true, message: '请输入详细地址', trigger: 'blur' },],},
		    ruleForm:{name:"",},
			cityOptions: cityOptions,/**城市 */
			msg:[],reverse: true,/***模态框第二个*/
	}
  },
  created () { },
  mounted () { },
  methods: {
	info(){
		this.dialogFormVisible=true
	},
	que(){
		if(this.ruleForm.name==''){
			this.$refs.saveTagInput.focus();
		}
	},
	qx(){
			this.ruleForm.name=''
		this.dialogFormVisible=false
	},
	/**第二个模态框 */
	into(){
		this.dialog=true
		this.$http({
			method:"get",
			url:this.$http.addorUrl(`/kuaidi/${1106975712662}`)
		}).then((res) => {
			const {status,msg}=res.data.meta
			if(status==200){
				this.msg=res.data.data
			}else{
				this.$message.success(msg)
			}
		})
	}
  }
}
</script>
<style scoped lang='scss'>

</style>
