<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<el-input placeholder="请输入内容" v-model="num.query" clearable>

					<el-button slot="append" icon="el-icon-search" @click="change"></el-button>
				</el-input>
			</el-col>
			<el-col :span="1">
				<el-button type="primary" @click="add">添加用户</el-button>
			</el-col>
		</el-row>
		<el-table :data="res">
			<el-table-column type="index" width="50" label="#">
			</el-table-column>
			<el-table-column prop="username" label="姓名">
			</el-table-column>
			<el-table-column prop="email" label="邮箱">
			</el-table-column>
			<el-table-column prop="mobile" label="电话">
			</el-table-column>
			<el-table-column prop="role_name" label="角色">
			</el-table-column>
			<el-table-column label="状态">
				<template slot-scope="scope">
					<el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949" @change="change(scope.row)">
					</el-switch>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" type="primary" ></el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
					<el-button size="mini" type="warning"  @click="fen(scope.$index, scope.row)" icon="el-icon-setting"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="size" @current-change="page" :current-page="num.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tab.length">
		</el-pagination>

		<!-- 模态框 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
				<el-form-item label="用户名" prop="username">
					<el-input v-model="ruleForm.username" :disabled="!flag"></el-input>
				</el-form-item>
				<el-form-item label="密码" prop="password" v-show="!msg">
					<el-input v-model="ruleForm.password" v-show="!msg"></el-input>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="ruleForm.email"></el-input>
				</el-form-item>
				<el-form-item label="电话" prop="mobile">
					<el-input v-model="ruleForm.mobile"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>

		<!-- 权限 -->
		<el-dialog title="分配角色" :visible.sync="login">
  <el-form :model="form">
    <el-form-item label="当前的用户:">
     <p>{{form.username}}</p>
    </el-form-item>
	 <el-form-item label="当前的角色:">
     <p>{{form.role_name}}</p>
    </el-form-item>
    <el-form-item label="分配新角色：">
      <el-select v-model="form.region" placeholder="请选择">
        <el-option label="请选择" :value="-1"></el-option>
        <el-option label="11" :value="0"></el-option>
        <el-option label="22" :value="1"></el-option>
        <el-option label="123" :value="2"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="login = false">取 消</el-button>
    <el-button type="primary" @click="ok">确 定</el-button>
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
			login:false,//权限
			form:{username:"",role_name:"",region:-1,id:0},//权限
			input3:"",
			flag:false,//状态
			msg:true,//密码框
			tab:[],
			num:{
				query:"",
		   pagenum:1,
			pagesize:10,
			},
			 inid:0,//编辑
			dialogFormVisible:false,//模态框
			  ruleForm: {
          username: '',password:"",email:"",mobile:""
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
		  password: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
		  mobile: [
					{ required: true, message: '请输入手机号', trigger: 'blur' },
					{
						pattern: /^1[3456789]\d{9}$/,
						message: '请输入正确手机号',
						trigger: 'blur',
					},
				],
			email: [
					{ required: true, message: '请输入邮箱', trigger: 'blur' },
					{
						pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
						message: '请输入正确邮箱',
						trigger: 'blur',
					},
				],
        },
		title:"添加用户"
		}
	},
	created () {
		this.getters()
	},
	mounted () { },
	computed:{
		res(){
			return this.tab.slice(this.num.pagesize*(this.num.pagenum-1),this.num.pagesize*(this.num.pagenum))
		}
	},
	methods: {
		//添加
		add(){
			this.dialogFormVisible=true
			this.title="添加用户",
			this.flag=true
			this.msg=false
		},
		//确定
		que(){
			if(this.inid==0){
				this.$http({method:"post",url:this.$http.addorUrl("users"),
			data:{username:this.ruleForm.username,password:this.ruleForm.password,email:this.ruleForm.email,mobile:this.ruleForm.mobile}
			}).then(res=>{
				console.log(res);
				this.$message.success("添加成功")
				this.dialogFormVisible=false
				this.getters()//重新刷新页面
			})
			}else{
	  // 编辑
				this.$http({
					method:"put",
					url:this.$http.addorUrl(`users/${this.inid}`),
					data:{email:this.ruleForm.email,mobile:this.ruleForm.mobile}
				}).then(res=>{
					if(res.data.meta.status==200){
						// 判断状态码  提示信息和渲染页面
						this.$message.success(res.data.meta.msg)
						this.dialogFormVisible=false
						this.getters()
					}
				})
			}
		},
		// 编辑
		edit(i,val){
			console.log(val);
			// 因为是一个模态框 所以编辑和添加文字 互换打开模态框 并且 一个显示禁用一个 隐藏
			this.dialogFormVisible=true
			this.title="编辑用户"
			this.flag=false
			this.msg=!false
			this.ruleForm.username=val.username
			this.ruleForm.email=val.email
			this.ruleForm.mobile=val.mobile
			 this.inid=val.id

		},
		//修改状态
		change(i){
			this.$http({method:"put",url:this.$http.addorUrl(`users/${i.id}/state/${i.mg_state}`),}).then(res=>{
				if(res.data.meta.status==200){
					// 判断状态 进行提示和刷新页面
				this.$message.success(res.data.meta.msg)
				this.getters()
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
			url:this.$http.addorUrl(`/users/${row.id}`),
		  }).then(res=>{
			this.$message.success("删除成功")
			this.getters()//重新渲染页面
		  })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},
		//分配权限
		fen(i,val){
			// 赋值打开模态框
			   this.form.role_name=val.role_name
			   this.form.username=val.username
			   this.form.id=val.id
			this.login=true
		},
		ok(){
			this.$http({
				method:"put",
				url:this.$http.addorUrl(`users/${this.form.id}/role`),
			}).then(res=>{
				this.$message.success("更新成功")
				this.getters()
				this.login=false
			})
		},
		//每页页码  和每页的页数
		  size(val) {
		this.num.pagesize=val
      },
      page(val) {
		this.num.pagenum=val
      },
	  // 数据
	  getters(){
		this.$http({
			method:"get",
			url:this.$http.addorUrl("/users"),
			params:this.num
		}).then(res=>{
			this.tab=res.data.data.users
		})
	  },
	  // 搜索
	  change(){
		  this.getters()
	  }
	}
}
</script>
<style scoped lang='scss'>
</style>
