<template>
  <div>
    <div class="box">
      <p>慕课外卖用户年龄分布&平均年龄 </p>
      <p><span>ios Of Age</span> <span class="sp1">30.08 <i>岁</i></span></p>
      <div id="ma1" style="width: 320px;height:70px;"></div>
      <div class="but">
        <div>
          <p>304,378</p>
          <p> 0-20</p>
        </div>
        <div>
          <p>304,378</p>
          <p> 20-30</p>
        </div>
        <div>
          <p>304,378</p>
          <p> 30-50</p>
        </div>
        <div>
          <p>304,378</p>
          <p>>50</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  mounted () { 
    var myChart = echarts.init(document.getElementById('ma1'));
    var option = {
  grid: {
    left: '0%',
    right: '0%',
    bottom: '0%',
    containLabel: true
  },
  xAxis: {
    type: 'value'
  },
  yAxis: {
    type: 'category',
    data: ['' ]
  },
  series: [
    {
      name: '0-20',
      type: 'bar',
      stack: 'total',
      
      emphasis: {
        focus: 'series'
      },
      data: [304]
    },
    {
      name: '20-30',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [505]
    },
    {
      name: '30-50',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [725]
    },
    {
      name: '>50',
      type: 'bar',
      stack: 'total',
      emphasis: {
        focus: 'series'
      },
      data: [204]
    },
  ]
};

option && myChart.setOption(option);
  },
}
</script>
<style scoped lang='scss'>
.box {
	background-color: #2a2b2d;
	border: 1px solid steelblue;
	position: relative;
	padding-left: 10px;
	p:nth-child(2) {
		font-size: 12px;
	}
	.sp1 {
		position: absolute;
		right: 0px;
		top: 10px;
		font-weight: 800;
		font-size: 25px;
		i {
			font-weight: 400;
			font-size: 12px;
		}
	}
	.but {
		display: flex;
		justify-content: space-around;
		margin-bottom: 20px;
		p:nth-child(1) {
			font-weight: 800;
		}
	}
}
</style>
