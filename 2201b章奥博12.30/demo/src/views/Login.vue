<template>
    <div class='title'>
        <h1>i H R M 后台登录系统</h1>
        <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm" :size="formSize" status-icon>
            <el-form-item prop="name">
                <el-input v-model="ruleForm.name" />
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="ruleForm.password" show-password />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm(ruleFormRef)">登录 </el-button>
                <p>还没有账号？立即注册</p>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue';
import type { FormInstance, FormRules } from 'element-plus';
export default {
	setup() {
		const formSize = ref('default');
		const ruleFormRef = ref<FormInstance>();
		const ruleForm = reactive({
			name: '13800000002',
			password: '123456',
		});
		const rules = reactive<FormRules>({
			name: [
				{
					required: true,
					message: 'Please input Activity name',
					trigger: 'blur',
				},
				{ min: 6, message: '用户名不能小于6位', trigger: 'blur' },
			],
			password: [
				{
					required: true,
					message: 'Please input Activity name',
					trigger: 'blur',
				},
				{ min: 6, message: '密码不能小于6位', trigger: 'blur' },
			],
		});
		const submitForm = async (formEl: FormInstance | undefined) => {
			if (!formEl) return;
			await formEl.validate((valid, fields) => {
				if (valid) {
					console.log('submit!');
				} else {
					console.log('error submit!', fields);
				}
			});
		};
		const resetForm = (formEl: FormInstance | undefined) => {
			if (!formEl) return;
			formEl.resetFields();
		};
		const options = Array.from({ length: 10000 }).map((_, idx) => ({
			value: `${idx + 1}`,
			label: `${idx + 1}`,
		}));
		return {
			formSize,
			ruleFormRef,
			ruleForm,
			rules,
			submitForm,
			resetForm,
			options,
		};
	},
};
</script>

<style lang='scss' scoped>
.title {
	width: 100vw;
	height: 100vh;
	background: 100%, 100%, url('../assets/login.c75bab6.jpg');
	h1 {
		color: aliceblue;
		text-align: center;
	}
	.demo-ruleForm {
		margin: 40px 450px;
		border: 1px solid pink;
		padding: 10px 0px;
	}
}
</style>
