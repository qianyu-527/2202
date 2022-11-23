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
            <el-table-column label="食品名称" prop="name">
            </el-table-column>
            <el-table-column label="食品介绍" prop="description">
            </el-table-column>
            <el-table-column label="评分" prop="rating">
            </el-table-column>
             <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
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
    <el-form-item label="活动名称" >
      <el-input v-model="form.name"></el-input>
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
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },//模态框里面的
        dialogFormVisible:false,//模态框
      tableData: [
        {
          id: "12987122",
          name: "",
          category: "江浙小吃、小吃零食",
          desc: "荷兰优质淡奶，奶香浓而不腻",
          address: "上海市普陀区真北路",
          shop: "王小虎夫妻店",
          shopId: "10333"
        }
      ],//数据
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
        this.$axios.get("https://elm.cangdu.org/shopping/v2/foods?offset=100&limit=20&restaurant_id=undefined").then((res) => {
            console.log(res.data);
            this.tableData=res.data
        })
    },
    // 修改
    handleEdit(){
        this.dialogFormVisible=true
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
    this.dialogFormVisible=false  
      this.$message({
    type: 'error', // success error warning
    message: '权限不足',
})
    }
  }
};
</script>
<style scoped lang='scss'>
</style>
