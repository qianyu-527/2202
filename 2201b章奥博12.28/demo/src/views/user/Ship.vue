<template>
<div>
    <div id="ma4" style="width: 420px;height:100px;"></div>
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
    var myChart = echarts.init(document.getElementById('ma4'));
    var option;
    var charts = {
    unit: '慕课外卖骑手情况',
    names: ['去年骑手', '今年骑手'],
    lineX: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月',],
    value: [
        [123,213,200,214,300,100,314,287,188,300,400,188],
        [198,287,300,300,324,387,200,300,200,400,587,231]
    ]

}
var color = [ 'rgba(210, 238, 148','rgba(205, 73, 62','rgba(133, 196, 237'];
var lineY = []

for (var i = 0; i < charts.names.length; i++) {
    var x = i
    if (x > color.length - 1) {
        x = color.length - 1
    }
    var data = {
        name: charts.names[i],
        type: 'line',
        color: color[x] + ')',
        smooth: true,
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: color[x] + ', 0)'
                }, {
                    offset: 0.8,
                    color: color[x] + ', 0)'
                }], false),
            }
        },
        data: charts.value[i]
    }
    lineY.push(data)
}

lineY[0].markLine = {
    silent: true,
    data: [{
        yAxis: 5
    }, {
        yAxis: 100
    }, {
        yAxis: 200
    }, {
        yAxis: 300
    }, {
        yAxis: 400
    }]
}
var option = {
    backgroundColor:'#2a2b2d',
    legend: {
        data: charts.names,
        textStyle: {
            fontSize: 10,
            color: 'rgb(215, 244, 151)'
        },
    },
    grid: {
        top: '28%',
        left: '4%',
        right: '4%',
        bottom: '12%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
    },
    yAxis: {
        name: charts.unit,
        splitLine: {
            lineStyle: {
                color: '#ccc'
            }
        }
    },
    series: lineY
}
setInterval(() => {
    myChart.setOption({
      legend: {
        selected: {
          '出口': false,
          '入口': false
        }
      }
    })
    myChart.setOption({
      legend: {
        selected: {
          '出口': true,
          '入口': true
        }
      }
    })
},10000)
option && myChart.setOption(option);
  },
  methods: {}
}
</script>
<style scoped lang='scss'>
</style>
