<template>
		<div class=''>
			<div class="box">
				<div class="box1">
					<div class="one">
				<el-icon style="margin: 3px 0px 6px  0px;color: #409eff"><InfoFilled /></el-icon>
				   <p>有 0 条考勤审批尚未处理</p>
			</div>
			<div class="tow">
				<el-button type="primary" size="small">导入</el-button>
				<el-button type="primary" size="small">提醒</el-button>
				<el-button type="primary" size="small">设置</el-button>
				<el-button type="primary" size="small">历史归档</el-button>
				<el-button type="primary" size="small">3月份报表</el-button>

			</div>
				</div>
				<div class="box2">
					<div>
						 <h6>部门:</h6>
						 <ul>
							<li>
								<input type="checkbox">
								<span>总裁办</span>
							</li>
							<li>
								<input type="checkbox">
								<span>行政部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>人事部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>财务部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>技术部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>运营部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>市场部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>财务核酸部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>锐务管理部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>薪资管理部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>java研究部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>Python研发部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>Php研发部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>北京事业部</span>
							</li>
							<li>
								<input type="checkbox">
								<span>上海事业部</span>
							</li>
						 </ul>
					</div>
					<div>
						 <h6>考勤状态:</h6>
						 <ul>
							<li>
							 <input type="radio" name="" id="">
							<span>正常</span>
							</li>
							<li>
							 <input type="radio" name="" id="">
							<span>旷工</span>
							</li>
							<li>
							 <input type="radio" name="" id="">
							<span>事假</span>
							</li>
							<li>
							 <input type="radio" name="" id="">
							<span>调休</span>
							</li>
							<li>
							 <input type="radio" name="" id="">
							<span>迟到</span>
							</li>
							<li>
							 <input type="radio" name="" id="">
							<span>早退</span>
							</li>
						 </ul>
					</div>
				</div>
			</div>
			<div class="title">
				<el-table :data="permissionsList" >
    <el-table-column type="index" label="序号" width="100" />
    <el-table-column prop="username" label="姓名"  />
    <el-table-column prop="workNumber" label="工号" />
    <el-table-column prop="departmentName" label="部门" />
    <el-table-column prop="mobile" label="手机" />
    <el-table-column  label="3/1"><p>旷工</p></el-table-column>
    <el-table-column  label="3/2"><p>旷工</p></el-table-column>
    <el-table-column  label="3/3"><p>旷工</p></el-table-column>
    <el-table-column  label="3/4"><p>旷工</p></el-table-column>
    <el-table-column  label="3/5"><p>旷工</p></el-table-column>
    <el-table-column  label="3/6"><p>旷工</p></el-table-column>
    <el-table-column  label="3/7"><p>旷工</p></el-table-column>
    <el-table-column  label="3/8"><p>旷工</p></el-table-column>
    <el-table-column  label="3/9"><p>旷工</p></el-table-column>
    <el-table-column  label="3/10"><p>旷工</p></el-table-column>
		<el-table-column  label="3/11"><p>旷工</p></el-table-column>
    <el-table-column  label="3/12"><p>旷工</p></el-table-column>
    <el-table-column  label="3/13"><p>旷工</p></el-table-column>
    <el-table-column  label="3/14"><p>旷工</p></el-table-column>
    <el-table-column  label="3/15"><p>旷工</p></el-table-column>
    <el-table-column  label="3/16"><p>旷工</p></el-table-column>
    <el-table-column  label="3/17"><p>旷工</p></el-table-column>
    <el-table-column  label="3/18"><p>旷工</p></el-table-column>
    <el-table-column  label="3/19"><p>旷工</p></el-table-column>
    <el-table-column  label="3/20"><p>旷工</p></el-table-column>
    <el-table-column  label="3/21"><p>旷工</p></el-table-column>
    <el-table-column  label="3/22"><p>旷工</p></el-table-column>
    <el-table-column  label="3/23"><p>旷工</p></el-table-column>
    <el-table-column  label="3/24"><p>旷工</p></el-table-column>
    <el-table-column  label="3/25"><p>旷工</p></el-table-column>
    <el-table-column  label="3/26"><p>旷工</p></el-table-column>
    <el-table-column  label="3/27"><p>旷工</p></el-table-column>
    <el-table-column  label="3/28"><p>旷工</p></el-table-column>
    <el-table-column  label="3/29"><p>旷工</p></el-table-column>
    <el-table-column  label="3/30"><p>旷工</p></el-table-column>
    <el-table-column  label="3/31"><p>旷工</p></el-table-column>
  </el-table>
	<div class="example-pagination-block">
    <div class="example-demonstration">共 {{total}} 条</div>
		<el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      :small="small"
      :disabled="disabled"
      :background="background"
      layout="  prev, pager, next, "
      :total="total"
    />
  </div>
			</div>
		</div>
</template>
<script lang="ts" setup>
import {attendances} from '../../../untils/Api/index'
import * as Ts from '../../api/permissions';
import { ref,reactive } from 'vue'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(19)
const small = ref(false)
const background = ref(false)
const disabled = ref(false)
let permissionsList = reactive<Ts.permissionsList[]>([]);
attendances({page:currentPage.value,pagesize:pageSize.value}).then(res=>{
	// console.log(res)
	if(res.status==200){
		// .rows
		const {total,rows}=res.data.data.data
		rows.forEach((item: Ts.permissionsList)=>{
			permissionsList.push(item);
		})
		console.log(permissionsList)
	}
})
</script>
<style lang='scss' scoped>
.box{
	background-color: #ffffff;
	height: 200px;
	.box1{
		display: flex;
		justify-content: space-between;
		align-items: center;
		.one{
	display: flex;
	background-color: #e6f7ff;
	padding: 10px;
	font-size: 10px;
	width: 255px;
}
	}
	.box2{
		margin-left: 40px;
		margin-top: 40px;
div{
	display: flex;
	font-size: 10px;
	margin-top: 15px;
}
		ul{
			width: 1100px;
			display: flex;
			flex-wrap: wrap;
			margin-left: 10px;
			li{
				width: 80px;
			}
		}
	}
}
.title{
	margin-top: 10px;
}
.example-pagination-block{
	display: flex;
	align-items: center;
	float:right;
}
</style>
