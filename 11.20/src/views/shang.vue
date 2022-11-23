<template>
    <div>
      <!-- 食品 -->
        <el-table :data="res" style="width: 100%">
            <el-table-column type="expand">
                <template slot-scope="props">
                    <el-form label-position="left" inline class="demo-table-expand">
                        <el-form-item label="食品名称">
                            <span>{{ props.row.name }}</span>
                        </el-form-item>
                        <el-form-item label="所属店铺">
                            <span>{{ props.row.description   }}</span>
                        </el-form-item>
                        <el-form-item label="食品 ID">
                            <span>{{ props.row.item_id }}</span>
                        </el-form-item>
                        <el-form-item label="餐馆 ID">
                            <span>{{ props.row.category_id }}</span>
                        </el-form-item>
                        <el-form-item label="食品评分">
                            <span>{{ props.row.rating }}</span>
                        </el-form-item>
                    </el-form>
                </template>
            </el-table-column>
            <el-table-column label="商铺名称" prop="name">
            </el-table-column>
            <el-table-column label="商家地址" prop="address">
            </el-table-column>
            <el-table-column label="店铺介绍" prop="promotion_info">
            </el-table-column>
             <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button type="primary" size="mini" @click="$router.push('/push')">添加食品</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="del(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
        </el-table>

        <!-- 模态框 -->
        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
  <el-form :model="form">
    <el-form-item label="店铺名称" >
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="详细地址" >
      <el-input v-model="form.address"></el-input>
    </el-form-item>
    <el-form-item label="店铺介绍" >
      <el-input v-model="form.jieshao"></el-input>
    </el-form-item>

       <el-form-item label="联系电话" >
      <el-input v-model="form.tel"></el-input>
    </el-form-item>
     <el-form-item label="店铺上传" >
      <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="add">确 定</el-button>
  </div>
</el-dialog>
 <!-- 分页 -->
              <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="page"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="size"
      layout="total, sizes, prev, pager, next, jumper"
      :total="tableData.length">
    </el-pagination>
    </div>
</template>

<script>
export default {
  name: "",
  components: {},
  data() {
    return {
          size:5,//几条数据
        page:1,//第几页
        form: {
         name:"",//商家名称
         jieshao:"",//商家介绍
         tel:"",//联系电话
         address:"",//详细地址
         url:"",
        },//模态框里面的
        dialogFormVisible:false,//模态框
      tableData: [],//数据
    };
  },
  created() {
    //调用数据
    this.getlist()
  },
  computed:{
    res(){
        return this.tableData.slice(this.size*(this.page-1), this.size*this.page)
    }
  },
  mounted() {},
  methods: {
       //每页几条
    handleSizeChange(val) {
        this.size=val
      },
      //第几页
      handleCurrentChange(val) {
        this.page=val
      },
    getlist(){
        this.$axios.get("https://elm.cangdu.org/shopping/restaurants?latitude=32.99073&longitude=112.528511&offset=0&limit=20").then((res) => {
            console.log(res.data);
            this.tableData=res.data
        })
    },
    // 修改
    handleEdit(i){
        this.dialogFormVisible=true//打开模态框
        // 下面的是数据返回
        this.form.name=this.tableData[i].name
        this.form.jieshao=this.tableData[i].promotion_info
        this.form.tel=this.tableData[i].phone
        this.form.address=this.tableData[i].address
        this.form.url=this.tableData[i].image_path

        console.log(i);
    },
    del(val,row){
console.log(val);
console.log(row);
this.$message({
    type: 'error', // success error warning
    message: '权限不足',
})
    },
    //点击确定
    add(){
      console.log(this.form.name);
    this.dialogFormVisible=false  
      this.$message({
    type: 'success', // success error warning
    message: '更新数据成功',
})
    }
  }
};
</script>
<style scoped lang='scss'>
</style>
