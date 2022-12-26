<template>
    <div class=''>
      <!-- <h1>姓名:{{ name }}</h1>
       <p>年龄:{{ age }}</p>
       <button @click="age++">年龄增加</button>
       <p>{{ kk.name }}</p> -->

       <!-- <h1>姓名:{{ name }}</h1>
       <p>年龄:{{ age }}</p>
       <button @click="age++">年龄增加</button>
       <p>{{ kk.name }}</p> -->

       <h1>姓名:{{ name }}</h1>
       <p>年龄:{{ age }}</p>
       <button @click="age++">年龄增加</button>
       <p>{{ kk.name }}</p>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue';
 export default {
setup(props, ctx) {
//  const name=ref("张三");
//  const age=ref(20);
//   const kk=ref({name:"李四" })

// const name=ref("张三");
//  const age=ref(20);
//   const kk=ref({name:"李四" })

const name=ref("张三");
 const age=ref(20);
  const kk=ref({name:"李四" })
// return { name,age ,kk};
// return { name,age ,kk};
return { name,age ,kk};
 },
 };
</script>

<style lang='scss' scoped>

</style>
