<template>
	<div>
		<!-- 模态框	 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="form" :rules="rules" ref="form" label-width="100px">
				<el-form-item label="分类名称" prop="cat_name">
					<el-input v-model="form.cat_name"></el-input>
				</el-form-item>
				<el-form-item label="父级分类" v-show="show">
					<el-cascader :options="tab" clearable change-on-select :props="defaultParams" @change="change" ref="tree"></el-cascader>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que('form')">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
	props:['title','flag','tab'],
  components: {},
  data () {
	return {
		dialogFormVisible:false,/***模态框 */
		  defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, /***级联选择器展示内容*/
		form:{
			cat_name:"",
			flag:0,
			cat_name: "",
        cat_level: "",
        cat_pid: ""
		},
		 rules: {
        cat_name: [
          { required: true, message: "分类名称不能为空", trigger: "blur" }
        ]
      } ,/***表单验证*/
		show:false,
	}
  },
  created () { },
  mounted () { },
  methods: {
	/**打开模态框 */
	info(){
		this.dialogFormVisible=true
		this.show=true
		 this.form.cat_name = ""
	},
	que(){
		this.dialogFormVisible=false
		this.$emit('que',this.form )
	},
	into(val){
		this.dialogFormVisible=true
		this.form.flag=val.cat_id
		this.show=false
	},
	/***change事件 */
	change(){
(this.form.cat_level =
        this.$refs["tree"].getCheckedNodes()[0].data.cat_level + 1),
        (this.form.cat_pid =
          this.$refs["tree"].getCheckedNodes()[0].data.cat_id)
	}
  }
}
</script>
<style scoped lang='scss'>
</style>
