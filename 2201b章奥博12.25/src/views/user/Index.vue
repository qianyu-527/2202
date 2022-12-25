<template>
<div>
    <div class="box">
        <p>慕课外卖用户总数</p>
      <p class="sp">User Total Count</p>
      <h1>1,739,919</h1>
       <p class="sp2">每日增长率:93.90% <span>每月增长率:117.37%</span></p>
       </div>   
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
.box{
    width: 300px;
    margin: 10px;
    background-color:#424345;
    .sp{
        font-size: 12px;
    }
    .sp2{
        color: #abcb79;
    }
    span{
        color: #709a33;
    }
}
</style>
