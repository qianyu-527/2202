<template>
<div>
    <div class="box">
        <div class="left"></div>
        <div>
            <div class="top">
                <p>慕课外卖登录设备<span>1,365,633 <i>台</i></span></p>
        <p>ios  of Age  clear</p>
            </div>
            <div class="bottom">
                    <div><p>522,041</p>
                          <p><span>Andrelld</span></p></div>
                    <div><p>471,645</p>
                    <p><i></i><span>ios</span></p></div>
                    <div><i></i><p>371,947</p>
                    <p><i></i><span>PC</span></p></div>
            </div>
        </div>
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
    background-color: #2a2b2d;
    display: flex;
        font-weight: 800;
        .top{
            span{
                font-size: 35px;
                padding-top: 38px;
                i{
                    font-size: 12px;
                }
            }
            p:nth-child(2){
                font-size: 12px;
            }
        }
    .bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
        span{
            font-weight: 400;
        }
    }
}
</style>
