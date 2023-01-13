<template>
	<div>
		<el-container>
  <el-aside :width="isCollapse?'65px':'140px'">
		<div class="title">
			<img src="../assets/下载.png">
		</div>
		<el-menu

      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#5788fe"
      text-color="#fff"
      active-text-color="pink"
			router
			:collapse="isCollapse">
			<el-menu-item index="./dashboard">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="./employees">
        <i class="el-icon-menu"></i>
        <span slot="title">员工</span>
      </el-menu-item>
      <el-menu-item index="./setting" >
        <i class="el-icon-document"></i>
        <span slot="title">设置</span>
      </el-menu-item>
      <el-menu-item index="./permission">
        <i class="el-icon-setting"></i>
        <span slot="title">权限管理</span>
      </el-menu-item>
			<el-menu-item index="./social_securitys">
        <i class="el-icon-setting"></i>
        <span slot="title">社保</span>
      </el-menu-item>
			<el-menu-item index="./approvals">
        <i class="el-icon-setting"></i>
        <span slot="title">审批</span>
      </el-menu-item>
			<el-menu-item index="./attendances">
        <i class="el-icon-setting"></i>
        <span slot="title">考勤</span>
      </el-menu-item>
			<el-menu-item index="./hrsaas">
        <i class="el-icon-setting"></i>
        <span slot="title">工资</span>
      </el-menu-item>
			<el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">组织架构</span>
      </el-menu-item>
    </el-menu>
	</el-aside>
  <el-container>
    <el-header>
			<div>
				<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
			<p>苏传智播客教育科技股份有限公司 </p>
			<el-button type="primary" size="mini" round>体验版</el-button>
			</div>
			<div>
				<img src="../assets/1BEB380FDDE549FE18C7F5420978780E.jpg" alt="" style="width:50px;height:50px;border-radius: 50%;">
			  <p>{{}}</p>
				<el-dropdown>
  <span class="el-dropdown-link">
   <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <p @click="$router.push('./dashboard')">首页</p>
		<a href="https://gitee.com/shuiruohanyu/hrsaas-sd18" >项目地址</a>
    <p  @click="tui">退出登录</p>
  </el-dropdown-menu>
</el-dropdown>
			</div>
		</el-header>
    <el-main>
			<router-view> </router-view>
		</el-main>
  </el-container>
</el-container>
 </div>
</template>

<script>
import {removeToken} from '../untils/cookie'
export default {
	data () {
		return {
			isCollapse:false,/**展开收起 */
		}
	},
	methods: {
		tui(){

			/**清楚token */
			removeToken()
			/**跳转登录页面 */
		this.$router.push('/login')
		}
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
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
		// height: 100vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: #4272f4;
		div{
			display: flex;
		align-items: center;
		}
		.el-dropdown-link{
			text-align: center;
		}
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
		height: 100vh;
		background-color: #4272f4;
		.title{
    height: 70px;
    line-height: 10px;

			img{
				width: 140px;
				vertical-align: middle;
         margin-right: 12px;
			}
		}
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

</style>
