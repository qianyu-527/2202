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
export default {
	data () {
		return {
			tab: [{
          id: 1,
          code: '2016-05-02',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          code: '2016-05-04',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          code: '2016-05-01',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1519 弄',
          children: [{
              id: 31,
              code: '2016-05-01',
              name: '王小虎',
              description: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              code: '2016-05-01',
              name: '王小虎',
              description: '上海市普陀区金沙江路 1519 弄'
          }]
        }, {
          id: 4,
          code: '2016-05-03',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1516 弄'
        }],

		}
	},
	methods: {},
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
