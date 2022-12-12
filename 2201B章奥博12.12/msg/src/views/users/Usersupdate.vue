<template>
	<div>
		<!-- 添加或者修改模态框 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="ruleForm.username" :disabled="flag != -1"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password" v-show="flag==-1">
					<el-input v-model="ruleForm.password"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="mobile">
					<el-input v-model="ruleForm.mobile"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 权限 -->
		<el-dialog title="分配角色" :visible.sync="login">
			<el-form :model="form">
				<el-form-item label="当前的用户:">
					<p>{{form.username}}</p>
				</el-form-item>
				<el-form-item label="当前的角色:">
					<p>{{form.role_name}}</p>
				</el-form-item>
				<el-form-item label="分配新角色：">
					<el-select v-model="form.region" placeholder="请选择">
						<el-option :label="item.roleName" :value="item.id" v-for="item in arrs" :key="item.id"></el-option>
					</el-select>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="login = false">取 消</el-button>
				<el-button type="primary" @click="ok">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
props:['title','flag'],
  data () {
	return {
		/***权限*/
			form:{username:"",role_name:"",region:-1,id:0},//权限
		/**表单**/
		 ruleForm: {
          username: '',password:"",email:"",mobile:""
        },

		/***表单验证*/
		  rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
		  password: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
		  mobile: [
					{ required: true, message: '请输入手机号', trigger: 'blur' },
					{
						pattern: /^1[3456789]\d{9}$/,
						message: '请输入正确手机号',
						trigger: 'blur',
					},
				],
			email: [
					{ required: true, message: '请输入邮箱', trigger: 'blur' },
					{
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,message: '请输入正确邮箱',trigger: 'blur',},
				],
        },
		dialogFormVisible:false,login:false,/***模态框*/
	}
  },
  created () { },
  mounted () { },
  methods: {
	/***确定*/
	que(){
		this.dialogFormVisible=false
		this.$emit('que', this.ruleForm)
	},
	info(){
		this.dialogFormVisible=true
		//清空
		this.ruleForm.username=''
		this.ruleForm.password=''
		this.ruleForm.mobile=''
		this.ruleForm.email=''
	},
	/***分配*/
	new(val){
		this.login=true
	}
  }
}
</script>
<style scoped lang='scss'>
</style>
