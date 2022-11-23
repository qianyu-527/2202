<template>
  <div>
    <!-- 首页 -->
    <h1>数据统计</h1>
    <div>
      <el-button type="warning">当日数据:</el-button>
      <el-button>1新增用户</el-button>
      <el-button>0 新增订单</el-button>
      <el-button>7 新增管理员</el-button>
    </div>
    <div>
      <el-button type="primary">总数据：</el-button>
      <el-button>69856 注册用户</el-button>
      <el-button>32682 订单</el-button>
      <el-button>124662 管理员</el-button>
    </div>
    <div id="main" style="width: 1200px;height:400px;"></div>
  </div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "",
  components: {},
  data() {
    return {
      option:  {
  title: {
    text: '走势图'
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {},
  toolbox: {
    show: true,
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      dataView: { readOnly: false },
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['2022-11-14', '2022-11-15', '2022-11-16', '2022-11-17', '2022-11-18', '2022-11-19', '2022-11-20']
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} °C'
    }
  },
  series: [
    {
      name: '新增注册用户',
      type: 'line',
      data: [18, 13, 29, 17, 8, 11, 1],
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
      markLine: {
        data: [{ type: 'average', name: 'Avg' }]
      }
    },
    {
      name: '新增订单',
      type: 'line',
      data: [3, 5, 8, 6, 2, 5, 9],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%', 
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    },
      {
      name: '新增管理员',
      type: 'line',
      data: [63,47,85,68,60,30,7],
      markPoint: {
        data: [{ name: '周最低', value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: 'average', name: 'Avg' },
          [
            {
              symbol: 'none',
              x: '90%',
              yAxis: 'max'
            },
            {
              symbol: 'circle',
              label: {
                position: 'start',
                formatter: 'Max'
              },
              type: 'max',
              name: '最高点'
            }
          ]
        ]
      }
    }
  ]
}
    };
  },
  created() {},
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.option);
  },
  methods: {}
};
</script>
<style scoped lang='scss'>
</style>
