<template>
	<div>
		<el-card>
			<!-- 社保报表 -->
			<h4 style="text-align: center;">202303月人事报表</h4>
			<el-tabs v-model="activeName" >
    <el-tab-pane label="考勤统计" name="first">
			<el-button type="primary" style="float:right;" size="mini">导出</el-button>
			<el-table :data="$store.state.attendances.list" border  >
				<el-table-column prop="name" label="姓名" >
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" >
				</el-table-column>
				<el-table-column prop="mobile" label="手机号" >
				</el-table-column>
				<el-table-column prop="department" label="部门" >
				</el-table-column>
				<el-table-column label="事假" >0</el-table-column>
				<el-table-column label="调休" >0</el-table-column>
				<el-table-column label="正常" >0</el-table-column>
				<el-table-column label="迟到次数" >0</el-table-column>
				<el-table-column label="早退次数" >0</el-table-column>
				<el-table-column label="日均时长" ></el-table-column>
				<el-table-column label="旷工天数" >0</el-table-column>
				<el-table-column label="是否全勤" ></el-table-column>
				<el-table-column label="实际出勤天数" ></el-table-column>
				<el-table-column label="应出勤工作日" ></el-table-column>
				<el-table-column label="计薪标准" ></el-table-column>
				<el-table-column label="计薪天数" ></el-table-column>
			</el-table>
				<!-- 分页 -->
				<el-pagination
      @current-change="handleCurrentChange"
			:page-size="pageSize"
        :page-count="pageCount"
      :page-sizes="[10, 20, 30, 50]"
      layout=" prev, pager, next"
			:total="total">
    </el-pagination>
		</el-tab-pane>
  </el-tabs>
	 <div class="box">
		<el-button type="primary" size="mini" @click="sml">归档202303报表</el-button>
		<el-button type="primary" size="mini" @click=" add">新建报表</el-button>
	 </div>
		</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
			activeName: 'first',
			total: 0,
      pageSize: 10,
      pageCount: 1,
		}
	},
	methods: {
		sml(){
			this.$confirm('该月报表已归档过，重新归档将覆盖上一份报表，您确认要再次归档吗？')
          .then(_ => {
           this.$message.success('归档成功')
          })
          .catch(_ => {});
		},
		add(){
			this.$confirm('新建报表会使得202303月报表不能修改，且您上一次归档之后的修改将不会被保存。您确定现在就开始做下月考勤吗？')
          .then(_ => {
           this.$message.success('新建报表成功')
					 this.$router.push('./attendances')
          })
          .catch(_ => {});
		},
	},
	created () {

	},
	mounted () {
		this.$store.dispatch('attendances/met', )
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
	text-align: center;
}
</style>
