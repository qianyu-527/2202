<template>
	<div>
		<el-card>
			<el-tabs  v-model="activeName">
				<el-tab-pane label="角色管理" name="first">
					<el-button type="primary" size="mini" @click="dialogTableVisible=true">新增角色</el-button>
					<el-table :data="$store.state.setting.car" border >
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
					<el-pagination
      @current-change="handleCurrentChange"
			:page-size="pageSize"
        :page-count="pageCount"
      :page-sizes="[10, 20, 30, 50]"
      layout=" prev, pager, next"
			:total="total">
    </el-pagination>
		<!-- 模态框 -->
		<el-dialog title="编辑弹层" :visible.sync="dialogTableVisible">
			<el-form ref="ruleForm" :model="ruleForm" :rules="rules"  label-width="80px" >
  <el-form-item label="角色名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="角色描述">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item >
   <el-button type="primary" size="mini" @click="sub('ruleForm')">确定</el-button>
   <el-button size="mini" @click="dialogTableVisible=false">取消</el-button>
  </el-form-item>
	</el-form>
</el-dialog>
				</el-tab-pane>

				<el-tab-pane label="公司信息" name="second">
					 <div class="sky">
						<!-- 图标 -->
						<p >对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改</p>
					</div>
					<el-form label-width="80px" class="form">
  <el-form-item label="公司名称">
    <el-input v-model="$store.state.setting.list.name" disabled></el-input>
  </el-form-item>
	<el-form-item label="公司地址">
    <el-input v-model="$store.state.setting.list.companyAddress" disabled></el-input>
  </el-form-item>
	<el-form-item label="邮箱">
    <el-input v-model="$store.state.setting.list.mailbox" disabled></el-input>
  </el-form-item>
	<el-form-item label="备注">
    <el-input type="textarea" v-model="$store.state.setting.list.remarks" disabled></el-input>
  </el-form-item>

	</el-form>
				</el-tab-pane>
			</el-tabs>
		</el-card>
	</div>
</template>

<script>
import {setDel,edit,add} from '@/api/setting'
export default {
	data () {
		return {
			/**分页 */
			total: 100,
      pageSize: 10,
			activeName: 'first',
      pageCount: 1,
				dialogTableVisible:false,/**模态框 */
				ruleForm:{
					name:"",
					description:"",
					id:0
				},/**编辑 */
				rules: {
          name: [
            { required: true, message: '内容不能为空', trigger: 'blur' },
          ],}
		}
	},
	methods: {
		/**分配权限 */
		handleEdit(index, row) {
        console.log(index, row);
      },
			/**编辑 */
      edit(index, row) {
				this.dialogTableVisible=true
				this.ruleForm.description=row.description
				this.ruleForm.name=row.name
				this.ruleForm.id=row.id
      },
			/**删除 */
			del(index, row) {
				this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					setDel(row.id).then(res=>{
						const {message,code}=res.data
						if(code===10000){
							/**提示 */
							this.$message.success(message)
							/**渲染页面 */
	this.$store.dispatch('setting/gentlest', {page: this.pageCount,size: this.pageSize,total: this.total})
						}
					})
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },

			handleCurrentChange(val) {
				this.pageSize = 10
				this.pageCount =val
				this.$store.dispatch('setting/gentlest', {page: this.pageCount,size: this.pageSize,total: this.total})
      },

			/**模态框确定 */
			sub() {
				if(this.ruleForm.id==0){
					add(this.ruleForm).then(res=>{
						const {message,code}=res.data
						if(code===10000){
							/**提示 */
							this.$message.success(message)
							/**渲染页面 */
							// this.getlist()
							/**关闭模态框 */
							this.dialogTableVisible=false
							/**清空 */
							this.ruleForm.name=''
							this.ruleForm.description=''
							this.ruleForm.id=0
						}
					})
				}else{
					edit(this.ruleForm).then(res=>{
						const {message,code}=res.data
						if(code===10000){
							/**提示 */
							this.$message.success(message)
							/**渲染页面 */
							// this.getlist()
							/**关闭模态框 */
							this.dialogTableVisible=false
							/**清空 */
							this.ruleForm.name=''
							this.ruleForm.description=''
							this.ruleForm.id=0
						}
					})
				}
      },

	},
	created () {

	},
	mounted () {
		 /**公司信息 */
	this.$store.dispatch('setting/gentlest', {page: this.pageCount,size: this.pageSize,total: this.total})
  /**公司信息 */
	this.$store.dispatch('setting/gest', )
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
