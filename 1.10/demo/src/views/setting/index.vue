<template>
	<div>
		<el-card>
			<el-tabs>
				<el-tab-pane label="角色管理" name="first">
					<el-button type="primary" size="mini">新增角色</el-button>
					<el-table :data="tableData" border >
						<el-table-column type="index" label="序号" width="100px" >
						</el-table-column>
						<el-table-column prop="name" label="名称" >
						</el-table-column>
						<el-table-column prop="description" label="描述">
						</el-table-column>
						<el-table-column label="操作">
      <template slot-scope="scope">
        <el-button size="mini"  type="success" @click="handleEdit(scope.$index, scope.row)">分配权限</el-button>
        <el-button size="mini"  type="primary" @click="edit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini"  type="danger" @click="del(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
					</el-table>
				</el-tab-pane>

				<el-tab-pane label="公司信息" name="second">
					 <div class="sky">
						<!-- 图标 -->
						<p >对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改</p>
					</div>
					<el-form ref="form" :model="form" label-width="80px" class="form">
  <el-form-item label="公司名称">
    <el-input v-model="form.name" disabled></el-input>
  </el-form-item>
	<el-form-item label="公司地址">
    <el-input v-model="form.companyAddress" disabled></el-input>
  </el-form-item>
	<el-form-item label="邮箱">
    <el-input v-model="form.mailbox" disabled></el-input>
  </el-form-item>
	<el-form-item label="备注">
    <el-input type="textarea" v-model="form.remarks" disabled></el-input>
  </el-form-item>

	</el-form>
				</el-tab-pane>
			</el-tabs>
		</el-card>
	</div>
</template>

<script>
export default {
	data () {
		return {
			tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          description: '上海市普陀区金沙江路 1516 弄'
        }],

				form: {
          name: '江苏传智播客教育科技股份有限公司',
					mailbox:"bd@itcastcn",
					companyAddress:"北京市昌平区建材城西路金燕龙办公楼一层",
					remarks:"传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质",
				}
		}
	},
	methods: {
		handleEdit(index, row) {
        console.log(index, row);
      },
			/**编辑 */
      edit(index, row) {
        console.log(index, row);
      },
			/**删除 */
			del(index, row) {
        console.log(index, row);
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
.sky{
	width: 100%;
	background-color: #f4f4f5;
	padding: 10px;
	font-size: 10px;
	display: flex;
}

.form{
	margin-top: 40px;
}
</style>
