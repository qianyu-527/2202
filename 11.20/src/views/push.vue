<template>
<div>
    <el-form ref="form" :model="sizeForm" label-width="80px" size="mini">
  <el-form-item label="活动区域">
    <el-select v-model="sizeForm.region" placeholder="请选择">
      <el-option label="QWE" :value="-1"></el-option>
      <el-option label="ASDAS二" :value="1"></el-option>
      <el-option label="ASASDSA" :value="2"></el-option>
      <el-option label="粉色" :value="3"></el-option>
      <el-option label="红色" :value="4"></el-option>
    </el-select>
  </el-form-item>
   <el-form-item label="食品种类">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item label="种类描述">
    <el-input v-model="sizeForm.name"></el-input>
  </el-form-item>
  <el-form-item size="large">
    <el-button type="primary" @click="tj">提交</el-button>
  </el-form-item>
</el-form>

    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="食品名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="食品活动" >
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="食品详情" >
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="食品特点" >
    <el-select v-model="ruleForm.region" placeholder="请选择食品特点">
      <el-option label="新品" value="shanghai"></el-option>
      <el-option label="招牌" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="食品规格" >
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="单规格"></el-radio>
      <el-radio label="多规格"></el-radio>
    </el-radio-group>
  </el-form-item>
<el-form-item label="包装费">
    <el-input-number v-model="num" :min="0" label="描述文字"></el-input-number>
  </el-form-item>
  <el-form-item label="价格">
    <el-input-number v-model="num" :min="1" label="描述文字"></el-input-number>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" >确定添加食品</el-button>
  </el-form-item>
</el-form>
</div>
</template>

<script>
export default {
  name: '',
  components: {},
  data () {
    return {
        num:"1",//数字
         ruleForm: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入食品名称', trigger: 'blur' },
          ],
         
        },


         sizeForm: {
          name: '',
          region: '',
        }
    }
  },
  created () { },
  mounted () { },
  methods: {
    tj(){
        if(this.sizeForm.name==""&&this.sizeForm.region==""){
            return
        }
        this.$message.success("添加成功")
    }
  }
}
</script>
<style scoped lang='scss'>

</style>
