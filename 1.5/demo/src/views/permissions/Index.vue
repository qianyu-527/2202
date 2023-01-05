<template>
		<div class='title'>
			<el-card>
				<el-button type="primary">添加菜单</el-button>
			<el-table :data="data" >
    <el-table-column prop="name" label="菜单名称" />
    <el-table-column prop="code" label="权限标识" />
    <el-table-column prop="description" label="描述" />
		<el-table-column label="操作">
      <template #default="scope" >
				<div class="stk">
					<p @click="add(scope.$index, scope.row)" >添加权限点</p>
        <p @click="xian(scope.$index, scope.row)">查看api权限</p>
        <p @click="cha(scope.$index, scope.row)">查看</p>
        <p @click="del">删除</p>
				</div>

      </template>
    </el-table-column>
  </el-table>
			</el-card>
		</div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'
const data =[{id: "1", name: "SAAS企业管理", type: 1, code: "saas-clients", description: "aaaaaaaaaa", pid: "0",},
{id: "1", name: "SAAS企业管理", type: 1, code: "saas-clients", description: "aaaaaaaaaa", pid: "0",},
{id: "1063327833876729856", name: "组织架构", type: 1, code: "departments", description: "组织架构菜单",},
{id: "1063328114689576960", name: "公司设置", type: 1, code: "settings", description: "公司设置菜单", pid: "0",},
{id: "1064104257952813056", name: "权限管理", type: 1, code: "permissions", description: "权限菜单", pid: "0",},
{id: "1146308691438043136", name: "社保", type: 1, code: "saaaaaaaaaaa", description: "社保菜单aaaaaaaaaa",},
{id: "1151424682926747648", name: "考勤", type: 1, code: "attendances", description: "考勤", pid: "0",},
{id: "1151747519034093568", name: "工资", type: 1, code: "salarys", description: "工资模块", pid: "0",},
{id: "1156085524669272064", name: "员工自助", type: 1, code: "user12345", description: "员工自助", pid: "0",},
{id: "1172702828368498688", name: "审批", type: 1, code: "approvals", description: "审批", pid: "0",}]
/**添加权限点 */
const add = (index: number, row: User) => {
  console.log(index, row)
}
/**查看api权限 */
const xian = (index: number, row: User) => {
  console.log(index, row)
}
/**查看 */
const cha = (index: number, row: User) => {
  console.log(index, row)
}
/**删除 */
const del= ()=> {
	ElNotification({
    title: '提示',
    message: '演示系统，不支持此操作',
    type: 'warning',
  })
}
</script>

<style lang='scss' scoped>

.stk{
	display: flex;
	padding: 10px;

}
.title{
	font-size: 12px;
}
</style>

