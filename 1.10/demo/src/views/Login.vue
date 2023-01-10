<template>
	<div class="title">
		<h1>i H R M 后台登录系统</h1>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item  prop="mobile">
    <el-input v-model="ruleForm.mobile" prefix-icon="el-icon-s-custom"></el-input>
  </el-form-item>
	<el-form-item  prop="password">
    <el-input v-model="ruleForm.password" show-password prefix-icon="el-icon-lock"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" class="btn1">登录</el-button>
  </el-form-item>
	<p>账号:13800000002 密码:123456</p>
	<a href="https://shuiruohanyu.gitee.io/yyds/document/">学习文档</a>
</el-form>
 </div>
</template>

<script>
import {Login} from '../api/Login'
import {setToken} from '../untils/cookie'
export default {
	data () {
		return {
			/**表单 */
			ruleForm: {
          mobile: '13800000002',
					password:"123456"
        },
				/**验证 */
				rules: {
          mobile: [
            { required: true, message: '手机号不能为空', trigger: 'blur' },
            { min: 11, max: 11, message: '手机号格式不正确', trigger: 'blur' }
          ],
					password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 16, message: '密码的长度应该为6-16位之间', trigger: 'blur' }
          ],
				}
		}
	},
	methods: {
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						console.log(this.ruleForm)
						Login(this.ruleForm).then(res=>{
							if(res.data.code==10000){
							/**提示 */
							this.$message.success('登录成功')
								setToken(res.data.data)
						/**跳转首页 */
						this.$router.push('/dashboard')
							}else{
								this.$message.error('登录失败')
							}
						})

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
	},
	created () {

	},
	mounted () {

	},
	components: {

	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.title{
	background:40%,80%, url('../assets/login.c75bab6d.jpg');
	width: 100vw;height: 100vh;
	h1{
		text-align: center;
		line-height: 270px;
		color: #ffffff;
		font-weight: 400;
	}
	.demo-ruleForm{
		width: 500px;
		margin-left: 450px;
		margin-top: -80px;
		text-align: center;
		color: #ffffff;
		.btn1{
			width: 400px;
		}
		p{
			margin: 10px 0;
		}
	}
}
a{
	color: #fff;
	display: block;
	width: 80px;height: 50px;line-height: 50px;background-color: #e6a23c;
	margin-left: 250px; border-radius: 12px;
}
</style>
