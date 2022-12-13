<template>
  <div class="title">
    <div class="box">
			   <img src="../../public/51e236b53255526929622ac8937f60d6.jpeg">
				 <div class="te">
					 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item  prop="username">
    <el-input v-model="ruleForm.username" prefix-icon="el-icon-user-solid"></el-input>
  </el-form-item>
  <el-form-item  prop="password">
    <el-input v-model="ruleForm.password" prefix-icon="el-icon-lock" show-password></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
				 </div>
		</div>

  </div>
</template>

<script>
import {setToken  } from "../../untils/auth.js";
import {status} from '../../constStatus/initStatus.js'
export default {
  name: '',
  components: {},
  data() {
    return {
			ruleForm:{
				username:"",//用户名称
				password:"",//用户密码
			},
			 rules: {
          username: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
					 password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
			 }
		}
  },
  created() {},
  mounted() {},
  methods: {
		// 提交
		  submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
						// 完整写法
						// this.$http({methods:"post",data:this.ruleForm,url:"/api/login"}).then(res=>{
						// 	// 提示
						// 		this.$message.success("登录成功")
						// 		//跳转页面
						// 		this.$router.push('/index')
						// })
						/**简写形式*/
						this.$http.send("/login",this.ruleForm).then(res=>{
						  if(res.data.meta.status===status.SUCCESS){
								/**存入token 和提示*/
								const {token,username}=res.data.data
								/**存token*/
								setToken(token)
								/**给提示*/
								this.$notify({
									title:"登录成功",
									message:"欢迎光临["+username+"]",
									type:"success",
									duration:2000
								})
								/**跳转页面*/
								this.$router.replace('/index')

							}else{
								/**提示错误信息*/
							this.$notify({
									title:"登录失败",
									message:res.data.meta.message,
									type:"error",
									duration:2000
								})
							}
						})
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
			// 重置
			 resetForm(formName) {
        this.ruleForm.username='admin'
        this.ruleForm.password='123456'
      }
	}
}
</script>
<style scoped lang="scss">
.title {
  width: 100vw;
	height: 100vh;
	background-color: aqua;
	background: url('https://seopic.699pic.com/photo/40085/6613.jpg_wh1200.jpg');
		background-size: 100% 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
}
.box{
	width: 400px;
	height: 250px;
	background-color: aliceblue;
	display: flex;
	justify-content: center;
		align-items: center;
		position: relative;
		img{
		position: absolute;
			top: 10px;
			left: 200px;
			margin-bottom: 40px;
			width: 60px;
			height: 60px;
			border: 1px solid #000;
			border-radius: 50%;
			img{
				width: 70%;
				height: 70%;
			}
		}
		.te{
			margin-top: 100px;
		}
}
</style>
