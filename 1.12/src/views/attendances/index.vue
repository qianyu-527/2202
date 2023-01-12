<template>
	<div>
		<div class="box">
			<div style="background-color: #e6f7ff;padding:10px;">有 0 条考勤审批尚未处理</div>
			<div>
				<el-button type="danger" size="mini">导入</el-button>
				<el-button type="warning" size="mini">提醒</el-button>
				<el-button type="primary" size="mini">设置</el-button>
				<el-button size="mini">历史归档</el-button>
				<el-button type="primary" size="mini">202303报告</el-button>
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
				<h4>考勤状态:</h4>
				<el-radio v-model="radio" label="1">正常</el-radio>
				<el-radio v-model="radio" label="2">旷工</el-radio>
				<el-radio v-model="radio" label="3">事假</el-radio>
				<el-radio v-model="radio" label="4">调休</el-radio>
				<el-radio v-model="radio" label="5">迟到</el-radio>
				<el-radio v-model="radio" label="6">早退</el-radio>
			</div>
		</div>
		<div class="footer">
			<el-table :data="tableData" border  >
				<el-table-column type="index" label="序号" width="70">
				</el-table-column>
				<el-table-column prop="username" label="姓名" >
				</el-table-column>
				<el-table-column prop="workNumber" label="工号" >
				</el-table-column>
				<el-table-column prop="departmentName" label="部门" >
				</el-table-column>
				<el-table-column prop="mobile" label="手机" >
				</el-table-column>
				<el-table-column prop="mobile" label="3/1" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/2" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/3" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/4" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/5" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/6" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/7" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/8" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/9" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/10" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/11" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/12" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/13" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/14" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/15" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/16" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/17" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/18" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/19" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/20" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/21" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/22" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/23" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/24" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/25" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/26" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/27" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/28" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/29" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/30" >旷工</el-table-column>
				<el-table-column prop="mobile" label="3/31" >旷工</el-table-column>
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
import {department,car} from '../../api/attendances'
export default {
	data () {
		return {
			data:[],/**部门 */
			tableData: [],/**表格数据 */
			total: 0,
      pageSize: 10,
      pageCount: 1,
			radio: '0'
		}
	},
	methods: {
		/**查看 */
		add(){

		},
		/**表格数据 */
		getlist(){
			car({page:this.pageCount,pagesize:this.pageSize,total:this.total}).then(res=>{
				console.log(res.data.data);
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
