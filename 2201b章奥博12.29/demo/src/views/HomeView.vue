<template>
<div class="title">
  <h1>互联网产业全球布局看板</h1>
  <div class="head">
    <div class="left">
      <user></user>
      <age></age>
      <login></login>
      <sex></sex>
      <ship ></ship>
      <zhu ></zhu>
    </div>
    <div class="center">
      <cen></cen>
      <en></en>
      <div class="box">
        <lefT class="left"></lefT>
        <lefO class="right"></lefO>
      </div>
      <div class="out">
        <foot  class="left"></foot>
        <fooR class="right"></fooR>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import user from './user/Index'
import age from './user/Age'
import login from './user/Login'
import sex from './user/Sex'
import ship from './user/Ship'
import zhu from './user/zhu'
import cen from './centop/top.vue'
import en from './centop/tab.vue'
import lefT from './centop/left.vue'
import lefO from './centop/left2.vue'
import foot from './centop/foot.vue'
import fooR from './centop/foot2.vue'
export default {
  name: '',
  components: {user,age,login,sex,ship,zhu,cen,en,lefT,lefO,foot,fooR},
  data () {
    return {
    }
  },
  created () { },
  mounted () { },
  methods: {}
}
</script>
<style scoped lang='scss'>
h1{
  text-align: center;
  font-size: 10px;
}
.head{
  width: 100vw;height: 100vh;
  border: 2px solid #525051;
  display: flex;
  .left{
    width: 30%;
  }
  .center{
    width: 70%;
    margin-left: 10px;
    .box{
      display: flex;
    }
    .left{
       background-color: #424345;
       width: 60%;
       height: 240px;
       margin: 5px;
      }
      .right{
        width: 35%;
          ;
        background-color: #363636;
        margin: 5px;
      }
    .out{
      display: flex;
      .left{
        height: 260px;
      }
    }
  }
}
p{
  font-size: 8px;
}
</style>
