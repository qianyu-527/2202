<template>
<div class="title">
  <h1>互联网产业全球布局看板</h1>
  <div class="head">
    <div class="left">
      <user></user>
      <age></age>
      <login></login>
      <sex></sex>
      <ship></ship>
    </div>
    <div class="center"></div>
    <div class="right"></div>
  </div>
</div>
</template>

<script>
import user from './user/Index'
import age from './user/Age'
import login from './user/Login'
import sex from './user/Sex'
import ship from './user/Ship'
export default {
  name: '',
  components: {user,age,login,sex,ship},
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
  font-size: 12px;
}
.head{
  width: 100vw;height: 100vh;
  border: 2px solid #525051;
  .left{
    width: 25%;
  }
  .center{
    background-color: pink;
    width: 50%;
  }
  .right{
    width: 25%;
  }
}
</style>
