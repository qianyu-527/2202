<template>
<div>
<el-container>
  <el-aside :width="isCollapse?'120px':'240px'">
		<h1>电商管理系统</h1>
		 <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
			:collapse="isCollapse"
			router >
      <el-submenu :index="item.path" v-for="item in tab" :key="item.id">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>{{item.authName}}</span>
        </template>
        <el-menu-item-group v-for="ele in item.children" :key="ele.id">
          <el-menu-item :index="ele.path" @click="add(item.authName,ele.authName)">{{ele.authName}}</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
	</el-aside>
  <el-container>
    <el-header>
			<i class="el-icon-s-fold" @click="isCollapse=!isCollapse"></i>
			<el-button  type="info" @click="go">后退</el-button>
		</el-header>
    <el-main>
			<!-- 路由容器 -->
			<el-breadcrumb separator-class="el-icon-arrow-right">
  <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
  <el-breadcrumb-item v-for="(item,index) in men" :key="index">{{item}}</el-breadcrumb-item>
</el-breadcrumb>
			<router-view></router-view>
		</el-main>
  </el-container>
</el-container>
</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {
			isCollapse:false,//状态
			tab:[],//左侧
			men:[],//面包屑
		}
	},
	created () {
		this.$http.get(this.$http.addorUrl("/menus")).then((res) => {
	  this.tab=res.data.data
		})
	},
	mounted () { },
	methods: {
		// 点击后退
		go(){
			//弹出提示
			// 跳转页面和清楚token
			  this.$confirm('您确认退出登录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					this.$router.push('/login')

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

		},
		add(i,val){
			this.men={i,val}
		}
	}
}
</script>
<style scoped lang='scss'>
 .el-header{
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
		display: flex;
		justify-content: space-between;
		align-items: center;
		i{
			font-size: 42px;
		}
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
		height: 100vh;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

</style>
