<template>
  <div>
    <!-- <slot></slot> -->


    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer" :text1="1" :text2="2"></slot>
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
</style>

