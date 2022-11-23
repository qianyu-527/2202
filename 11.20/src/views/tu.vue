<template>
<div>
    <!-- 图 -->
    <div id="main" style="width: 600px;height:400px;"></div>
</div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: '',
  components: {},
  data () {
    return {
      option:{
  title: {
    text: '用户分布',
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
        { value: 220, name: '北京' },
        { value: 110, name: '上海' },
        { value: 110, name: '深圳' },
        { value: 70, name: '杭州' },
        { value: 950, name: '其他' }
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
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.option); },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
