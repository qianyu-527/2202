<template>
	<div>
		<el-card>
			<el-row :gutter="20">
			<el-col :span="6">
				<el-input placeholder="请输入内容" v-model="num.query" clearable>

					<el-button slot="append" icon="el-icon-search" @click="sou"></el-button>
				</el-input>
			</el-col>
			<el-col :span="1">
				<el-button type="primary" @click="add">添加用户</el-button>
			</el-col>
		</el-row>
		<el-table :data="tab">
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
					<el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" type="primary"></el-button>
					<el-button size="mini" type="danger" @click="del(scope.row.id)" icon="el-icon-delete"></el-button>
					<el-button size="mini" type="warning" @click="fen( scope.row)" icon="el-icon-setting"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="num.pagenum" :page-sizes="[1, 2, 5, 10]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="total">
		</el-pagination>
		</el-card>

		<!-- 模态框 -->
		<update v-if="dialogFormVisible" ref="usersUpdate" @que="que" :title="title" :flag="flag"></update>
	</div>
</template>

<script>
import {status} from '../../../constStatus/initStatus.js'/***状态码*/
import update from './Usersupdate'/***子组件*/
import {getUser}from '../../../api/index.js'
export default {
	components: {update},
	data () {
		return {
			// login:false,//权限
			// form:{username:"",role_name:"",region:-1,id:0},//权限
			tab:[],/***请求的数据*/
			num:{
				query:"",
		   pagenum:1,
			pagesize:5,
			},
			dialogFormVisible:false,/***模态框*/
			login:false,/***分配*/
			total:0,/***总数量*/
			flag:-1,/***是-1就添加不是就编辑*/
				title:"添加用户",
				ind:0,/**分配*/
		}
	},
	created () {
		this.init()
	},
	methods: {

		//每页页码  和每页的页数
		  handleSizeChange(val) {
		  this.num.pagesize=val
		  this.init()
      },
      handleCurrentChange(val) {
		this.num.pagenum=val
		  this.init()
      },
	  init(){
		 this.$http({
        method: "get",
        url: this.$http.addorUrl("/users"),
        params: this.num
      }).then((res) => {
        // console.log(res)
		    const {msg,status}=res.data.meta
        if (status ==200) {
          this.tab = res.data.data.users
          this.total = res.data.data.total
        }
      })
	  },
	  /***添加或者修改模态框显示隐藏*/
	  add(){
		this.dialogFormVisible=true
			this.title="添加用户",
			this.flag=-1
			this.$nextTick(() => {
				this.$refs.usersUpdate.info()
			})
	  },
	  /***删除*/
	  del(row){
		console.log(row);
		 this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
			/***点击确定删除*/
         this.$http({
            method: "delete",
            url: this.$http.addorUrl(`/users/${row}`)
          }).then((res) => {
            const {msg,status}=res.data.meta
              if (status === 200) {
				     this.$message.success(msg)
                this.init()
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
	  /***编辑*/
	  edit(i,row){
		this.title="编辑用户"
		this.flag=row.id
		this.dialogFormVisible=true
		this.$nextTick(() => {
			this.$refs.usersUpdate.into(row)
		})
	  },
	  /***状态修改*/
	  change(row){
		console.log(row);
		  this.$http({
        method: "put",
        url: this.$http.addorUrl(`users/${row.id}/state/${row.mg_state}`)
      }).then((res) => {
       const {msg,status}=res.data.meta
              if (status === 200) {
				     this.$message.success(msg)
                this.init()
              }else{
				this.$message.error(msg)
			  }
      })
	  },
	  /***点击分配权限*/
	  fen(row){
		 this.dialogFormVisible=true
		 this.login=true
		 this.$nextTick(() => {
			this.$refs.usersUpdate.ind(row)
		 })
	  },
	  /***搜索*/
	  sou(){
		this.init()//重新渲染页面
	  },
	  /***点击确定*/
	  que(val){
		console.log(val.id);
		/***判断是不是-1是了添加不是编辑*/
			if(this.flag==-1){
				 this.$http({
        method: "post",
        url: this.$http.addorUrl("users"),
		data:{username:val.username,password:val.password,email:val.email,mobile:val.mobile}
      }).then((res) => {
       const {msg,status}=res.data.meta
              if (status === 201) {
				     this.$message.success(msg)

              }else{
				this.$message.error(msg)
			  }
      })
			}else{
				this.$http({
					method:"put",
					url:this.$http.addorUrl(`users/${this.flag}`),
					data:{email:val.email,mobile:val.mobile}
				}).then(res=>{
				  const {msg,status}=res.data.meta
              if (status === 200) {
				     this.$message.success(msg)
					   this.init()
              }else{
				this.$message.error(msg)
			  }
				})
			}

	  }
	}
}
</script>
<style scoped lang='scss'>
</style>
