<template>
<div>
      <quill-editor class="quills" v-model="richtext" ref="myQuillEditor">
        </quill-editor>
<el-button type="primary" @click="add">提交</el-button>
</div>
</template>

<script>

// 富文本
import { VueEditor } from 'vue2-editor'
export default {
  name: '',
  components: {},
  data () {
    return {
        richtext:""
    }
  },
  created () { },
  mounted () { },
  methods: {
    add(){
        this.$message.success("提交成功")
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
