<template>
	<div>
		<div class="box">
			<el-button type="primary" size="mini">添加权限</el-button>
		</div>
		<el-table :data="tab" style="width: 100%;margin-top: 20px;" row-key="id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
			<el-table-column prop="name" label="名称" width="180">
			</el-table-column>
			<el-table-column prop="code" label="标识" width="180">
			</el-table-column>
			<el-table-column prop="description" label="描述">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
			  <div class="title">
					<p>添加</p>
					<p>编辑</p>
					<p>删除</p>
				</div>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
import {permission} from '../../api/permission'
export default {
	data () {
		return {
			tab: [],
		}
	},
	methods: {},
	created () {
		permission().then(res=>{
			if(res.data.code=10000){
				this.tab=res.data.data
			}
		})
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
.box {
  width: 100%;
  background-color: aliceblue;
  height: 40px;
  text-align: center;
  .el-button {
    float: right;
  }
}

.title{
	display: flex;
	p{
		margin: 5px;
		color: skyblue;
	}
}
</style>
