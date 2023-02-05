<template>
	<div>
		<el-card>
			<div class="title">
				<div class="left">
					<div class="top">
						<div>
							<img src="../../assets/第二个.png" alt="">
						</div>
						<div>
							<el-button type="danger" size="mini"> 离职</el-button>
							<p>入职时间: NaN-aN-aN 最新工资： {{ $store.state.approvals.list.departmentName }}</p>
							<p>当月基本工资 / 当月岗位工资:{{new Date($store.state.approvals.list.procApplyTime).toLocaleDateString()}}</p>
						</div>
					</div>
					<div class="bottm">
						<div>
							<h3>津贴</h3>
							<el-table :data="tableData" style="width: 70%">
								<el-table-column prop="date" label="津贴类型" width="180">
								</el-table-column>
								<el-table-column prop="name" label="补贴金额" width="180">
								</el-table-column>
								<el-table-column prop="address" label="津贴类型">
								</el-table-column>
								<el-table-column prop="address" label="补贴金额">
								</el-table-column>
							</el-table>
						</div>
						<div>
							<div>
								<h3>津贴</h3>
								<p>	企业 NaN</p>
								<p>个人 NaN</p>
							</div>
							<el-table :data="tableData" style="width: 70%">
								<el-table-column prop="date" label="缴费项目" width="180">
								</el-table-column>
								<el-table-column label="基数" width="180">
								</el-table-column>
								<el-table-column prop="address" label="企业缴纳">
								</el-table-column>
								<el-table-column prop="address" label="个人缴纳">
								</el-table-column>
							</el-table>
						</div>
						<div>
							<div class="demo-input-suffix">
							<h5>实际出勤天数（正式）：</h5>
							<el-input placeholder="0" disabled=""></el-input>
							<div class="demo-input-suffix">
								<h5>计薪天数（正式）：</h5>
								<el-input placeholder="0" disabled=""></el-input>
							</div>

</div>
						</div>
					</div>
				</div>
				<div class="right">
					<el-timeline :reverse="reverse">
						<el-timeline-item v-for="(activity, index) in $store.state.approvals.skt " :key="index" :timestamp="new Date(activity.handleTime).toLocaleDateString()
			">
							{{activity.handleOpinion}}
						</el-timeline-item>
					</el-timeline>
				</div>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data () {
		return {
			id:0,
			reverse: true,
		}
	},
	methods: {

	},
	created () {
		this.id=this.$route.params.id
	},
	mounted () {
		// this.$store.dispatch('approvals/met',this.id )
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
.left {
  width: 80%;
  .top {
    display: flex;
    padding: 10px;
  }
}
.right {
  width: 20%;
}
.title {
  display: flex;
}
</style>
