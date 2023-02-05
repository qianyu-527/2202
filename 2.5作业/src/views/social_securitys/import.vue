<template>
	<div>
		<!-- 考勤导入 -->
		<el-card>
			<div class="box">
				<div class="em">	<em>点击上传</em></div>
				<el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处</div>
</el-upload>

			</div>
		</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {

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
.box{
	display: flex;
	.em{
		width: 400px;
		height: 170px;
		text-align: center;
		line-height: 170px;
		color: aqua;
		border: 1px dotted blue;
		margin: 0 5px;
	}
}
</style>
