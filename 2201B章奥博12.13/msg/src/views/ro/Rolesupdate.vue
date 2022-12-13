<template>
<div>
	<!-- 模态框 -->
	<el-dialog :title="title" :visible.sync="dialogFormVisible">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="角色名称" prop="roleName">
						<el-input v-model="ruleForm.roleName"></el-input>
					</el-form-item>
				<el-form-item label="角色描述" prop="roleDesc">
					<el-input v-model="ruleForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 分配权限 -->
		<el-dialog title="分配权限" :visible.sync="dia">

  <div slot="footer" class="dialog-footer">
    <el-button @click="dia = false">取 消</el-button>
    <el-button type="primary" @click="dia = false">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
export default {
	props:['title','flag'],
  data () {
	return {
			/**表单*/
		ruleForm:{
			roleName:"",
			roleDesc:""
		},
		/**验证表单*/
		rules:{
			 roleName: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
		  roleDesc: [
            { required: true, message: '请输入用户描述', trigger: 'blur' },
          ],
		},
		dialogFormVisible:false,/***模态框*/dia:false,
	}
  },
  created () { },
  mounted () { },
  methods: {
	info(val){
		this.dialogFormVisible=true
		/***清空*/
		this.ruleForm.roleName=''
		this.ruleForm.roleDesc=''
	},
	into(val){
		this.dialogFormVisible=true
		if(val){
		this.ruleForm.roleName=val.roleName
		this.ruleForm.roleDesc=val.roleDesc;
		}
	},
	/**确定*/
	que(){
		this.dialogFormVisible=false
		this.$emit('que', this.ruleForm)
	},
	/***分配 */
	ino(){
		this.dia=true
	}
  }
}
</script>
<style scoped lang='scss'>

</style>
