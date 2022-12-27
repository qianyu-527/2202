<template>
	<div>
		<h1>{{counnt}}</h1>
		<button @click="counnt++">加一</button>
	</div>
</template>
 
<script>
	import {  ref,  onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from "vue";
	export default{
		name:'liveing',
		setup(){
            console.log('setup');
			 const counnt=ref(1)
			onBeforeMount(()=>{
				console.log("onBeforeMount")
			});
			onMounted(()=>{
				console.log('onMounted')
			});
			onBeforeUpdate(()=>{
				console.log("onBeforeUpdate")
			});
			onUpdated(()=>{
				console.log("onUpdated")
			});
			onBeforeUnmount(()=>{
				console.log("onBeforeUnmounted")
			});
			onUnmounted(()=>{
				console.log("onUnmounted")
			})
			
			return {counnt}
		},
		beforeCreate() {
			console.log('beforeCreate')
		},
		created() {
			console.log('created')
		},
		beforeMount() {
			console.log('beforeMount')
		},
		mounted() {
			console.log('mounted')
		},
		beforeUpdate() {
			console.log('beforeUpdate')
		},
		updated() {
			console.log('updated')
		},
		beforeUnmount() {
			console.log('beforeUnmount')
		},
		unmounted() {
			console.log('unmounted')
		}
		
	}
</script>
 
<style>
</style>