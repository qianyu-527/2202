<template>
    <div>
      <!-- 用户 -->
        <el-table :data="res" style="width: 100%">
            <el-table-column prop="user_name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="create_time" label="注册日期" width="180">
            </el-table-column>
            <el-table-column prop="city" label="地址">
            </el-table-column>
            <el-table-column prop="admin" label="权限">
            </el-table-column>
        </el-table>
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
        tableData:[],//数据
        size:5,//几条数据
        page:1,//第几页
    };
  },
  created() {
    //调用数据
    this.getlist()
  },
  mounted() {},
  computed:{
    res(){
        return this.tableData.slice(this.size*(this.page-1), this.size*this.page)
    }
  },
  methods: {
    //封装数据
    getlist(){
        this.$axios.get("https://elm.cangdu.org/admin/all?offset=0&limit=20").then((res) => {
            console.log(res.data.data);
            this.tableData=res.data.data

        })
    },
    //每页几条
    handleSizeChange(val) {
        this.size=val
      },
      //第几页
      handleCurrentChange(val) {
        this.page=val
      }
  }
};
</script>
<style scoped lang='scss'>
</style>
