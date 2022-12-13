<template>
	<div>
		<el-card>
			<div id="main" style="width: 600px;height:400px;"></div>
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
}
	}
  },
  created () { },
  mounted () {
	var myChart = echarts.init(document.getElementById('main'));
	myChart.setOption(this.option);
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
