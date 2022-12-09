<template>
	<div>
		<el-row :gutter="20">
			<el-col :span="8">
				<el-input placeholder="请输入内容" v-model="num.query" clearable>

					<el-button slot="append" icon="el-icon-search" @click="sou"></el-button>
				</el-input>
			</el-col>
			<el-col :span="1">
				<el-button type="primary" @click="add">添加商品</el-button>
			</el-col>
		</el-row>
		<el-table :data="res" border >
			<el-table-column type="index"  label="#">
			</el-table-column>
			<el-table-column prop="goods_name" label="姓名" width="550">
			</el-table-column>
			<el-table-column prop="goods_price" label="商品价格(元)">
			</el-table-column>
			<el-table-column prop="goods_weight" label="商品重量">
			</el-table-column>
			<el-table-column  label="创建时间">
				<template v-slot="scope">
					<p>{{scope.row.add_time|fil}}</p>
				</template>
			</el-table-column>
			<el-table-column label="操作">
				<template slot-scope="scope">
					<el-button size="mini" icon="el-icon-edit" type="primary" ></el-button>
					<el-button size="mini" type="danger" @click="del(scope.$index, scope.row)" icon="el-icon-delete"></el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination @size-change="size" @current-change="page" :current-page="num.pagenum" :page-sizes="[5,10,15,20]" :page-size="num.pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tab.length">
		</el-pagination>
	</div>
</template>

<script>
export default {
	name: '',
	components: {},
	data () {
		return {
			tab:[],
			num:{
				query:"",
	   	pagenum:1,
			pagesize:800,
			},

		}
	},
	created () {
		this.getters()
	},
	mounted () { },
	filters: {
		fil(value) {
			return new Date(value*1000).toLocaleString()

		}
	},
	computed:{
		res(){
			return this.tab.slice(this.num.pagesize*(this.num.pagenum-1),this.num.pagesize*(this.num.pagenum))
		}
	},
	methods: {
		//添加
		add(){
			console.log(666);
			//跳转
			// this.$router.push('/add')

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
			url:this.$http.addorUrl(`/goods/${row.goods_id}`),
		  }).then(res=>{
			this.$message.success("删除商品成功")
			this.getters()//重新渲染页面
		  })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
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
			url:this.$http.addorUrl("goods"),
			params:this.num
		}).then(res=>{
			this.tab=res.data.data.goods
		})
	  },
	  // 搜索
	  sou(){
	this.getters()//重新渲染页面
	  }
	}
}
</script>
<style scoped lang='scss'>
</style>
