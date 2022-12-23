<template>
	<div>
		<div class="box1">
			<div id="chart" style="width: 80px; height: 80px"></div>
			<div id="chart1" style="width: 80px; height: 80px;"></div>
			<div id="chart2" style="width: 80px; height: 80px;"></div>
			<div id="chart3" style="width: 80px; height: 80px"></div>
			<div id="chart4" style="width: 80px; height: 80px;"></div>
			<div id="chart5" style="width: 80px; height: 80px;"></div>
		</div>
		<div class="box2">
			<p style="margin: -90px 0 0 10px">就诊人数</p>
			<p style="margin: -90px 0 0 40px">触发次数</p>
			<p style="margin: -90px 0 0 28px">触发卡数</p>
			<p style="margin:0px 0 0 -190px">去重卡数</p>
			<p style="margin: 0px 0 0 30px">报卡时间</p>
			<p style="margin: 0px 0 0 28px">迟报漏报</p>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';

	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
			const option = {
				title: {
					text: '14%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 86, itemStyle: { color: '#18355c' } },
							{ value: 14, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};


			var chart = echarts.init(document.getElementById('chart'));
			chart.setOption(option);

				const option1 = {
				title: {
					text: '22%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 78, itemStyle: { color: '#18355c' } },
							{ value: 22, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};

			var chart1 = echarts.init(document.getElementById('chart1'));
			chart1.setOption(option1);

				const option2 = {
				title: {
					text: '10%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 90, itemStyle: { color: '#18355c' } },
							{ value: 10, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};

			var chart2 = echarts.init(document.getElementById('chart2'));
			chart2.setOption(option2);

				const option3 = {
				title: {
					text: '30%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 70, itemStyle: { color: '#18355c' } },
							{ value: 30, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};

			var chart3 = echarts.init(document.getElementById('chart3'));
			chart3.setOption(option3);

		const option4 = {
				title: {
					text: '12%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 88, itemStyle: { color: '#18355c' } },
							{ value: 12, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};


			var chart4 = echarts.init(document.getElementById('chart4'));
			chart4.setOption(option4);

			const option5 = {
				title: {
					text: '80%',
					left: 'center',
					top: 61.5,
					textStyle: {
						color: '#1890fe',
					},
				},
				visualMap: {
					show: false,
				},

				series: [
					{
						type: 'pie',
						//环形显示饼状图，实际上显示的是50-80之间的部分
						//上限不建议设置为100，echarts自带动画效果，设置为100动画效果很丑
						radius: ['50%', '80%'],
						center: ['50%', '50%'],
						data: [
							//itemSyle是单项的背景颜色设置。
							{ value: 20, itemStyle: { color: '#18355c' } },
							{ value: 80, itemStyle: { color: '#1890fe' } },
						],
						label: {
							//将视觉引导图关闭
							show: false,
						},
						itemStyle: {
							//设置的是每项之间的留白
							borderWidth: 8,
							borderColor: '#173965',
						},
						// 初始化echarts的动画效果
						animationType: 'scale',
						animationEasing: 'elasticOut',
						animationDelay: function (idx) {
							return Math.random() * 200;
						},
					},
				],
			};

			var chart5 = echarts.init(document.getElementById('chart5'));
			chart5.setOption(option5);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.box1 {
		width: 300px;
		display: flex;
		flex-wrap: wrap;
	}
	.box2 {
		width: 300px;
		display: flex;
		flex-wrap: wrap;
	}
  #chart3,#chart4,#chart5{
    margin-top: 10px;
  }
  p{
    font-size: 12px;
  }
</style>
