<template>
    <div>
      <!--管理用户  -->
        <el-table  :data="res" style="width: 100%">
            <el-table-column type="index" width="50">
            </el-table-column>
            <el-table-column property="registe_time" label="注册日期" width="120">
            </el-table-column>
            <el-table-column property="username" label="用户姓名" width="120">
            </el-table-column>
            <el-table-column property="city" label="注册地址">
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
        size:20,//几条数据
        page:1,//第几页
        
    };
  },
  created() {
    this.$axios.get("https://elm.cangdu.org/v1/users/list?offset=0&limit=20").then((res) => {
        console.log(res.data);
        this.tableData=res.data
    })
  },
  mounted() {},
  computed:{
    res(){
        return this.tableData.slice(this.size*(this.page-1), this.size*this.page)
    }
  },
  methods: {
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
