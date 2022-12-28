<template>
  <div class="box">
    <div class="active">ALT</div>
    <div>北京</div>
    <div>上海</div>
    <div>深圳</div>
    <div>杭州</div>
    <div>南京</div>
    <div>武汉</div>
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
.box{
    display: flex;
    align-content: center;
    div{
        width: 200px;
        height: 20px;
        margin: 5px 0;
        background-color: #35383f;
        text-align: center;line-height: 20px;
    }
    .active{
    color: #fff;
    background-color:#8f9daa;
}
}

</style>
