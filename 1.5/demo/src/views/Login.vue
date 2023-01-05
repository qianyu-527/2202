<template>
  <div class="title">
    <h1>i H R M 后台登录系统</h1>
		<el-form :model="form" label-width="120px" class="demo-ruleForm">
    <el-form-item >
      <el-input v-model="form.username" :prefix-icon="ElementPlusIconsVue.Avatar" />
    </el-form-item>
		<el-form-item >
      <el-input v-model="form.password" :prefix-icon="ElementPlusIconsVue.Briefcase"   show-password />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit" >登录</el-button>
      <p>还没有账号？立即注册</p>
    </el-form-item>
  </el-form>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import {useRouter} from 'vue-router'
const form = reactive({

	username: '13800000002',
  password: '123456',
})
const router = useRouter();
const onSubmit = () => {
  console.log('submit!')
	console.log(form);

	/**跳转 */
	router.push('/about')
}
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
