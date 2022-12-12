<template>
	<div>
		<div id="main" style="width: 1200px;height:400px;"></div>
	</div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: '',
  components: {},
  data () {
	return {
		tab:[],//数据
		option:{
  title: {
    text: '用户来源'
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: 'pink'
      }
    }
  },
  legend: {
    data: ['华东', '华南', '华北', '西部', '其他']
  },
  toolbox: {
    feature: {
      saveAsImage: {}
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
      boundaryGap: false,
      data: ["2017-12-27","2017-12-28","2017-12-29","2017-12-30","2017-12-31","2018-1-1"]
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: '华东',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [2999, 3111, 4100, 3565	, 3528, 6000]
    },
    {
      name: '华南',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [5090, 2500, 3400,6000, 6400, 7800]
    },
    {
      name: '华北',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [6888,4000,8010,12321,13928,12984]
    },
    {
      name: '西部',
      type: 'line',
      stack: '总量',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [9991,4130,7777,12903,13098,14028]
    },
    {
      name: '其他',
      type: 'line',
      stack: '总量',
      label: {
        show: true,
        position: 'top'
      },
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data: [15212,5800,10241,14821,15982,14091
]
    }
  ]
}
	}
  },
  created () {
	this.$http({
		method:"get",
		url:this.$http.addorUrl("reports/type/1")
	}).then(res=>{
		if(res.data.meta.status==200){
			this.$message.success(res.data.meta.msg)
			this.tab=res.data.data
			console.log(this.tab);
		}
	})
  },
  mounted () {
 var myChart = echarts.init(document.getElementById('main'));
 myChart.setOption(this.option);
  },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>

