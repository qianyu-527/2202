<template>
<div>
	<!-- 模态框 -->
	<el-dialog :title="title" :visible.sync="dialogFormVisible">
				<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
					<el-form-item label="角色名称" prop="roleName">
						<el-input v-model="ruleForm.roleName"></el-input>
					</el-form-item>
				<el-form-item label="角色描述" prop="roleDesc">
					<el-input v-model="ruleForm.roleDesc"></el-input>
				</el-form-item>
			</el-form>
			<div slot="footer" class="dialog-footer">
				<el-button @click="dialogFormVisible = false">取 消</el-button>
				<el-button type="primary" @click="que">确 定</el-button>
			</div>
		</el-dialog>
		<!-- 分配权限 -->
		<el-dialog title="分配权限" :visible.sync="dia">
        <el-tree
          :data="data"
          show-checkbox
          node-key="id"
		      default-expand-all
		      @getHalfCheckedKeys="change(val)"
          :default-checked-keys="[5]"
          :props="defaultProps"
		      ref="tree">
        </el-tree>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dia = false">取 消</el-button>
    <el-button type="primary" @click="pei">确 定</el-button>
  </div>
</el-dialog>
</div>
</template>

<script>
import {STATUS} from '../../../constStatus/initStatus.js'
export default {
	props:['title','flag'],
  data () {
	return {
			/**表单*/
		ruleForm:{
			roleName:"",
			roleDesc:""
		},
		/**验证表单*/
		rules:{
			 roleName: [
            { required: true, message: '请输入用户名称', trigger: 'blur' },
          ],
		  roleDesc: [
            { required: true, message: '请输入用户描述', trigger: 'blur' },
          ],
		},
		dialogFormVisible:false,/***模态框*/dia:false,
		data:[],/**获取标签 */
		 defaultProps: {
        children: "children",
        // 指定子树
        label: "authName"
        // 指定节点标签
      },
	}
  },
  created () {
	 this.$http({
		 method:"get",
		 url:this.$http.addorUrl('rights/tree ')
	 }).then((res) => {
		 const {status,msg}=res.data.meta
		 if(status===STATUS.SUCCESS){
			  this.data=res.data.data
		 }
	 })
   },
  mounted () { },
  methods: {
	info(val){
		this.dialogFormVisible=true
		/***清空*/
		this.ruleForm.roleName=''
		this.ruleForm.roleDesc=''
	},
	into(val){
		this.dialogFormVisible=true
		if(val){
		this.ruleForm.roleName=val.roleName
		this.ruleForm.roleDesc=val.roleDesc;
		}
	},
	/**确定*/
	que(){
		if(this.ruleForm.roleName==''||this.ruleForm.roleDesc==''){
			this.$message.error('请内容填完整')
			return false
		}
		this.dialogFormVisible=false
		this.$emit('que', this.ruleForm)
	},
	/***分配 */
	ino(val){
		this.dia=true
		setTimeout(() => {
   this.$refs.tree.setCheckedKeys(val)
		}, 700)
	},
	/**对话框的显示和隐藏*/
	pei(){
    let trs=this.$refs.tree.getCheckedKeys().join(",")
	   let ban=this.$refs.tree.getHalfCheckedKeys().join(",")
	   let all=	trs+','+ban
	   this.$emit('fne',all )
	}
  }
}
</script>
<style scoped lang='scss'>

</style>
