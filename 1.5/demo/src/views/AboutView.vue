<template>
		 <div class="common-layout">
    <el-container>
      <el-aside width="225px">
				<div class="box"><img src="../assets/下载.png" alt=""></div>
				<el-row class="tac">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
				:collapse="isCollapse"
				router
      >
				<el-menu-item index="./dashboard">
          <el-icon><location /></el-icon>
          <span>首页</span>
        </el-menu-item>
				<el-menu-item index="2">
          <el-icon><icon-menu /></el-icon>
          <span>组织架构</span>
        </el-menu-item>
				<el-menu-item index="3">
          <el-icon><icon-menu /></el-icon>
          <span>员工</span>
        </el-menu-item>
				<el-menu-item index="./settings">
          <el-icon><setting /></el-icon>
          <span>公司设置</span>
        </el-menu-item>
				<el-menu-item index="./permissions">
          <el-icon><setting /></el-icon>
          <span>权限设置</span>
        </el-menu-item>
				<el-menu-item index="6">
          <el-icon><icon-menu /></el-icon>
          <span>社保</span>
        </el-menu-item>
        <el-menu-item index="7">
          <el-icon><icon-menu /></el-icon>
          <span>考勤</span>
        </el-menu-item>
        <el-menu-item index="8" >
          <el-icon><document /></el-icon>
          <span>工资</span>
        </el-menu-item>
        <el-menu-item index="9">
          <el-icon><setting /></el-icon>
          <span>审批</span>
        </el-menu-item>
      </el-menu>
  </el-row>
			</el-aside>
      <el-container>
        <el-header>
					<div>
							<!-- 图标 -->
							<el-icon @click="add"><Fold  /></el-icon>
							<p >江苏传智播客教育科技股份有限公司</p >
							<el-button type="primary">体验版</el-button>
					</div>
					<div>
							<!-- 图标 -->
							<el-color-picker v-model="color1" />
							<img src="../assets/1BEB380FDDE549FE18C7F5420978780E.jpg" alt="">
							<span>小东</span>
							<el-dropdown>
    <span class="el-dropdown-link">
      >
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>首页</el-dropdown-item>
        <el-dropdown-item>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
					</div>
				</el-header>
        <el-main>
					<!-- 容器 -->
					<router-view></router-view>
				</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { Document,Menu as IconMenu,Location, Setting,Fold,} from '@element-plus/icons-vue'
import {ref} from 'vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const color1 = ref('#409EFF')
const isCollapse=ref(false)
const add=()=>{
	isCollapse.value=!isCollapse.value
	console.log(isCollapse.value)
}
</script>

<style lang='scss' scoped>
  .el-header {
    background-color: #4979fb;
    color: #333;
    text-align: center;
    line-height: 60px;
		display: flex;
		justify-content: space-between;
		div{
			display: flex;
			justify-content: space-around;
			align-items: center;
			color: #eff1f4;
			img{
	width: 50px;height: 50px;
	border-radius: 50%;
}
		}

  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
		height: 100vh;
    line-height: 200px;
		background-color: #5a8bff;
		.el-menu-vertical-demo{
			width: 225px;
			background-color: #5182fc;
			span{
				color: #fff,
			}

		}
		.box{
			height: 100px;
			margin-top: -45px;
			margin-bottom: 10px;
		}
  }

  .el-main {
    background-color: #eff1f4;
    color: #333;
    text-align: center;
  }

</style>
