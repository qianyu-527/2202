<template>
	<div>
		<el-button type="primary" size="mini" @click="add">添加角色</el-button>
		<el-table :data="tab" style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
					</el-form>
				</template>
			</el-table-column>
			<el-table-column type="index" width="50" label="#">
			</el-table-column>
			<el-table-column label="商品 ID" prop="id">
			</el-table-column>
			<el-table-column label="角色名称" prop="roleName">
			</el-table-column>
			<el-table-column label="角色描述" prop="roleDesc">
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" type="primary">编辑</el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)" icon="el-icon-delete">删除</el-button>
					<el-button size="mini" type="warning" @click="fen(scope.$index, scope.row)" icon="el-icon-setting">分配权限</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 模态框 -->
		<update ref="user" :title="title" :flag="flag" @que="que"></update>
		<!-- 分配权限 -->
	</div>
</template>

<script>
import update from './Rolesupdate'
export default {
  components: {update},
  data () {
	return {
		tab:[],//数据
		dialogFormVisible:false,
		title:"添加角色",
		flag:0,
		ruleForm:{
			roleName:"",
			roleDesc:""
		},
		rules:{
			 roleName: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
		  roleDesc: [
            { required: true, message: '请输入用户描述', trigger: 'blur' },
          ],
		},
	}
  },
  created () {
	this.out()
  },
  mounted () { },
  methods: {
	out(){
		this.$http({
			method:"get",
			url:this.$http.addorUrl("roles")
		}).then((res) => {
			const {status,msg}=res.data.meta
			if(status===200){
				this.tab=res.data.data
			}else{
				this.$message.error(msg)
			}
		})
	},
	//删除
		del(i,row){
 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
			 method:"delete",
			url:this.$http.addorUrl(`roles/${row.id}`),
		  }).then(res=>{
			console.log(res);
			const {status,msg}=res.data.meta
			if(status===200){
			this.out()//重新渲染页面
			this.$message.success(msg)
			}else{
				this.$message.error(msg)
			}
		  })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},
		//点击添加按钮
		add(){
			this.dialogFormVisible=true
					/***清空*/
			this.title="添加角色"
			this.$nextTick(() => {
				this.$refs.user.info()
			})
		},
		//点击确定
			que(val){
		if(this.flag==0){
				this.$http({
					 method:"post",
			url:this.$http.addorUrl("roles"),
			data:{roleName:val.roleName,roleDesc:val.roleDesc}
			}).then(res=>{
				const {status,msg}=res.data.meta
				if(status==201){
	this.$message.success(msg)
				this.dialogFormVisible=false
				this.out()//重新刷新页面
				}
			})
		}else{
				this.$http({
					 method:"put",
			url:this.$http.addorUrl(`roles/${this.flag}`),
			data:{roleName:val.roleName,roleDesc:val.roleDesc}
			}).then(res=>{
				const {status,msg}=res.data.meta
				if(status==200){
	this.$message.success(msg)
				this.dialogFormVisible=false
				this.out()//重新刷新页面
				}
			})
		}
		},
		// 编辑
		edit(i,val){
			this.dialogFormVisible=true
			this.title="编辑用户"
			 this.flag=val.id
			this.$nextTick(() => {
				this.$refs.user.into(val)
			})
		},
		/**分配权限 */
		fen(){
			this.dialogFormVisible=true
			this.dia=true
			this.$nextTick(() => {
				this.$refs.user.ino()
			})
		}
  }
}
</script>
<style scoped lang='scss'>
</style>
