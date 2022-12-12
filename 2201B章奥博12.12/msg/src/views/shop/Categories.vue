<template>
	<div>
		<el-button type="primary" @click="add">添加分类</el-button>
		<el-card>
			<el-table :data="res" row-key="cat_id" border default-expand-all :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
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
		<el-dialog :title="title" :visible.sync="dialogFormVisible">

			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="分类名称">
					<el-input v-model="form.cat_name"></el-input>
				</el-form-item>
				<el-form-item label="父级分类" v-show="flag">
					<el-cascader :options="form.options" v-show="flag" :props="{ checkStrictly: true }" clearable></el-cascader>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 分页 -->
		 <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="num.pagenum"
      :page-sizes="[1,5,10,20]"
      :page-size="num.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tab.length">
    </el-pagination>
	</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
	return {
		tab:[],//数据
		flag:false,
		dialogFormVisible:false,//模态框
		form:{
			cat_name:"",options:[]
		},
		title:"添加商品分类",
		ind:0,
		num:{
		   pagenum:1,
			pagesize:10,
			},
	}
  },
  created () {
	this.get()
  },
  mounted () { },
  computed:{
	res(){
			return this.tab.slice(this.num.pagesize*(this.num.pagenum-1),this.num.pagesize*(this.num.pagenum))
		}
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
			if(res.data.meta.status==200){
				this.$message.success(res.data.meta.msg)
				this.get()
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
			console.log(val);
			this.dialogFormVisible=true
			this.flag=false
			this.title='修改分类'
			this.form.cat_name=val.cat_name
			this.ind=val.cat_id
			console.log(this.inid);
		},
			//获取数据
	get(){
		this.$http({method:"get",url:this.$http.addorUrl("categories"),data:9}).then((res) => {
			// console.log(res.data.data);
			if(res.data.meta.status==200){
				// this.$message.success(res.data.meta.msg)
				this.tab=res.data.data
			}
		})
	},
	//添加分类
	add(){
		this.dialogFormVisible=true
		this.flag=true
		this.title="添加商品分类"
		this.form.cat_name=''
		this.ind=0
	},
	que(){
		// 判断有没有id 是0就是添加不是就是修改
		if(this.ind==	0){
			this.$http({
			method:"post",
			url:this.$http.addorUrl("categories"),
			data:{cat_name:this.form.cat_name,cat_level:0,cat_pid:0}
		}).then(res=>{
			if(res.data.meta.status==201){
				this.$message.success(res.data.meta.msg)
				this.get()
				this.dialogFormVisible=false
			}
		})
		}else{
this.$http({
			method:"put",
			url:this.$http.addorUrl(`categories/${this.ind}`),
			data:{cat_name:this.form.cat_name}
		}).then(res=>{
			console.log(res.data);
			if(res.data.meta.status==200){
				this.$message.success(res.data.meta.msg)
				this.get()
				this.dialogFormVisible=false
			}
		})
		}
	},
	//分页
	handleSizeChange(val) {
        this.num.pagesize=val
      },
      handleCurrentChange(val) {
       this.num.pagenum=val
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
