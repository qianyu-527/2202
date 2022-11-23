<template>
<div>
    <!-- 添加商铺 -->
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="商店名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="联系电话" prop="desc">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
   <el-form-item label="店铺简介" >
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="店铺标语" >
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="商铺分类">
    <el-cascader></el-cascader>
  </el-form-item>
  <el-form-item label="商铺特点">
    <el-switch v-model="ruleForm.delivery"></el-switch>
    <el-switch v-model="ruleForm.delivery"></el-switch>
    <el-switch v-model="ruleForm.delivery"></el-switch>
    <el-switch v-model="ruleForm.delivery"></el-switch>
    <el-switch v-model="ruleForm.delivery"></el-switch>
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item label="配送费">
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="20" label="描述文字"></el-input-number>
  </el-form-item>
   <el-form-item label="起送价">
    <el-input-number v-model="num" @change="handleChange" :min="0" label="描述文字"></el-input-number>
  </el-form-item>
   <el-form-item label="营业时间" >
<el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="起始时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
    <el-col :span="11">
      <el-form-item prop="date2">
        <el-time-picker placeholder="结束时间" v-model="ruleForm.date2" style="width: 100%;"></el-time-picker>
      </el-form-item>
    </el-col>
  </el-form-item>
  <el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
<el-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  list-type="picture-card"
  :on-preview="handlePictureCardPreview"
  :on-remove="handleRemove">
  <i class="el-icon-plus"></i>
</el-upload>
  <el-form-item label="优惠活动" prop="region">
    <el-select v-model="ruleForm.region" placeholder="满减优惠">
      <el-option label="满减优惠" value="shanghai"></el-option>
      <el-option label="优惠大酬宾" value="shanghai"></el-option>
      <el-option label="新用户立减" value="beijing"></el-option>
      <el-option label="进店领劵" value="beijing"></el-option>
    </el-select>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="add" >立即创建</el-button>
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
        num:"",//数字
         imageUrl: '',//上传
         ruleForm: {
          name: '',
          date2: '',
          delivery: true,  
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入商店名称', trigger: 'blur' },
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写联系电话', trigger: 'blur' }
          ]
        }
    }
  },
  created () { },
  mounted () { },
  methods: {
    add(){
        this.$message.success("存在")
    },
     handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  }
}
</script>
<style scoped lang='scss'>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
