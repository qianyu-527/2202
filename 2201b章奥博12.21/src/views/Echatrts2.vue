<template>
<div>
    <p>是啊</p>
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
  },
  methods: {}
}
</script>
<style scoped lang='scss'>

</style>
