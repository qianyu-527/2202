<template>
<div>
    <div class="box">
        <div >
              <div></div>
              <div>
                <p>男性用户人数</p>
                 <p>Nunber of male</p>
                 <p>869,913万人</p>
              </div>
        </div>
         <div >
              <div></div>
              <div>
                <p>女性用户人数</p>
                 <p>Nunber of male</p>
                 <p>870,006万人</p>
              </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
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
.box{
    width: 300px;
    margin: 10px;
    display: flex;
    background-color: #2a2b2d;
    div{ 
        margin-left: 10px;
        p:nth-child(2){
            font-size: 12px;
        }
        p:nth-child(3){
            font-weight: 800;
        }
    }
}
</style>
