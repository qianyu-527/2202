<template>
	<div>
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="权限描述">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="开启" prop="delivery">
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
</el-form>
</el-dialog>
 </div>
</template>

<script>
export default {
	props:['dialogFormVisible','title'],
	data () {
		return {
			ruleForm: {
          name: '',
          delivery: false,
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
        }


		}
	},
	methods: {

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
</style>


