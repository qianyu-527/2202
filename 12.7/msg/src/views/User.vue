<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input placeholder="请输入内容" v-model="input3" clearable>

					<el-button slot="append" icon="el-icon-search"></el-button>
				</el-input>
			</el-col>
			<el-col :span="1">
				<el-button type="primary">添加用户</el-button>
			</el-col>
		</el-row>
		<el-table :data="tab">
			<el-table-column type="index" width="50">
			</el-table-column>
			<el-table-column prop="date" label="姓名">
			</el-table-column>
			<el-table-column prop="name" label="邮箱">
			</el-table-column>
			<el-table-column prop="address" label="电话">
			</el-table-column>
			<el-table-column prop="address" label="角色">
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row" active-color="#13ce66" inactive-color="#ff4949">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="edit(scope.$index, scope.row)">编辑</el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- <el-pagination
		 @size-change="size"
		 @current-change="page"
		  :current-page="num.page"
			 :page-sizes="[1, 2, 5, 10]"
			  :page-size="num.size"
				layout="total, sizes, prev, pager, next, jumper"
				:total="tab.length">
		</el-pagination> -->
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {
			input3:"",
			tab:[],
			num:{
				page:"",//第几页
				size:"",//每页几条
			}
		}
	},
	created () { },
	mounted () { },
	methods: {
		// 编辑
		edit(){

		},
		del(){

		},
		  size(val) {
        console.log(`每页 ${val} 条`);
      },
      page(val) {
        console.log(`当前页: ${val}`);
      }
	}
}
</script>
<style scoped lang='scss'>
</style>
