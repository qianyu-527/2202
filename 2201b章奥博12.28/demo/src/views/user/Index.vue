<template>
<div>
    <div class="box">
        <p>慕课外卖用户总数</p>
      <p class="sp">User Total Count</p>
      <h1>1,739,919</h1>
       <p class="sp2">每日增长率:73.90% <span>每月增长率:117.37%</span></p>
       <div id="main" style="width: 320px;height:10px;border: 1px solid #ccc;"></div>
       </div>   
</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: '',
  components: {},
  data () {
    return {
    }
  },
  created () { },
  mounted () {
    var myChart = echarts.init(document.getElementById('main'));
     var option={
    backgroundColor:"#424345",
          grid: {
            top: 0,
            bottom: 0,
            left: "0%",
            right: "10%"
          },
          xAxis: {
            show: false,
            type: "value",
            boundaryGap: [0, 0]
          },
          yAxis: [
            {
              type: "category",
              data: [""],
              axisLine: { show: false },
              axisTick: [
                {
                  show: false
                }
              ]
            }
          ],
          series: [
            {
              name: "金额",
              type: "bar",
              zlevel: 1,
              itemStyle: {
                normal: {
                  barBorderRadius: 30,
                color: new echarts.graphic.LinearGradient(1, 0, 0, 1, [
                  {
                    offset: 1,
                    color: "#939496"
                  },
                  {
                    offset: 0,
                    color: "#424345"
                  }
                ])
                }
              },
              barWidth: 20,
              data: [50]
            },
            {
              name: "背景",
              type: "bar",
              barWidth: 20,
              barGap: "-100%",
              data: [20],
              itemStyle: {
                normal: {
                  color: "#424345",
                  barBorderRadius: 30
                }
              }
            }
          ]
        }
    option && myChart.setOption(option);
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
.box{
    background-color:#424345;
    padding: 10px;
    per{
      margin-top: 10px;
    }
    .sp{
        font-size: 8px;
    }
    .sp2{
        color: #abcb79;
    }
    span{
        color: #709a33;
    }
}
p{
  font-size: 10px;
}
</style>
