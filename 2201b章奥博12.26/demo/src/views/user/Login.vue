<template>
<div>
    <div class="box">
        <div  id="ma2" style="width: 100px;height:100px;"></div>
        <div>
            <div class="top">
                <p>慕课外卖登录设备<span>1,365,633 <i>台</i></span></p>
                 <p>ios  of Age  clear</p>
            </div>
            <div class="bottom">
                    <div><p>522,041</p>
                          <p>Andrelld</p>
                        </div>
                    <div><p>471,645</p>
                    <p>ios</p>
                </div>
                    <div><p>371,947</p>
                    <p>PC</p>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  mounted () {
    var myChart = echarts.init(document.getElementById('ma2'));
    var option = {
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['20%', '50%'],
      center: ['60%', '50%'],
      label: {},
      data: [
        { value: 8,},
        { value: 8,},
        { value:4,},
      ],
    }
  ]
};
    option && myChart.setOption(option);
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
.box{
    background-color: #2a2b2d;
    border: 2px solid red;
    display: flex;
        font-weight: 800;
        .top{
            position: relative;
            span{
                position: absolute;
                right: -15px;
                top: -30px;
                font-size: 16px;
                padding-top: 38px;
                i{
                    font-size: 12px;
                }
            }
            p:nth-child(1){
                font-size: 15px;
            }
            p:nth-child(2){
                font-size: 5px;
            }
        }
    .bottom{
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        font-size: 10px;
    div{
        margin: 5px 10px;
    }
      
    }
}
</style>
