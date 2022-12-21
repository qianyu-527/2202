<template>
  <div class="title">
    <!-- 头部 -->
    <div class="head">
      <p>2021/7/24 14:40:48</p>
      <p class="i">双数智慧公卫-传染病督导平台</p>
      <p>长沙双数科技有限公司</p>
    </div>
    <!-- 中间部分 -->
    <div class="body">
      <!-- 中间左边 -->
      <div class="left">
        <!-- 上边 -->
        <div class="top">
          <div class="box1">
            <p>当日情况</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img2">
            </div>
          </div>
          <div class="box2">
            <ul>
              <li>
                <div><img src="../assets/images/icona.png"></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>1358</span>人</p>
                </div>
              </li>
              <li>
                <div><img src="../assets/images/iconb.png"></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>1983</span>人</p>
                </div>
              </li>
              <li>
                <div><img src="../assets/images/iconc.png"></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>930</span>人</p>
                </div>
              </li>
              <li>
                <div><img src="../assets/images/icond.png"></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>371</span>人</p>
                </div>
              </li>
              <li>
                <div><img src="../assets/images/icone.png"></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>1683</span>人</p>
                </div>
              </li>
              <li>
                <div><img src="../assets/images/iconf.png" alt=""></div>
                <div>
                  <p>今日就诊人数</p>
                  <p><span>1091</span>人</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <!-- 下面 -->
        <div class="bottom">
          <div class="box1">
            <p>法定传染病检测</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img3">
              <img src="../assets/images/line2.png" class="img4">
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>发病统计</th>
                <th>甲类</th>
                <th>乙类</th>
                <th>丙类</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>发病数(万)</td>
                <td>0.03 <span class="sp1">0.01%</span></td>
                <td>163.00 <span class="sp2">4.01%</span></td>
                <td>163.00 <span class="sp2">4.01%</span></td>
              </tr>
              <tr>
                <td>发病率(%)</td>
                <td>0.3 <span class="sp1">0.01%</span></td>
                <td>100% <span class="sp2">4.01</span></td>
                <td>81.92% <span class="sp2">4.01</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- 中间 -->
      <div class="center">
       <div>
        <img src="../assets/images/map.png" alt="">
       </div>
      </div>
      <!-- 右边 -->
      <div class="right">
        <!-- 上边-->
        <div class="top">
          <div class="box1">
            <p>同期对比</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img4">
            </div>
          </div>
          <div class="box2">
            <div>
              <p>就诊人数</p>
            </div>
             <div>
              <p>触发次数</p>
            </div>
             <div>
              <p>触发卡数</p>
            </div>
             <div>
              <p>去重卡数</p>
            </div>
             <div>
              <p>报卡时间</p>
            </div>
             <div>
              <p>延迟漏报</p>
            </div>
          </div>
        </div>
        <!-- 下边 -->
        <div class="bottom">
          <div class="box1">
            <p>就医动态</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img4">
            </div>
          </div>
          <!-- 图形表 -->
          <div id="main" style="width: 300px;height:200px;"></div>
        </div>
      </div>
    </div>
    <!-- 尾部 -->
    <div class="footer">
      <!-- 左边 -->
      <div class="left">
       <div class="box1">
            <p>医疗服务</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img4">
            </div>
       </div>
       <div class="bottm">
        <ul>
          <li>
            <p>医学日均保卡量</p>
            <p><span class="sp1">12.5</span>张 <span class="sp2">4.01%</span></p>
          </li>
           <li>
            <p>平均保卡时间</p>
            <p><span class="sp1">1234</span>秒 <span class="sp3">4.01%</span></p>
          </li>
           <li>
            <p>医生最高保卡量</p>
            <p><span class="sp1">2.3</span>小时 <span class="sp3">4.01%</span></p>
          </li>
           <li>
            <p>最低报卡时间</p>
            <p><span class="sp1">0012</span>秒<span class="sp3">4.01%</span></p>
          </li>
           <li>
            <p>医生排除比例</p>
            <p><span class="sp1">10.00%   </span><span class="sp3">4.01%</span></p>
          </li>
           <li>
            <p>迟报漏报卡数</p>
            <p><span class="sp1">0013</span>张 <span class="sp3">4.01%</span></p>
          </li>
        </ul>
       </div>
      </div>
      <!-- 中间 -->
      <div class="center">
         <div class="box1">
            <p>检测机构</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img4">
            </div>
          </div>
          <div class="box">
            医疗
          </div>
          <div>

          </div>
      </div>
      <!-- 右边 -->
      <div class="right">
        <div class="re">
          <div class="box1">
             <p>疾病构成</p>
            <div class="img">
              <img src="../assets/images/line1.png" class="img1">
              <img src="../assets/images/line2.png" class="img4">
            </div>
          </div>
        </div>
        <div class="be">
           <div class="left">
           <div>
              <p><span class="sp1">1236</span>万元</p>
              <p>私人诊所</p>
           </div>
            <div>
              <p><span class="sp1">1236</span>万元</p>
              <p>私人诊所</p>
           </div>
            <div>
              <p><span class="sp1">1236</span>万元</p>
              <p>私人诊所</p>
           </div>
         </div>
         <div class="rig">
          <div id="main2" style="width: 300px;height:200px;"></div>
         </div>
        </div>
        
      </div>
    </div>
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
     option = {
    
  xAxis: {
    type: 'category',
    data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00','15:00'],

  },
  yAxis: { 
    
  },
  series: [
    {
      data: [20, 300, 140, 250, 480, 180, 100,0],
      type: 'bar',
      showBackground:true,
      itemStyle:{
        color:"#04ecce",
        noraml:{
          barBorderRadius:[15,15,15,15,15,15,15,0 ]
        }
      },
      
    }
  ]
};
    option && myChart.setOption(option);


    /**第二个 */
     var myChart2 = echarts.init(document.getElementById('main2'));
    var option2;
    option2 = {
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'right'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'text1' },
        { value: 735, name: 'text2' },
        { value: 580, name: 'text3' },
        { value: 484, name: 'text4' },
        { value: 300, name: 'text5' }
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
};
    option2 && myChart2.setOption(option2);
   },
  methods: {}
}
</script>
<style scoped lang='scss'>
/**头部样式 */
.head {
	background-image: url('../assets/images/topbg.png');
	background-size: 100% 100%;
	display: flex;
	justify-content: space-between;
	p {
		padding-bottom: 20px;
	}
	padding: 10px 50px;
	color: #b2bec9;
	.i {
		color: #daf9ff;
		margin-top: 10px;
		font-weight: 800;
		font-size: 22px;
	}
}
/**中间样式 */
.body {
	display: flex;
	color: #daf9ff;
  margin-left: 10px;
  .right{
    width: 30%;
    .box2{
      display: flex;
      flex-wrap: wrap;
      div{
        width: 33%;
      }
    }
  }
  .center{
    width: 40%;
    div{
    width: 350px;
    height: 350px;
    background-image: url('../assets/images/lbx.png');
    background-size: 100%,100%;
    margin: 10px 0px 0px 25px;
    img{
      width: 300px;height: 300px;
      margin: 31px 20px 25px 34px;
    }
  }
  }
	.left {
		width: 30%;
		ul {
			display: flex;
			flex-wrap: wrap;
			li {
				width: 50%;
				height: 50%;
				display: flex;
				p:first-child {
					color: #b2bec9;
				}
				div {
			   margin: 5px;
					span {
						color: #2f7880;
						font-weight: 800;
					}
				}
				div:first-child {
					background: 100%, 100%, url('../assets/images/iconbg.png');
				}
				img {
					margin: 8px;
				}
			}
		}
	}
}
/**表格 */
table {
	width: 380px;
}
.sp1 {
	color: #03bcf5;
	font-size: 12px;
}
.sp2 {
	color: red;
	font-size: 12px;
}
.sp3{
  color: #0fe144;
  font-size: 12px;
}
/**尾部 */
.footer{
  display: flex;
  color: #daf9ff;
      margin-left: 10px;
  .right {
   width: 30%;
   .be{
    display: flex;
    justify-content: center;
  
    .left{
      div{
        margin-top: 15px;
      }
    }
   }
}
  .left{
    width: 500px;
    .sp1{
      font-weight: 800;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 33%;
        height: 10%;
        border: 1px solid #1070aa;
        padding: 5px 0px 2px 20px;
        margin: 2px;
      }
    }
  }
}


.box1 .img {
		display: flex;
    height: 5px;
		.img2 {
			width: 320px;
			height: 10px;
			margin-top: -10px;
			margin-left: -10px;
		}
		.img1 {
			width: 70px;
		}
    .img3{
      width: 113px;
    }
		.img4 {
			width: 300px;
			height: 10px;
			margin-top: -10px;
			margin-left: -5px;
		}
	}
</style>
