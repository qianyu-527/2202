<template>
  <div class="title">
    <h1>i H R M 后台登录系统</h1>
		<el-form :model="form" label-width="120px" class="demo-ruleForm" :rules="rules" ref="ruleFormRef">
    <el-form-item  prop="username">
      <el-input v-model="form.username" :prefix-icon="ElementPlusIconsVue.Avatar" />
    </el-form-item>
		<el-form-item  prop="password">
      <el-input v-model="form.password" :prefix-icon="ElementPlusIconsVue.Briefcase"   show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit(ruleFormRef)" >登录</el-button>
      <p>还没有账号？立即注册</p>
    </el-form-item>
  </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive ,ref} from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
import { setToken } from '../../untils/cooks';
import { Login } from '../../untils/Api/index';
import * as Ts from '../api/Login';
import { ElNotification } from 'element-plus';
const form = reactive<Ts.LoginFrom>({
	username: '13800000002',
  password: '123456',
})
const router = useRouter();
const ruleFormRef = ref<FormInstance>();
const rules = reactive<FormRules>({
  username: [
    { required: true, message: '用户名不能为空', trigger: 'blur' },
    { min: 6, message: '用户名不能小于6位', trigger: 'blur' },
  ],
	password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    { min: 6, message: '密码不能小于6位', trigger: 'blur' },
  ],

})

const onSubmit = async (formEl: FormInstance | undefined) => {
				if (!formEl) return;
				await formEl.validate((valid, fields) => {
					if (valid) {
						/**登录请求 */
						Login({
							mobile: form.username,
							password: form.password,
						}).then((res) => {
							console.log(res);
							/**存token令牌 */
							setToken(res.data.data);
							if (res.status == 200) {
								ElNotification({
									title: '登录成功',
									message: res.data.message,
								});
								/**跳转 */
								router.push('/dashboard');
							}
						});
					} else {
						console.log('error submit!', fields);
					}
				});
			};
</script>
<style lang="scss" scoped>
.title {
  width: 100vw;
  height: 100vh;
  background: 100%, 100%, url('../assets/login.c75bab6.jpg');
  h1 {
    color: aliceblue;
    text-align: center;
		line-height: 180px;
		padding-left: 140px;
  }
  .demo-ruleForm {
    margin: 1px 500px;
		.el-button{
	width: 300px;
	}
  }
	p{
		text-align: center;
		color: #fff;
		padding: 10px;
	}
}
</style>
