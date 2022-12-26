<template>
<div>
    <!-- <div id="main" style="width: 300px;height:150px;"></div> -->
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
    var option;
option && myChart.setOption(option);
  },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
