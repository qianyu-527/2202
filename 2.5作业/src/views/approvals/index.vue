<template>
	<div>
		<div class="box">
			<div class="one">
				<p>当前审批中 0 本月审批通过 1 本月审批驳回 0</p>
			</div>
			<div>
				<el-button type="primary" size="mini" @click="add()">流程设置</el-button>
			</div>
		</div>
		<div class="title">
			<el-table ref="multipleTable" :data="$store.state.approvals.car" tooltip-effect="dark">
				<el-table-column type="selection">
				</el-table-column>
				<el-table-column type="index" label="序号">
				</el-table-column>
				<el-table-column prop="processName" label="审批类型" sortable>
				</el-table-column>
				<el-table-column prop="username" label="申请人" sortable>
				</el-table-column>
				<el-table-column prop="procCurrNodeUserName" label="当前审批人" sortable>
				</el-table-column>
				<el-table-column label="审批发起时间" sortable>
					<template slot-scope="scope"><p>{{new Date( scope.row.procApplyTime).toLocaleDateString()}}</p></template>
				</el-table-column>
				<el-table-column prop="processState" label="审批状态" sortable>
					<template slot-scope="scope">
						<p v-if="scope.row.processState==1">审批中</p>
						<p v-if="scope.row.processState==2 ">审批通过</p>
						<!-- <p v-if="scope.row.processState==1">审批中</p> -->
						<p v-if="scope.row.processState==4">撤销</p>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<p  style="color:skyblue;" @click="head(scope.row)">查看</p>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		}
	},
	methods: {
		// 审批设置
		add(){
			this.$router.push('./securitySetting')
		},
		head(row){
			this.$router.push(`./leaveApproval/${row.processId}`)
		}
	},
	created () {

	},
	mounted () {
		/**数据 */
		this.$store.dispatch('approvals/gentlest', )
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
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  .one {
    background-color: #e6f7ff;
    padding: 10px;
    margin: 10px;
  }
}
.title{
	margin-top: 10px;
}
</style>
