<template>
  <div>
    <p>地区商家销售排行</p>
    <div class="box">
      <div class="left">
        <div><p>合肥</p></div>
        <div class="st"></div>
        <div></div>
      </div>
      <div class="center">
        <div><p>济南</p></div>
        <div class="st"></div>
        <div></div>
      </div>
      <div class="right">
        <div><p>太原</p></div>
        <div class="st"></div>
        <div></div>
      </div>
    </div>
 </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {

  },
  created () {

  },
  mounted () {

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
p{
    padding: 5px 0 5px 30px;
}

.box{
  width: 300px;
  height: 100px;
  margin: 0 10px;
  display: flex;
  justify-content: space-between;
  background-color: #2c2c2c;
  .st{
  width: 90px;
  height: 20px;
  background-color: #5c5c5c;
}
.center{
  margin: 0 10px; 
}
}
</style>
