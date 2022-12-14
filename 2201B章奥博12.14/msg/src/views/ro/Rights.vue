<template>
	<div>
		<el-card>
			<el-table :data="tab" border >
			<el-table-column type="index" label="#">
			</el-table-column>
			<el-table-column prop="authName" label="权限名称">
			</el-table-column>
			<el-table-column prop="path" label="路径">
			</el-table-column>
			<el-table-column label="权限等级">
				<template slot-scope="scope">
					<el-tag v-if="scope.row.level==0?'scope.row.level':''">一级</el-tag>
					<el-tag type="success" v-else-if="scope.row.level==1?'scope.row.level':''">二级</el-tag>
					<el-tag type="info" v-else>三级</el-tag>
				</template>
			</el-table-column>
		</el-table>
		</el-card>
	</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
	return {
		tab:[],
	}
  },
  created () {
	this.$http({
			method:"get",
			url:this.$http.addorUrl("rights/list"),
	}).then((res) => {
		this.tab=res.data.data
		// console.log(this.tab);
	})
  },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
