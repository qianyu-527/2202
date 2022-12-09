<template>
	<div>
		<el-button type="primary" size="mini" @click="add">添加角色</el-button>
		<el-table :data="tab" style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form label-position="left" inline class="demo-table-expand">
						<el-form-item label="商品名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="所属店铺">
							<span>{{ props.row.shop }}</span>
						</el-form-item>
						<el-form-item label="商品 ID">
							<span>{{ props.row.id }}</span>
						</el-form-item>
						<el-form-item label="店铺 ID">
							<span>{{ props.row.shopId }}</span>
						</el-form-item>
						<el-form-item label="商品分类">
							<span>{{ props.row.category }}</span>
						</el-form-item>
						<el-form-item label="店铺地址">
							<span>{{ props.row.address }}</span>
						</el-form-item>
						<el-form-item label="商品描述">
							<span>{{ props.row.desc }}</span>
						</el-form-item>
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
					<el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" type="primary"></el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
					<el-button size="mini" type="warning" @click="fen(scope.$index, scope.row)" icon="el-icon-setting"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 模态框 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="角色名称" prop="roleName">
					<el-input v-model="ruleForm.roleName"></el-input>
				</el-form-item>
				<el-form-item label="角色描述" prop="roleDesc">
					<el-input v-model="ruleForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
	</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
	return {
		tab:[],//数据
		dialogFormVisible:false,
		title:"添加角色",
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
		inid:0,
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
			this.tab=res.data.data
			console.log(this.tab[0]);
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
			this.$message.success("删除成功")
			this.out()//重新渲染页面
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
			this.title="添加角色"
		},
		//点击确定
			que(){
		if(this.inid==0){
				this.$http({
					 method:"post",
			url:this.$http.addorUrl("roles"),
			data:{roleName:this.ruleForm.roleName,roleDesc:this.ruleForm.roleDesc}
			}).then(res=>{
				console.log(res);
				if(res.data.meta.status==201){
	this.$message.success(res.data.meta.msg)
				this.dialogFormVisible=false
				this.out()//重新刷新页面
				}
			})
		}else{
				this.$http({
					 method:"put",
			url:this.$http.addorUrl(`roles/${this.inid}`),
			data:{roleName:this.ruleForm.roleName,roleDesc:this.ruleForm.roleDesc}
			}).then(res=>{
				console.log(res);
				if(res.data.meta.status==200){
	this.$message.success(res.data.meta.msg)
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
			this.ruleForm.roleName=val.roleName
			this.ruleForm.roleDesc=val.roleDesc
			 this.inid=val.id
		}
  }
}
</script>
<style scoped lang='scss'>
</style>
