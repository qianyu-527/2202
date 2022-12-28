<template>
  <div class="box">
    <div class="box1">
        <div class="left">
            <img src="../../assets/icon_23l9zwmcql2/crown.png" alt="">
        </div>
        <div class="right">
            <p>今日销售额</p>
            <p>Tody</p>
            <p >56,988,472</p>
        </div>
    </div>
    <div class="box1">
        <div class="left">
            <img src="../../assets/icon_23l9zwmcql2/jishiben.png" alt="">
        </div>
        <div class="right">
            <p>今日订单量</p>
            <p>Tody</p>
            <p >56,988,472</p>
        </div>
    </div>
    <div class="box1">
        <div class="left">
            <img src="../../assets/icon_23l9zwmcql2/qiancai-.png" alt="">
        </div>
        <div class="right">
            <p>今日交易用户数</p>
            <p>Tody</p>
            <p >56,988,472</p>
        </div>
    </div>
    <div class="box1">
        <div class="left">
            <img src="../../assets/icon_23l9zwmcql2/yonghu.png" alt="">
        </div>
        <div class="right">
            <p>今日新增用户数</p>
            <p>Tody</p>
            <p >56,988,472</p>
        </div>
    </div>
    <div class="box1">
        <div>
            <div class="right">√</div>
            <p>转化率</p>
            <p>13.00%</p>
        </div>
        <div>
            <div>
            <div class="right">－</div>
            <p>退单率</p>
            <p>5.66%</p>
        </div>
        </div>
    </div>
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
    background-color: #424345;
    .box1{
        margin-left: 2px;
        display: flex;
        div{
            margin: 0 5px;
            .right{
                width:20px;
                height: 20px;
                line-height: 20px;
                text-align: center;
                background-color: #88a555;
                border-radius: 50%;
            }
        }
        .left{
            width: 50px;height: 50px;border-radius: 50%;background-color: #88a555;margin-top: 20px;
            img{
                width: 25px;height: 25px;
                margin: 10px;
            }
        }
        .right{
            padding: 10px;
        p:nth-child(2){
            font-size: 12px;
        }
        p:nth-child(3){
            font-size: 20px;
            font-weight: 700;
        }
    }
    }
}
</style>
