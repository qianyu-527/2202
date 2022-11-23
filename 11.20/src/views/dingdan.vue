<template>
<div>
  <!-- 订单 -->
     <el-table :data="res" style="width: 100%">
            <el-table-column prop="restaurant_id" label="订单id" >
            </el-table-column>
            <el-table-column prop="time_pass" label="总价格" >
            </el-table-column>
            <el-table-column prop="is_brand" label="订单状态">
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
  name: '',
  components: {},
  data () {
    return {
      tableData:[],//数据
      size:5,//几条数据
        page:1,//第几页
    }
  },
  created () { 
    this.$axios.get("https://elm.cangdu.org/bos/orders?offset=0&limit=20&restaurant_id=undefined").then((res) => {
      this.tableData=res.data
      console.log(this.tableData);
    })
  },
  mounted () { },
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
}
</script>
<style scoped lang='scss'>

</style>
