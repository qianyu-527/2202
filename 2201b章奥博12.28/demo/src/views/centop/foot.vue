<template>
  <div>
    <div class="box">
      <div class="active">订单量</div>
      <div>销售额</div>
      <div>用户数</div>
      <div>退单量</div>
      </div>
      <p>是是是</p>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
.box{
  display: flex;
  color: #ccc;
  margin: 0 0 5px 0;
  .active{
    color: aliceblue;
    background-color:#b7ce86;
  }
  div{
    width: 585px;height: 20px;
    background-color: #35383f;
    text-align: center;line-height: 20px;
    padding: 5px;
  }
}
</style>
