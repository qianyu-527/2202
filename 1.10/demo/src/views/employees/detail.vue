<template>
	<div>
		<el-tabs v-model="activeName" @tab-click="handleClick" class="acitve">
    <el-tab-pane label="登录账号设置" name="first">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="80px" class="demo-ruleForm">
  <el-form-item label="姓名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
	<el-form-item label="密码" prop="password">
    <el-input v-model="ruleForm.password"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">更新</el-button>
  </el-form-item>
</el-form>
		</el-tab-pane>


    <el-tab-pane label="个人详情" name="second">
			
		</el-tab-pane>


    <el-tab-pane label="岗位信息" name="third">
			<div class="title">
					<el-form ref="form" :model="form" label-width="80px">
						<p>基础信息</p>
  <el-form-item label="岗位">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
  <el-form-item label="转正状态">
    <el-select v-model="form.region" placeholder="请选择" disabled>
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="职级">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
	<el-form-item label="转正评价">
    <el-input type="textarea" v-model="form.desc" placeholder="1-300位字符"></el-input>
  </el-form-item>
  <el-form-item label="汇报对象">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="随机" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="HRBP">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="随机" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="调整司龄(天):" label-width="120px">
    <el-input v-model="form.name"></el-input>
  </el-form-item>
	<el-form-item label="首次参加工作时间" label-width="140px">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
	<el-form-item label="调整工龄">
    <el-input v-model="form.name" placeholder="0.00年" disabled=""></el-input>
  </el-form-item>
	<p>合同信息</p>
	<el-form-item label="首次合同开始时间:" label-width="140px">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
	<el-form-item label="首次合同结束时间" label-width="140px">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
	<el-form-item label="现合同开始时间" label-width="140px">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
	<el-form-item label="现合同结束时间" label-width="140px">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>
	<el-form-item label="合同期限">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="6月" value="shanghai"></el-option>
      <el-option label="12月" value="shanghai"></el-option>
      <el-option label="24月" value="shanghai"></el-option>
      <el-option label="36月" value="shanghai"></el-option>
      <el-option label="其他" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="续签次数">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="0次" value="shanghai"></el-option>
      <el-option label="1次" value="shanghai"></el-option>
      <el-option label="2此" value="shanghai"></el-option>
      <el-option label="3次" value="shanghai"></el-option>
      <el-option label="4次或以上" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<p>招聘信息</p>
	<el-form-item label="其他招聘渠道">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="0次" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="招聘渠道">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="0次" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="社招/校招">
    <el-select v-model="form.region" placeholder="请选择" >
      <el-option label="设招" value="shanghai"></el-option>
      <el-option label="校招" value="shanghai"></el-option>
    </el-select>
  </el-form-item>
	<el-form-item label="推荐企业/人" label-width="100px">
    <el-input v-model="form.name" placeholder="请输入" ></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="onSubmit">保存更新</el-button>
    <el-button @click="$router.push('./employees')">返回</el-button>
  </el-form-item>
</el-form>
			</div>
		</el-tab-pane>
  </el-tabs>
 </div>
</template>

<script>
export default {
	data () {
		return {
			ruleForm: {
          username: '',
					password:""
        },
        rules: {
          password: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { min: 6, max: 9, message: '密码长度6-9位', trigger: 'blur' }
          ],
          username: [
            { required: true, message: '姓名不能为空', trigger: 'change' }
          ],
				},

			form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },

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

.acitve{
	width: 100%;
	background-color: #fff;
}

.demo-ruleForm{
	width: 400px;
}

.title{
	padding: 10px;
	width: 400px;
}
</style>
