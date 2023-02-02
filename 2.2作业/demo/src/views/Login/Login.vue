<template>
	<div class="title">
		<h1>i H R M 后台登录系统</h1>
		<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
			<el-form-item prop="mobile">
				<el-input v-model="ruleForm.mobile" prefix-icon="el-icon-s-custom"></el-input>
			</el-form-item>
			<el-form-item prop="password">
				<el-input v-model="ruleForm.password" show-password prefix-icon="el-icon-lock"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')" class="btn1">登录</el-button>
			</el-form-item>
			<p>还没有账号？立即注册</p>
		</el-form>
	</div>
</template>

<script>
import {Login} from '../../api/login'
import {setToken} from '../../untils/cookie'
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
            { required: true, message: '用户名不能小于6位', trigger: 'blur' },
            { min: 6,  message: '用户名不能小于6位', trigger: 'blur' }
          ],
					password: [
            { required: true, message: '密码不能小于6位', trigger: 'blur' },
            { min: 6, message: '密码不能小于6位', trigger: 'blur' }
          ],
				}
		}
	},
	methods: {
		submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

						Login(this.ruleForm).then(res=>{
							if(res.data.code==10000){
								/**提示 */
								setToken(res.data.data)
								this.$message.success('登录成功')
								/**跳转首页 */
								this.$router.push('/dashboard')
							}
							else{
								this.$message.error('登录失败')
							}
						})

						// this.$router.push('/dashboard')

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
.title {
  background: 40%, 80%, url('../../assets/背景.jpg');
  width: 100vw;
  height: 100vh;
  h1 {
    text-align: center;
    line-height: 270px;
    color: #ffffff;
    font-weight: 400;
  }
  .demo-ruleForm {
    width: 500px;
    margin-left: 450px;
    margin-top: -80px;
    text-align: center;
    color: #ffffff;
    .btn1 {
      width: 400px;
    }
    p {
      margin: 10px 0;
    }
  }
}
a {
  color: #fff;
  display: block;
  width: 80px;
  height: 50px;
  line-height: 50px;
  background-color: #e6a23c;
  margin-left: 250px;
  border-radius: 12px;
}
</style>
