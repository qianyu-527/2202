<template>
	<div>
		<div class="box">
			<div class="one">
				<!-- 图标 -->
				<p>当前共有{{}}条记录</p>
			</div>
			<div>
				<el-button type="danger" size="mini">普通excel导出 </el-button>
				<el-button type="warning" size="mini">负责excel导出</el-button>
				<el-button type="success" size="mini">excel导入</el-button>
				<el-button type="primary" size="mini" disabled>新增员工</el-button>
			</div>
		</div>
		<div class="title">
			<el-table :data="data">
				<el-table-column type="index" label="序号">
				</el-table-column>
				<el-table-column prop="username" label="姓名" sortable>
				</el-table-column>
				<el-table-column prop="name" label="头像">
					<template slot-scope="scope">
						<img :src="scope.row.staffPhoto" style="width:50px;height:50px;border-radius: 50%;	">
					</template>
				</el-table-column>
				<el-table-column prop="mobile" label="手机号" sortable>
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" sortable>
				</el-table-column>
				<el-table-column prop="formOfEmployment" label="应聘形式" sortable>
					<template slot-scope="scope">
						<p v-if="scope.row.formOfEmployment==1">正式</p>
						<p v-else>非正式</p>
					</template>
				</el-table-column>
				<el-table-column prop="departmentName" label="部门" sortable>
				</el-table-column>
				<el-table-column prop="correctionTime" label="入职时间" sortable>
				</el-table-column>
				<el-table-column prop="enableState" label="账户状态" sortable>
					<template slot-scope="scope">
						<el-switch  v-if="scope.row.enableState=2?'scope.row.enableState':''">
							{{ scope.row.enableState }}
						</el-switch>
					</template>
				</el-table-column>
				<el-table-column label="操作" sortable>
					<template slot-scope="scope">
						<div class="sp">
							<p size="mini" @click="hand(scope.$index, scope.row)">查看</p>
							<p size="mini">转正</p>
							<p size="mini">调岗</p>
							<p size="mini">离职</p>
							<p size="mini" type="danger" @click="slt(scope.$index, scope.row)">角色</p>
							<p size="mini" disabled style="color:#ccc;">删除</p>
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
    <el-checkbox label="货拉拉司机"></el-checkbox>
    <el-checkbox label="快狗打车"></el-checkbox>
    <el-checkbox label="123"></el-checkbox>
    <el-checkbox label="1111"></el-checkbox>
    <el-checkbox label="1111"></el-checkbox>
  </el-checkbox-group>
	  <div class="title">
			<el-button type="primary" size="mini">确定</el-button>
	  <el-button 	 size="mini" @click="dialogTableVisible=false">取消</el-button>
		</div>
</el-dialog>
<!-- 分页 -->
<el-pagination
    layout="prev, pager, next"
		@size-change="handleSizeChange"
      @current-change="handleCurrentChange"
			:current-page.sync="currentPage"
      :page-size="pageSize"
    :total="total">
  </el-pagination>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
     data:[
			{correctionTime: "2018-11-30",departmentName: "总裁办",enableState: "2",formOfEmployment: "2",id: "604f764971f93f3ac8f365c2",mobile: "13800000002",password: "e10adc3949ba59abbe56e057f20f883e",staffPhoto: "http://shuiruohanyu2-1302806742.cos.ap-chengdu.myqcloud.com/v2-d7e39d51538b8310183188c33b556408_r.jpg",timeOfEntry: "2018-11-02",username: "都别卷了",workNumber: "哥们添加一个能删的 我试一下"},
{correctionTime: "2018-11-20",departmentName: "市场部",enableState: "1",formOfEmployment: "1",id: "604f764971f93f3ac8f365c3",mobile: "13800000003",password: "25f9e794323b453885f5181f1b624d0b",staffPhoto: "https://xingziwei-1315284586.cos.ap-beijing.myqcloud.com/bd33042ca6502ad27eee7abbe1e0b1e.png",timeOfEntry: "2018-11-04",username: "AA家具和姐",workNumber: "我给你添一个哈"},
		 ],
		 dialogTableVisible:false,/**模态框 */
		 checkList: ['选中且禁用','复选框 A'],


		 currentPage:1,
		 pageSize:10,
		 total:10,
		}
	},
	methods: {
		/**查看 */
		hand(){
			this.$router.push('/detail')
		},
		/**查看 */
		slt(){
			this.dialogTableVisible=true
		},
		handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
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
.sp {
  display: flex;
  color: skyblue;
}
.title{
	margin-top: 30px;
}
</style>
