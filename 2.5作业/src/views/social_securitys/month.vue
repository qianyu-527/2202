<template>
	<div>
		<el-card>
			<!-- 考勤的按钮报表 -->
			<el-tabs v-model="activeName">
				<el-tab-pane label="社保报表" name="first">
					<div class="bx">
						<div>
							<div style="display: flex;justify-content: center;align-items: center;">
				<div class="kk" style="display: flex;justify-content: center;align-items: center;">
				<div style="background-color: #cfeffe;width: 10px;height: 10px;"></div>已离职
			</div>
			<div class="kk" style="display: flex;justify-content: center;align-items: center;">
				<div style="background-color: #a8f8bb;width: 10px;height: 10px;margin: 0 10px;"></div>再入职
			</div>
			<div class="kk" style="display: flex;justify-content: center;align-items: center;">
				<div style="background-color: #fedbd7;width: 10px;height: 10px;margin: 0 10px;"></div>公司合计
			</div>
			<div class="kk" style="display: flex;justify-content: center;align-items: center;">
				<div style="background-color: #ffe8c9;width: 10px;height: 10px;margin: 0 10px;"></div>一级部门
			</div>
			<div class="kk" style="display: flex;justify-content: center;align-items: center;">
				<div style="background-color: #fdfcd5;width: 10px;height: 10px;margin: 0 10px;"></div>二级部门
			</div>
			</div>
						</div>
						<div>
							<el-button type="primary" size="mini">导出</el-button>
						</div>
					</div>
					<el-table :data="$store.state.hrsaas.skt" border>
						<el-table-column type="index" label="序号" width="50px"></el-table-column>
						<el-table-column prop="username" label="姓名"></el-table-column>
						<el-table-column prop="timeOfEntry" label="入职时间"></el-table-column>
						<el-table-column prop="mobile" label="手机号"></el-table-column>
						<el-table-column prop="idNumber" label="身份证号码"></el-table-column>
						<el-table-column prop="theHighestDegreeOfEducation" label="学历"></el-table-column>
						<el-table-column prop="" label="开户行"></el-table-column>
						<el-table-column prop="firstLevelDepartment" label="一级部门"></el-table-column>
						<el-table-column prop="" label="二级部门"></el-table-column>
						<el-table-column prop="" label="工作城市"></el-table-column>
						<el-table-column prop="socialSecurityComputerNumber" label="社保电脑号"></el-table-column>
						<el-table-column prop="" label="公积金账号"></el-table-column>
						<el-table-column prop="" label="离职时间"></el-table-column>
						<el-table-column prop="" label="户籍类型"></el-table-column>
						<el-table-column prop="participatingInTheCity" label="参保城市"></el-table-column>
						<el-table-column prop="socialSecurityMonth" label="社保月份"></el-table-column>
						<el-table-column prop="accumulationFundEnterpriseBase" label="社保基数"></el-table-column>
						<el-table-column prop="socialSecurity" label="社保合计"></el-table-column>
						<el-table-column prop="socialSecurityEnterprise" label="社保企业"></el-table-column>
						<el-table-column prop="socialSecurityIndividual" label="社保个人"></el-table-column>
						<el-table-column prop="providentFundCity" label="公积金城市"></el-table-column>
						<el-table-column prop="accumulationFundEnterpriseBase" label="公积金月份"></el-table-column>
						<el-table-column prop="providentFundBase" label="公积金基数"></el-table-column>
						<el-table-column prop="providentFundBase" label="公积金企业基数"></el-table-column>
						<el-table-column prop="personalRatioOfProvidentFund" label="公积金企业比例"></el-table-column>
						<el-table-column prop="providentFundBase" label="公积金个人基数"></el-table-column>
						<el-table-column prop="proportionOfProvidentFundEnterprises" label="公积金个人比例"></el-table-column>
						<el-table-column prop="totalProvidentFund" label="公积金合计"></el-table-column>
						<el-table-column prop="providentFundEnterprises" label="公积金企业"></el-table-column>
						<el-table-column prop="providentFundIndividual" label="公积金个人"></el-table-column>
						<el-table-column prop="" label="养老企业基数"></el-table-column>
						<el-table-column prop="" label="养老企业比例"></el-table-column>
						<el-table-column prop="" label="养老企业"></el-table-column>
						<el-table-column prop="" label="养老个人基数"></el-table-column>
						<el-table-column prop="" label="养老个人比例"></el-table-column>
						<el-table-column prop="" label="养老个人"></el-table-column>
						<el-table-column prop="" label="失业企业基数"></el-table-column>
						<el-table-column prop="" label="失业企业比例"></el-table-column>
						<el-table-column prop="" label="失业企业"></el-table-column>
						<el-table-column prop="" label="失业个人基数"></el-table-column>
						<el-table-column prop="" label="失业个人比例"></el-table-column>
						<el-table-column prop="" label="失业个人"></el-table-column>
						<el-table-column prop="" label="医疗企业基数"></el-table-column>
						<el-table-column prop="" label="医疗企业比例"></el-table-column>
						<el-table-column prop="" label="医疗企业"></el-table-column>
						<el-table-column prop="" label="医疗个人基数"></el-table-column>
						<el-table-column prop="" label="医疗个人比例"></el-table-column>
						<el-table-column prop="" label="医疗个人"></el-table-column>
						<el-table-column prop="" label="工伤企业基数"></el-table-column>
						<el-table-column prop="" label="工伤企业比例"></el-table-column>
						<el-table-column prop="" label="工伤企业"></el-table-column>
						<el-table-column prop="" label="生育企业基数"></el-table-column>
						<el-table-column prop="" label="生育企业"></el-table-column>
						<el-table-column prop="" label="大病企业基数"></el-table-column>
						<el-table-column prop="" label="大病个人比例"></el-table-column>
						<el-table-column prop="" label="大病个人"></el-table-column>
						<el-table-column prop="providentFundNotes" label="公积金备注"></el-table-column>
						<el-table-column prop="socialSecurityNotes" label="社保备注"></el-table-column>
					</el-table>
				</el-tab-pane>
			</el-tabs>
			<div class="box">
				<el-button type="primary" size="mini" @click="sml">归档202303报表</el-button>
				<el-button type="primary" size="mini" @click=" add">新建报表</el-button>
				<el-button size="mini" @click=" $router.push('./social_securitys')">返回</el-button>
			</div>
		</el-card>
	</div>
</template>

<script>
export default {
	data () {
		return {
			activeName: 'first',
		}
	},
	methods: {
		sml(){
			this.$confirm('您确定要归档202001报表？报表归档将覆盖上一次归档记录，无法恢复。？')
          .then(_ => {
           this.$message.success('确定!')
          })
          .catch(_ => {});
		},
		add(){
			this.$confirm('您将创建 《 2020年03月 》 报表')
          .then(_ => {
           this.$message.success('操作成功')
          })
          .catch(_ => {});
		},
	},
	created () {

	},
	mounted () {
		/**表格数据 */
		this.$store.dispatch('hrsaas/set', )
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
  margin-left: 240px;
}
.bx {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 30px;
}
</style>
