<template>
	<div>
		<!-- 模态框	 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="分类名称">
					<el-input v-model="form.cat_name"></el-input>
				</el-form-item>
				<el-form-item label="父级分类">
					<el-cascader :options="form.options" :props="{ checkStrictly: true }" clearable></el-cascader>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props:['title','flag'],
  components: {},
  data () {
	return {
		dialogFormVisible:false,/***模态框 */
		form:{
			cat_name:"",options:[],index:0,flag:0,
		},
	}
  },
  created () { },
  mounted () { },
  methods: {
	/**打开模态框 */
	info(){
		this.dialogFormVisible=true
	},
	que(){
		this.dialogFormVisible=false
		this.$emit('que',this.form )
	},
	into(val){
		this.dialogFormVisible=true
		this.form.flag=val.cat_id
	}
  }
}
</script>
<style scoped lang='scss'>
</style>
