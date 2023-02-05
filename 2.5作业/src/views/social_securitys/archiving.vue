<template>
	<div>
<!-- 考勤历史归档 -->
<el-card >

	<div class="box">
		<el-tabs v-model="activeName">
    <el-tab-pane label="员工历史归档" name="first">该年份无归档报表</el-tab-pane>
  </el-tabs>
	<el-date-picker type="date" placeholder="2023"  style="width: 20%;"></el-date-picker>
	</div>
</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
			activeName: 'first'
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
	justify-content: space-between;
	align-items: center;
}
</style>
