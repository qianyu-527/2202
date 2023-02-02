<template>
	<div>
		<div class="box">
			<div class="kk">
				<div>
				<img src="../../assets/背景.jpg"/>
			</div>
				<div>
				<p>早安,{{$store.state.car}},祝你开心每一天!</p>
				<p style="color: #ccc;padding: 5px 0;">{{$store.state.car}}| 传智播客 - 总裁办</p>
			</div>
			</div>


		</div>
			<div class="title">
				<div class="left">
				<el-calendar ></el-calendar>

			</div>
			<div class="right">
			<div class="top">
				<div class="en">
					<h4>流程申请</h4>
					<hr/>
				</div>
				<div class="box2">
					<el-button>加班离职</el-button>
					<el-button>请假调休</el-button>
					<el-button>审批列表</el-button>
					<el-button>我的信息</el-button>
				</div>
			</div>
			<div class="cen">
				<div class="en">
				<p>快速开始/便捷导航</p>
					<hr/>
				</div>
				<div class="box2">
					<el-button>人事月报</el-button>
					<el-button>考勤查询</el-button>
					<el-button>考勤统计</el-button>
					<el-button>员工审核</el-button>
					<el-button>组织架构</el-button>
				</div>
			</div>
			<div class="footer">
				<ul>
					<li>
						<img src="../../assets/第一个.png" alt="">
						<p>入门指南</p>
					</li>
					<li>
						<img src="../../assets/第二个.png" alt="">
						<p>在线帮助手册</p>
					</li>
					<li>
						<img src="../../assets/第三个.png" alt="">
						<p>联系技术支持</p>
					</li>
				</ul>
			</div>
			</div>
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

img{
	width: 100px;height: 100px;border-radius: 50%;

}
.box{
	background-color: #fff;
	display: flex;
	align-items: center;
	padding: 10px;
	margin-top: -10px;
	height: 60px;
	.kk{
		margin-left: 20px;
		font-size: 17px;
		display: flex;
		img{
			width: 50px;height: 50px;
			margin-right: 10px;
		}
	}
}

.title{
	display: flex;
	margin-top: 20px;
	.left{
	width: 60%;
	height: 400px;
	margin-right: 10px;
}
.top{
	width:500px;
	background-color: #fff;
	height: 140px;
	.box2{
		margin-left: -40px;
		margin-top: 10px;
	}
	.en{
		width: 110px;
			padding-top: 20px;
	}
	hr{
		width: 70px;
		height: 10px;
		background-color: #8a97f8;
		margin-top: 5px;
		margin-left: 20px;
	}
}
}
.cen{
	background-color: #ffff;
	margin-top: 20px;
	height: 170px;
	hr{
		width: 140px;
		height: 10px;
		background-color: #8a97f8;
		margin-top: 5px;
		margin-left: 20px;
	}
	p{
		width: 180px;
		font-weight: 800;
		padding-top: 10px;
	}
}
.footer{
	background-color: #fff;
	margin-top: 20px;
	height: 120px;
	ul{
	display: flex;
	li{
		margin: 10px 40px;
		img{
			width: 50px;height: 50px;
		}
	}
}
}
</style>
