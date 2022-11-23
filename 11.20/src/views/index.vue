<template>
  <div>
    <el-container>
      <el-container>
        <el-aside width="200px">
          <el-menu default-active="" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" router>
            <el-menu-item index="/user">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-collection"></i>
                <span>数据管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/en">用户列表</el-menu-item>
                <el-menu-item index="/shang">商家列表</el-menu-item>
                <el-menu-item index="/ship">食品列表</el-menu-item>
                <el-menu-item index="/dingdan">订单列表</el-menu-item>
                <el-menu-item index="/lb">管理员列表</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-plus"></i>
                <span>添加数据</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/cate">添加商铺</el-menu-item>
                <el-menu-item index="/push">添加商铺</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>图表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/tu">用户分布</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="13">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>编辑</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/bian">文本编辑</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-setting"></i>
                <span>设置</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/she">管理员设置</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="12">
              <template slot="title">
                <i class="el-icon-warning"></i>
                <span>说明</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="suo">说明</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <!-- 面包屑导航 -->
          <el-row style="background:#fff">
            <el-col :span="12">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-for="(item, i) in $route.meta.title" :key="i">{{ item }}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="12">
              <el-button type="primary">退出</el-button>
            </el-col>
          </el-row>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped lang='scss'>
.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}
</style>
