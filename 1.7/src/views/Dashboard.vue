<template>
		<div class=''>
		<div class="box">
			<img src="../assets/head.b6c3427.jpg" alt="">
			<div>
				<p>早安,东东1111,祝你开心每一天！</p>
				 <p> <span>东东1111 | 传智播客-总裁办</span></p>
			</div>
		</div>
		 <!-- <div class="left">工作日历</div> -->
		 <div class="right">
		 <p>流程申请</p>
		 <hr/>
		 <el-button size="small">加班离职</el-button>
		 <el-button size="small">请假调休</el-button>
		 <el-button size="small">审批列表</el-button>
		 <el-button size="small">我的信息</el-button>
		 </div>
		 <div class="right en">
		 <p>快速开始/便捷导航</p>
		 <hr style="width:130px;"/>
		 <el-button size="small">人事月报</el-button>
		 <el-button size="small">考勤查询</el-button>
		 <el-button size="small">考勤统计</el-button>
		 <el-button size="small">员工审核</el-button>
		 <el-button size="small" style="margin-top:5px;">组织架构</el-button>
		 </div>
		</div>
</template>

<script>
 import { useRouter, useRoute } from 'vue-router';
 export default {
setup(props, ctx) {
const router = useRouter();
 },
 };
</script>

<style lang='scss' scoped>
  .box{
		width:100vw;
		display: flex;
		align-items: center;
		background-color: #ffffff;
		height: 100px;
		img{
			width: 80px;height: 80px;
			margin-left: 20px;
		}
		span{
			color: #ccc;
		}
	}


	.right{
		float: right;
		width: 350px;
		height: 120px;
		padding: 10px;

		background-color: #ffffff;
		margin: 20px 0px;
		hr{
		width: 60px;
		height: 4px;
		background-color: #8a97f8;
		margin: 10px 0;
	}
	}
	.left{
		background-color: #ffffff;
	}
	.en{
		position: fixed;
	   right:20px;
		 top:290px;
		 margin-top: 5px;
	}
</style>
