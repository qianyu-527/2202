<template>
	<div>
		<el-card>
     <div class="title">
			<div class="left">
				<div class="top">
					<div>
						<img src="../../assets/第二个.png" alt="">
					</div>
					<div>
						<h3>{{$store.state.approvals.list.username}}</h3>
						<p>部门:{{ $store.state.approvals.list.departmentName }}</p>
						<p>入职时间:{{new Date($store.state.approvals.list.procApplyTime).toLocaleDateString()}}</p>
					</div>
				</div>
				<div class="bottm">
					<div >{{ $store.state.approvals.list.processState==2?'申请类型|请假':'' }}</div>
					<div>{{   $store.state.approvals.list.processState==2?'请假类型：|请假':'' }}</div>
					<div>{{   $store.state.approvals.list.processState==2?'申请单位：| 天':'' }}</div>
					<div>开始时间：|{{  new Date($store.state.approvals.list.procApplyTime).toLocaleDateString() }}</div>
					<div>结束时间：|{{ new Date($store.state.approvals.list.procApplyTime).toLocaleDateString()}}</div>
				</div>
			</div>
			<div class="right">
				<el-timeline :reverse="reverse">
    <el-timeline-item
      v-for="(activity, index) in $store.state.approvals.skt "
      :key="index"
      :timestamp="new Date(activity.handleTime).toLocaleDateString()
			">
      {{activity.handleOpinion}}
    </el-timeline-item>
  </el-timeline>
			</div>
		 </div>
		</el-card>
 </div>
</template>

<script>
export default {
	data () {
		return {
			id:0,
			reverse: true,
		}
	},
	methods: {

	},
	created () {
		this.id=this.$route.params.id
	},
	mounted () {
		console.log();
		this.$store.dispatch('approvals/met',this.id )
		this.$store.dispatch('approvals/aet',this.id )
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
.left{
	width: 80%;
	.top{
	display: flex;
	padding: 10px;
	border-bottom: 1px solid #ccc;
}
}
.right{
	width: 20%;
}
.title{
	display: flex;
}
</style>
