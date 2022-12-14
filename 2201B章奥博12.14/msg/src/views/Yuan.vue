<template>
	<div>
		<el-card>
			<div id="main" style="width: 600px;height:400px;"></div>
			<div id="main2" style="width: 600px;height:400px;"></div>
		</el-card>
	</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: '',
  components: {},
  data () {
	return {
		option : {
  title: {
    text: '原型',
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 2999, name: '华东' },
        { value: 5090, name: '华南' },
        { value: 6888, name: '华北' },
        { value: 9991, name: '西部' },
        { value: 15212, name: '其他' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
},
option2: {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
}
	}
  },
  created () { },
  mounted () {
	var myChart = echarts.init(document.getElementById('main'));
	myChart.setOption(this.option);
		var myChart2 = echarts.init(document.getElementById('main2'));
	myChart2.setOption(this.option2);
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
