<template>
  <div>
    <div id="main5" style="width: 350px;height:200px;"></div>
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
    var myChart = echarts.init(document.getElementById('main5'));
    var option = {
      title: {
    text: '当前热卖品类',
    subtext: 'How Catgolow'
  },
  xAxis: {
    type: 'category',
    data: ['凤梨', '瓜子', '菠萝', '香蕉', '雪梨', '梨', '苹果']
  },
  yAxis: {
    type: 'value',
    
  },
  color: '#d7f595',
  series: [
    {
      data: [120, 50, 120, 80, 20, 120, 140],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
      
      }
    }
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
</style>
