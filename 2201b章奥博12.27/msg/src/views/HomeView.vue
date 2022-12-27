<template>
    <div class=''>
      <p>第一个:{{name}}</p>
      <p>第二个:{{me}}</p>
      <p>{{add}}</p>
      <p>{{ num }}</p>
      <button @click="num++">添加 </button>
      <child></child>
      <hr/>
      <h1>{{point}}</h1>
    </div>
</template>

<script>
import { ref, computed,watch ,reactive} from 'vue';
import child from '../components/child2'
import usepoint from '../hooks/hooks.js'
 export default {
  components:{child},
// setup(props, ctx) {
// const name=ref("张三")
// const me=ref("李四")
// const num=ref(20)

// const add=computed(()=>{
//   return name.value+me.value
// })
// watch(
//   //reactive定义数据无法获取正确oldValue,强制开启深度监视
//   num,
//   (newValue,oldValue)=>{
//     console.log('num',newValue,oldValue);
//   },
//   {immediate:true,deep:false}//deep不再奏效
// )

// return {add,me,name,num,}
//  },

// setup(props, ctx) {
// const name=ref("张三")
// const me=ref("李四")
// const num=ref(20)

// const add=computed(()=>{
//   return name.value+me.value
// })
// watch(
//   //reactive定义数据无法获取正确oldValue,强制开启深度监视
//   num,
//   (newValue,oldValue)=>{
//     console.log('num',newValue,oldValue);
//   },
//   {immediate:true,deep:false}//deep不再奏效
// )

// return {add,me,name,num,}
//  },
setup(props, ctx) {
const point=usepoint()


const name=ref("张三")
const me=ref("李四")
const num=ref(20)

const add=computed(()=>{
  return name.value+me.value
})
watch(
  //reactive定义数据无法获取正确oldValue,强制开启深度监视
  num,
  (newValue,oldValue)=>{
    console.log('num',newValue,oldValue);
  },
  {immediate:true,deep:false}//deep不再奏效
)

return {add,me,name,num,point}
 },
 };
</script>

<style lang='scss' scoped>

</style>
