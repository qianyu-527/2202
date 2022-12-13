<template>
	<div>
		<el-card>
			<el-alert title="注意：只允许为第三级分类设置相关参数！" type="warning"  effect="dark" show-icon>
		</el-alert>
		   选择商品分类：<el-cascader :options="options" clearable></el-cascader>
		<el-tabs type="border-card">
  <el-tab-pane label="动态参数">
		<el-button type="primary">添加参数</el-button>
		
	</el-tab-pane>
  <el-tab-pane label="静态参数">
		<el-button type="primary">静态属性</el-button>
	</el-tab-pane>
</el-tabs>
		</el-card>

	</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
	return {
		options:[],/***数据 */
	}
  },
  created () {
	 },
  mounted () { },
  methods: {

	}
}
</script>
<style scoped lang='scss'>
</style>
