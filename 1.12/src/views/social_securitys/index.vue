<template>
	<div>
		<div class="box">
			<div style="background-color: #e6f7ff;padding:10px;">本月:社保在缴 公积金在缴 增员 减员 入职 离职</div>
			<div>
				<el-button type="danger" size="mini">历史归档</el-button>
				<el-button type="primary" size="mini">202001报表</el-button>
			</div>
		</div>
		<div class="title">

			<div class="one">
				<h4>部门</h4>
				<div class="box1">
					<ul v-for="(item, index) in data" :key="index">
						<li> <input type="checkbox" name="" id="">
							{{ item.name }}
						</li>
					</ul>
				</div>
			</div>
			<div class="tow">
				<h4>社保城市</h4>
				<input type="checkbox" name="" id="">
				<p>北京</p>
			</div>
			<div class="tow">
				<h4>公积金城市</h4>
				<input type="checkbox" name="" id="">
				<p>北京</p>
			</div>
		</div>
		<div class="footer">
			<el-table :data="tableData" >
				<el-table-column type="index" label="序号" width="70">
				</el-table-column>
				<el-table-column prop="username" label="姓名" sortable>
				</el-table-column>
				<el-table-column prop="mobile" label="手机" sortable>
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" sortable>
				</el-table-column>
				<el-table-column prop="departmentName" label="部门" sortable>
				</el-table-column>
				<el-table-column prop="timeOfEntry" label="入职时间" sortable>
				</el-table-column>
				<el-table-column prop="address" label="离职时间" sortable>
				</el-table-column>
				<el-table-column prop="providentFundCity" label="社保城市" >
				</el-table-column>
				<el-table-column prop="participatingInTheCity" label="公积金城市">
				</el-table-column>
				<el-table-column prop="socialSecurityBase" label="社保基数">
				</el-table-column>
				<el-table-column prop="providentFundBase" label="公积金基数">
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="add(scope.$index, scope.row)">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
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
import {department,list} from '../../api/social_securitys'
export default {
	data () {
		return {
			data:[],/**部门 */
			tableData: [],/**表格数据 */
			total: 40,
      pageSize: 10,
      pageCount: 1,
		}
	},
	methods: {
		/**查看 */
		add(){

		},
		/**表格数据 */
		getlist(){
			list().then(res=>{
				console.log(res);
			if(res.data.code==10000){
				const {rows,total}=res.data.data
				this.tableData=rows
				this.total=total
				console.log(rows);
			}
		})
		},
		/**分页 */
		handleCurrentChange(val) {
				this.pageSize = 10
				this.pageCount =val
				this.getlist()
      },
	},
	created () {
		department().then(res=>{
			if(res.data.code==10000){
				const depts=res.data.data.depts
				this.data=depts
			}
		})
		this.getlist()
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
  background-color: aliceblue;
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
      padding: 20px 0px 0px 50px;
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
</style>
