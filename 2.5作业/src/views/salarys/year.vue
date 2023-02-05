<template>
	<div>
		<!-- 报表 -->
		<el-card>
			工资报表
			<div class="box">
				<el-button type="primary" size="mini" @click="zz">归档06报表</el-button>
				<el-button type="primary" size="mini" @click="zk">新建报表</el-button>
				<el-button size="mini" @click="$router.back()">取消</el-button>
			</div>
		</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {

		}
	},
	methods: {
		// 归档06报表
		zz(){
			this.$confirm('您确认归档当月报表吗？')
          .then(_ => {
            this.$message.success('归档成功')
          })
          .catch(_ => {});
		},
		// 新建报表
		zk(){
			this.$confirm('您将创建 《 2020年10月 》 报表')
          .then(_ => {
            this.$message.success('新建报表成功')
          })
          .catch(_ => {});
		},
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
</style>
