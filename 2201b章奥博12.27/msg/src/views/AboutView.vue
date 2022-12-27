<template>
    <div class=''>
      <h1>插槽</h1>
      <child >
        <!-- 子组件提供给父组件的占位符用slot标签 父组件可以向占位符填充各种代码  也就是说子组件留个坑 父组件可以指定内容填充  如果没有就不展示内容 -->
         <!-- 默认插槽 具名插槽  和作用域插槽 -->
         <!-- 具名插槽用 slot标签用name表示具体位置  父组件用v-slot或者# 来使用 -->
         <!-- 作用域插槽  能够传递数据 父组件可以接收子组件的参数 -->
         <p>2222</p>
         <template v-slot:footer="props">
          <div>头部</div>
          <p>text1:{{props.text1}}</p>
          <p>text2:{{props.text2}}</p>
         </template>
         <template #header>
          <div>嗯嗯</div>
         </template>
      </child>
    </div>
</template>

<script>
import child from '../components/child'
 export default {
  components:{child},
 };
</script>

<style lang='scss' scoped>

</style>
