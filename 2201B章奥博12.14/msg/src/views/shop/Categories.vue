<template>
	<div>
		<el-button type="primary" @click="add">添加分类</el-button>
		<el-card>
			<el-table :data="tab" row-key="cat_id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
				<el-table-column type="index" label="#">
				</el-table-column>
				<el-table-column prop="cat_name" label="分类名称" sortable>
				</el-table-column>
				<el-table-column prop="cat_deleted" label="是否有效">
					<i class="el-icon-success"></i>
				</el-table-column>
				<el-table-column prop="cat_cat_level" label="排序">
					<template slot-scope="scope">
						<el-tag v-if="scope.row.cat_level==0?'scope.row.cat_level':''" effect="dark">一级</el-tag>
						<el-tag type="success" v-else-if="scope.row.cat_level==1?'scope.row.cat_level':''" effect="dark">二级</el-tag>
						<el-tag type="info" v-else>三级</el-tag>
					</template>
				</el-table-column>
				<el-table-column label="操作">
					<template slot-scope="scope">
						<el-button size="mini" @click="edit(scope.$index, scope.row)" icon="el-icon-edit" type="primary"></el-button>
						<el-button size="mini" type="danger" @click="del(scope.row.cat_id)" icon="el-icon-delete"></el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<!-- 模态框 -->

		<cateUpdate ref="update" :title="title" @que="que" :flag="flag" :tab="tab"></cateUpdate>
		<!-- 分页 -->
		<el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="num.pagenum" :page-sizes="[1,5,10,20]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tab.length">
		</el-pagination>
	</div>
</template>

<script>
import cateUpdate from './Cateupdate'
import {STATUS} from '../../../constStatus/initStatus.js'
export default {
  name: '',
  components: {cateUpdate},
  data () {
	return {
		tab:[],//数据
		dialogFormVisible:false,//模态框
		ind:0,
		num:{
		   pagenum:1,
			pagesize:5,
			},
			title:"添加分类",
		flag:0,

	}
  },
  created () {
	this.get()
  },
  methods: {

	//删除
		del(id){
			   this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$http({
			   method:"delete",
			   url:this.$http.addorUrl(`categories/${id}`)
		  }).then(res=>{
			const {status,msg}=res.data.meta
				if(status===STATUS.SUCCESS){
				this.$message.success(res.data.meta.msg)
				this.dialogFormVisible=false
			}
		  })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
		},
		//编辑
		edit(i,val){
			this.dialogFormVisible=true
			this.title='修改分类'
		   this.flag=val.cat_id
			this.$nextTick(() => {
				this.$refs.update.into(val)
			})
		},
			//获取数据
	get(){
		this.$http({method:"get",url:this.$http.addorUrl("categories"),data:9}).then((res) => {
			 const {status,msg}=res.data.meta
			if(status===STATUS.SUCCESS){
				this.tab=res.data.data
			}
		})
	},
	//添加分类
	add(){
		this.dialogFormVisible=true
		this.title='添加分类'
		this.flag=0,
		this.$nextTick(() => {
			this.$refs.update.info()
		})
	},
	que(val){
		if(this.flag==0){
			this.$http({
				method:"post",
				url: this.$http.addorUrl("categories"),
					 data: val
			}).then(res=>{
				const {status,msg}=res.data.meta
				if(status===STATUS.SUCCESS){
					this.get()
					this.dialogFormVisible=true
					this.$message.success(msg)
				}
			})
		}else{
			console.log(val);
	this.$http({
				method:"put",
				url: this.$http.addorUrl(`categories/${this.flag}`),
					 data: val
			}).then(res=>{
				const {status,msg}=res.data.meta
				if(status===STATUS.SUCCESS){
					this.dialogFormVisible=true
					this.$message.success(msg)
					this.get()
				}
			})
		}
	},
	//分页
	handleSizeChange(val) {
        this.num.pagesize=val
		    this.get()
      },
      handleCurrentChange(val) {
       this.num.pagenum=val
	      this.get()
      }

  }
}
</script>
<style scoped lang='scss'>
.el-result {
  font-size: 16px;
}
i {
  color: green;
}
</style>
