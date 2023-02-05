<template>
	<div>
		<div class="box">
			<div style="background-color: #e6f7ff;padding:10px;">本月0：入职 0 离职 0 调薪 0 未定薪 0</div>
			<div>
				<el-button type="danger" size="mini">设置</el-button>
				<el-button type="primary" size="mini" @click="stk">202006报表</el-button>
			</div>
		</div>
		<div class="title">
			<div class="tow">
				<h4>聘用形式:</h4>
				<el-checkbox v-model="checked">正式</el-checkbox>
				<el-checkbox v-model="checked">非正式</el-checkbox>
			</div>
			<div class="tow">
				<h4>员工状态:</h4>
				<el-checkbox v-model="checked">在职</el-checkbox>
				<el-checkbox v-model="checked">离职</el-checkbox>
			</div>
			<div class="one">
				<h4>部门</h4>
				<div class="box1">
					<ul v-for="(item, index) in $store.state.hrsaas.list" :key="index">
						<li> <input type="checkbox" name="" id="">
							{{ item.name }}
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="footer">
			<el-table :data="$store.state.salarys.car"  style="width: 100%">
				<el-table-column type="index" label="序号" width="50">
				</el-table-column>
				<el-table-column prop="username" label="姓名" width="90">
				</el-table-column>
				<el-table-column prop="mobile" label="手机" width="112">
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" width="90">
				</el-table-column>
				<el-table-column label="应聘形式" width="90">未知
				</el-table-column>
				<el-table-column prop="departmentName" label="部门" width="90">
				</el-table-column>
				<el-table-column prop="timeOfEntry" label="入职时间" width="90">
				</el-table-column>
				<el-table-column prop="currentPostWage" label="工资基数" width="90">0
				</el-table-column>
				<el-table-column label="津贴方案" width="90" >通用方案
				</el-table-column>
				<el-table-column label="操作" width="180">
					<template slot-scope="scope">
					<div class="skt">
						<el-button size="mini" type="primary" @click="add(scope.row)">调薪</el-button>
						<el-button size="mini" type="danger" @click="asd(scope.row)" >定薪</el-button>
						<el-button size="mini" @click="skd(scope.row.id)">查看</el-button>
					</div>
					</template>
				</el-table-column>
			</el-table>
			<!-- 分页 -->
			<el-pagination
      @current-change="handleCurrentChange"
			:page-size="pageSize"
        :page-count="pageCount"
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
			total: 40,
      pageSize: 10,
      pageCount: 1,
			checked:false,
		}
	},
	methods: {
		/**查看 */
		add(row){
			console.log(row);
		},
		/**查看 */
		skd(row){
			this.$router.push(`./details/${row}`)
		},
		// 报表
		stk(){
			this.$router.push('./year')
		},
		/**分页 */
		handleCurrentChange(val) {
				this.pageSize = 10
				this.pageCount =val
					/**表格数据 */
		this.$store.dispatch('salarys/gentlest', {page:this.pageCount,pagesize:this.pageSize,total:this.total})
      },
	},
	created () {

	},
	mounted () {
	/**部门数据 */
	this.$store.dispatch('hrsaas/met',)
		/**表格数据 */
		this.$store.dispatch('salarys/gentlest', {page:this.pageCount,pagesize:this.pageSize,total:this.total})
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
  padding: 20px;
}
.title {
  margin: 10px 0;
  background-color: white;

  .one {
    display: flex;
    h4 {
      padding: 20px 10px 20px 50px;
    }
    .box1 {
      width: 1100px;
      display: flex;
      margin: 10px 0 0 0;
      flex-wrap: wrap;
      li {
        padding: 10px;
      }
    }
  }
  .tow {
    display: flex;
    align-items: center;
    h4 {
      padding: 0 10px 0 50px;
    }
    p {
      padding: 0 10px;
    }
  }
}
.skt{
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>
