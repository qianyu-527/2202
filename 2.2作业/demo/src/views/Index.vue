<template>
	<div>
		<el-container>
  <el-aside :width="isCollapse?'65px':'140px'">
		<div class="title">
			<img src="../assets/图标.png" alt="">
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
			<el-menu-item index="./departments">
        <i class="el-icon-setting"></i>
        <span slot="title">组织架构</span>
      </el-menu-item>
			<el-menu-item index="./employees">
        <i class="el-icon-menu"></i>
        <span slot="title">员工</span>
      </el-menu-item>
			<el-menu-item index="./setting">
        <i class="el-icon-setting"></i>
        <span slot="title">公司设置</span>
      </el-menu-item>
      <!--
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

			 -->
    </el-menu>
	</el-aside>
  <el-container>
    <el-header>
			<div>
				<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
			<p style="color:#fff;padding: 0 10px;font-size: 16px;">苏传智播客教育科技股份有限公司 </p>
			<el-button type="primary" size="mini" round disabled="">体验版</el-button>
			</div>
			<div>
				<i class="el-input__icon el-icon-search" @click="flag=!flag" style="color:#fff;padding: 0 10px;font-size: 16px;"	></i>
				<el-autocomplete
  placeholder="请输入内容"
	 v-show="flag"
></el-autocomplete>
				<!-- 全屏 -->
				<i class="el-icon-rank" @click="handleFullScreen"></i>
				<!-- 多语言 -->
				<el-color-picker v-model="color1" size="mini"></el-color-picker>
				<img src="../assets/图标.png" alt="" style="width:20px;height:20px;border-radius: 50%;">
				<p>{{$store.state.car }}</p>
				<el-dropdown>
  <span class="el-dropdown-link">
   <i class="el-icon-arrow-down el-icon--right"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <p @click="$router.push('./dashboard')">首页</p>
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
			color1: '#409EFF',
			fullscreen:false,/**全屏 */
			flag:false,/**输入框 */
		}
	},
	methods: {
		tui(){

			/**清楚token */
			removeToken()
			/**跳转登录页面 */
		this.$router.push('/login')
		},
		/**全屏 */
		handleFullScreen () {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
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
		background-color: #4272f4;
		display: flex;
		justify-content: space-between;
		align-content: center;
		div{
			display: flex;
			justify-content: space-around;
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
  }

</style>
