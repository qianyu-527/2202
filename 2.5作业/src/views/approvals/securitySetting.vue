<template>
	<div>
		<el-card>
		<div class="titile">
			<div class="box">
				<p>请假  |</p>
				<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
 <i class="el-icon-setting" @click="add"></i>
			</div>
			<div class="box">
				<p>加班 |</p>
				<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
 <i class="el-icon-setting" @click="add"></i>
			</div>
			<div class="box">
				<p>离职 |</p>
				<el-switch
  v-model="value"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
 <i class="el-icon-setting" @click="add"></i>
			</div>
		</div>

		</el-card>

		<!-- 模态框 -->
		<el-dialog
  title="提示"
  :visible.sync="centerDialogVisible"
  width="30%"
  left
	>
	<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
</el-upload>
  <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">确 定</el-button>
  </span>
</el-dialog>

 </div>
</template>

<script>
export default {
	data () {
		return {
			value: true,
			centerDialogVisible: false
		}
	},
	methods: {
		add(){
			this.centerDialogVisible=true
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
.box{
	margin: 0 10px;
	width: 140px;
	height: 20px;
	border: 1px solid #ccc;
	padding: 10px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	i{
		margin-top: -20px;
	}
}
.titile{
	display: flex;

}
</style>
