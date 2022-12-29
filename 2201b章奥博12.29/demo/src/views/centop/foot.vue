<template>
  <div>
    <div class="box">
      <div class="active">订单量</div>
      <div>销售额</div>
      <div>用户数</div>
      <div>退单量</div>
      </div>
      <div class="let">
        <div>
          <p>实时订单趋势图</p>
          <p>kaskdasd</p>
          <p>23,242</p>
          <p>每周增长率</p>
          <p><span class="sp1">2.32%</span></p>
        </div>
        <div id="bu" style="width: 420px;height:200px;"></div>
      </div>
      <img src="../../assets/1672319294803.jpg" alt="">
 </div>
</template>

<script>
import * as echarts from 'echarts';
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
    var myChart = echarts.init(document.getElementById('bu'));
    // prettier-ignore
let timeData = [
   ' 13.53:34', 
];

var option = {
 
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      animation: false
    }
  },
  dataZoom: [
    {
      show: true,
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1]
    },
    {
      type: 'inside',
      realtime: true,
      start: 30,
      end: 70,
      xAxisIndex: [0, 1]
    }
  ],
  grid: [
    {
      left: 60,
      right: 50,
      height: '45%'
    },
    {
      left: 60,
      right: 50,
      top: '5%',
      height: '5%'
    }
  ],
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      // data: timeData
    },
    {
      gridIndex: 1,
      type: 'category',
      boundaryGap: false,
      axisLine: { onZero: true },
      data: timeData,
      position: 'top'
    }
  ],
  yAxis: [
    {
      
      type: 'value',
      max: 2100
    },
    {
      gridIndex: 1,
      // name: 'Rainfall(mm)',
      type: 'value',
      inverse: true
    }
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'line',
      // symbolSize: 8,
      // prettier-ignore
      data: [1500,750,1500,340,1600,350,900,200,1480,0,1240,940,1800,300,1500,890,0,900,1300]
    },
   
  ]
};
    option && myChart.setOption(option);
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
.let{
display: flex;
text-align: center;
margin: 5px;
.sp1{
  color: #b7ce86;
}
p:nth-child(2){
font-size: 12px;
}
p:nth-child(3){
font-weight: 800;
font-size: 24px;
}
p:nth-child(4){
font-weight: 800;
font-size: 12px;
}
}
#bu{
  margin-top: -55px;
}
img{
  width: 590px;
  height: 70px;
  margin-top: -10px;
}
</style>
