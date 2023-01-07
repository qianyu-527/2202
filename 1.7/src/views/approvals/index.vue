<template>
	<div class=''>
		<div class="box">
			<div class="one">
				<el-icon style="margin: 3px 0px 6px  0px;color: #409eff">
							<InfoFilled />
						</el-icon>
				    <p>当前审批中 0 本月审批通过 1 本月审批驳回 0</p>
			</div>
			<el-button type="primary" size="mini">流程设置</el-button>
		</div>
		<div class="title">
			<el-table :data="data">
				<el-table-column type="selection" width="55" />
				<el-table-column type="index" label="序号" width="180" />
				<el-table-column prop="processName" label="审判类型" />
				<el-table-column prop="username" label="申请人" />
				<el-table-column prop="procCurrNodeUserName" label="当前审批人" />
				<el-table-column prop="procApplyTime" label="审批发起时间" />
				<el-table-column prop="processState" label="审批状态" >
					<template #default="scope">
					<p v-if="scope.row.processState==1?'scope.row.processState':''">审批中</p>
					<p type="success" v-else-if="scope.row.processState==2?'scope.row.processState':''">审批通过</p>
					<p type="success" v-else-if="scope.row.processState==3?'scope.row.processState':''">审批不通过</p>
					<p type="info" v-else>撤销</p>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template #default="scope">
						<p size="small" @click="handedit(scope.$index, scope.row)">查看</p>
					</template>
				</el-table-column>
			</el-table>
			<el-pagination
      :page-sizes="[10,20,30,50]"
      :disabled="disabled"
      background
      layout=" sizes, prev, pager, next, jumper"
      :total="10"
    />
		</div>
	</div>
</template>

<script lang="ts" setup>
/**页码 */
import { ref } from 'vue'
const disabled = ref(false)
const handedit = (index: number, row: User) => {
  console.log(index, row)
}
const data=[
{departmentId: "1175311466846683136",departmentName: "市场部",procApplyTime: 1569236187000,procCurrNodeUserId: "107163276022281011210742388013307043841074238801402007552",procCurrNodeUserName: "文吉星 巴思慧 ",procData: "{\"duration\":\"1\",\"reason\":\"个人原因\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-16 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-17 00:00:00\",\"userId\":\"1066370498633486336\"}",processId: "1175967133311934464",processKey: "process_leave",processName: "请假",processState: "2",timeOfEntry: 1541318400000,userId: "1066370498633486336",username: "孙财",},
{departmentId: "1175311466846683136",departmentName: "市场部",procApplyTime: 1569236417000,procCurrNodeUserId: "10753831331064258561075383135371350016",procCurrNodeUserName: "乔海 董昊空",procData: "{\"duration\":\"5\",\"reason\":\"没有原因\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-15 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-19 00:00:00\",\"userId\":\"1066370498633486336\"}",processId: "1175968095611101184",processKey: "process_leave",processName: "请假",processState: "2",timeOfEntry: 1541318400000,userId: "1066370498633486336",username: "孙财",},
{departmentId: "1175311466846683136",departmentName: "市场部",procApplyTime: 1569236544000,procCurrNodeUserId: "1063705989926227968",procCurrNodeUserName: "董昊空",procData: "{\"duration\":\"1\",\"reason\":\"xxxxx\",\"holidayType\":\"1\",\"processName\":\"请假\",\"processKey\":\"process_leave\",\"startTime\":\"2019-09-09 00:00:00\",\"applyUnit\":\"按天\",\"endTime\":\"2019-09-10 00:00:00\",\"userId\":\"1066370498633486336\"}",processId: "1175968628937826304",processKey: "process_leave",processName: "请假",processState: "4",timeOfEntry: 1541318400000,userId: "1066370498633486336",username: "孙财",},
{departmentId: "1175311466846683136",departmentName: "市场部",procApplyTime: 1569238151000,procCurrNodeUserId: "107163276022281011210742388013307043841074238801402007552",procCurrNodeUserName: "孙财 ",procData: "{\"start_time\":\"2019-09-01 00:00:00\",\"reason\":\"随便填\",\"processName\":\"加班\",\"end_time\":\"2019-09-02 00:00:00\",\"processKey\":\"process_overtime\",\"userId\":\"1066370498633486336\"}",processId: "1175975371407335424",processKey: "process_overtime",processName: "加班",processState: "2",timeOfEntry: 1541318400000,userId: "1066370498633486336",username: "孙财"},
{departmentId: "1175310929766055936",departmentName: "总裁办",procApplyTime: 1583409279000,procCurrNodeUserId: "10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776",procCurrNodeUserName: "管理员 乔海 董昊空 吕勇锐 袁永安 ",procData: "{\"start_time\":\"2020-03-17 00:00:00\",\"reason\":\"java开发\",\"processName\":\"离职\",\"end_time\":\"2020-03-29 00:00:00\",\"processKey\":\"process_dimission\",\"userId\":\"1063705989926227968\"}",processId: "1235413390924881920",processKey: "process_dimission",processName: "离职",processState: "1",timeOfEntry: 1541145600000,userId: "1063705989926227968",username: "管理员"},
{departmentId: "1175310929766055936",departmentName: "总裁办",procApplyTime: 1583409371000,procCurrNodeUserId: "10637059899262279681075383133106425856107538313537135001612353967244972687361235396819959627776",procCurrNodeUserName: "管理员 乔海 董昊空 吕勇锐 袁永安 ",procData: "{\"reason\":\"个人原因\",\"processName\":\"离职\",\"exceptTime\":\"2020-03-25 00:00:00\",\"processKey\":\"process_dimission\",\"userId\":\"1063705989926227968\"}",processId: "1235413774988910592",processKey: "process_dimission",processName: "离职",processState: "1",timeOfEntry: 1541145600000,userId: "1063705989926227968",username: "管理员"},
{departmentId: "1175310929766055936",departmentName: "总裁办",procApplyTime: 1583409412000,procCurrNodeUserId: "null",procCurrNodeUserName: "孙财 ",procData: "{\"start_time\":\"2020-03-01 00:00:00\",\"reason\":\"java工作计划\",\"processName\":\"加班\",\"end_time\":\"2020-03-25 00:00:00\",\"processKey\":\"process_overtime\",\"userId\":\"1063705989926227968\"}",processId: "1235413946837934080",processKey: "process_overtime",processName: "加班",processState: "1",timeOfEntry: 1541145600000,userId: "1063705989926227968",username: "管理员"}
]
</script>

<style lang='scss' scoped>
.box {
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  align-items: center;
  padding: 10px;
  height: 30px;
  .el-alert {
    width: 330px;
  }
}
.title {
  margin: 20px 0px;
}
.one{
	background-color: #e6f7ff;
	padding: 10px;
	font-size: 10px;
	display: flex;
}
</style>
