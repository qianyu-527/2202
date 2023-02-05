<template>
	<div>
		<div class="box">
			<div class="one">
				<!-- 图标 -->
				<p>当前共有{{$store.state.employees.total}}条记录</p>
			</div>
			<div>
				<el-button type="danger" size="mini">普通excel导出 </el-button>
				<el-button type="warning" size="mini">负责excel导出</el-button>
				<el-button type="success" size="mini" @click="$router.push('./import')">excel导入</el-button>
				<el-button type="primary" size="mini" disabled>新增员工</el-button>
			</div>
		</div>
		<div class="title">
			<el-table :data="$store.state.employees.car"  style="width: 100%">
				<el-table-column type="index" label="序号" width="50">
				</el-table-column>
				<el-table-column prop="username" label="姓名" sortable width="100">
				</el-table-column>
				<el-table-column prop="name" label="头像" width="100">
					<template slot-scope="scope">
						<img :src="scope.row.staffPhoto" style="width:50px;height:50px;	">
					</template>
				</el-table-column>
				<el-table-column prop="mobile" label="手机号" sortable width="100">
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" sortable width="100">
				</el-table-column>
				<el-table-column prop="formOfEmployment" label="应聘形式" sortable width="100">
					<template slot-scope="scope">
						<p v-if="scope.row.formOfEmployment==1">正式</p>
						<p v-else>非正式</p>
					</template>
				</el-table-column>
				<el-table-column prop="departmentName" label="部门" sortable width="100">
				</el-table-column>
				<el-table-column prop="" label="入职时间" sortable width="100">
					<template slot-scope="scope">
						<div>
							<span>{{  scope.row.correctionTime.slice(0,10) }}</span>
						</div>
					</template>
				</el-table-column>
				<el-table-column prop="enableState" label="账户状态" sortable width="100">
					<template slot-scope="scope">
						<el-switch  v-if="scope.row.enableState=2?'scope.row.enableState':''">
							{{ scope.row.enableState }}
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作" sortable>
					<template slot-scope="scope">
						<div class="sp">
							<span size="mini" @click="hand( scope.row.id)">查看</span>
							<span size="mini">转正</span>
							<span size="mini">调岗</span>
							<span size="mini">离职</span>
							<span size="mini" type="danger" @click="slt(scope.row.id)">角色</span>
							<span size="mini" disabled style="color:#ccc;">删除</span>
						</div>
					</template>
				</el-table-column>
			</el-table>
			<!-- 模态框 -->
			<el-dialog title="分配角色" :visible.sync="dialogTableVisible">
				<el-checkbox-group v-model="checkList">
    <el-checkbox label="系统管理员"></el-checkbox>
    <el-checkbox label="人事经理"></el-checkbox>
    <el-checkbox label="人事专员"></el-checkbox>
    <el-checkbox label="薪资专员"></el-checkbox>
    <el-checkbox label="员工"></el-checkbox>
  </el-checkbox-group>
	  <div class="title">
			<el-button type="primary" size="mini" @click="dialogTableVisible=false">确定</el-button>
	  <el-button 	 size="mini" @click="dialogTableVisible=false">取消</el-button>
		</div>
</el-dialog>
<!-- 分页 -->
<el-pagination
      @current-change="handleCurrentChange"
			:page-size="pageSize"
        :page-count="pageCount"
      :page-sizes="[10, 20, 30, 50]"
      layout=" prev, pager, next"
			:total="total">
    </el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
		 dialogTableVisible:false,/**模态框 */
		 checkList: ['选中且禁用','复选框 A'],
		/**分页 */
		 total: 100,
      pageSize: 10,
      pageCount: 1,
		}
	},
	methods: {
		/**查看 */
		hand(row){
			this.$router.push('/detail/'+row)
		},
		/**查看 */
		slt(row){
			this.dialogTableVisible=true
			console.log(row);
			// this.$store.dispatch('employees/set', row)
		},

      handleCurrentChange(val) {
				this.pageSize = 10
				this.pageCount =val
				this.$store.dispatch('employees/gentlest',{page: this.pageCount,size: this.pageSize,total: this.total} )
      },

	},
	created () {
	},
	mounted () {
		this.$store.dispatch('employees/gentlest',{page: this.pageCount,size: this.pageSize,total: this.total} )
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
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  .one {
    background-color: #e6f7ff;
    padding: 10px;
    display: flex;
  }
}

.title{
	margin-top: 30px;
	text-align: center;
}


.sp{
	color: #5788fe;
	p{
		padding: 0 10px;
	}
}
</style>
