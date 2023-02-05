<template>
	<div>
		<el-card>
			<!-- 添加权限-->
			<el-button type="primary" size="mini" style="float: right;	margin: 10px;	" @click="add">添加权限</el-button>
		</el-card>
		<el-table
		:data="$store.state.permission.car"
		row-key="id"
    border
    default-expand-all
    :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
		>
			<el-table-column prop="name" label="名称">
			</el-table-column>
			<el-table-column prop="code" label="标识">
			</el-table-column>
			<el-table-column prop="description" label="描述">
			</el-table-column>
			<el-table-column prop="type" label="描述">
			</el-table-column>
			<el-table-column label="操作">
      <template slot-scope="scope">
       <div class="box">
				<p @click="add( scope.row)">{{ scope.row.type==1?'添加':'' }}</p>
        <p @click="edit( scope.row)">编辑</p>
        <p @click="del( scope.row.id)">删除</p>
			 </div>
      </template>
    </el-table-column>
		</el-table>
		<!-- 模态框 -->
		<model :dialogFormVisible="dialogFormVisible" title="title"></model>
		<!-- 模态框 -->
		<el-dialog :title="title" :visible.sync="dialogFormVisible">
			<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="权限名称" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
	<el-form-item label="权限标识" prop="code">
    <el-input v-model="ruleForm.code"></el-input>
  </el-form-item>
	<el-form-item label="权限描述">
    <el-input v-model="ruleForm.description"></el-input>
  </el-form-item>
  <el-form-item label="开启" >
    <el-switch v-model="ruleForm.delivery"></el-switch>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">确定</el-button>
    <el-button @click="dialogFormVisible = false">取消</el-button>
  </el-form-item>
</el-form>
</el-dialog>
	</div>
</template>

<script>
import {del} from '../../api/permission'
import  model from './modal.vue'
export default {

	data () {
		return {
			dialogFormVisible:false,
			title:"新增权限点",
			ruleForm: {
          name: '',code:"",
          delivery: false,
        },
        rules: {
          name: [{ required: true, message: '权限名称不能为空', trigger: 'blur' }, ],
          code: [{ required: true, message: '权限标识不能为空', trigger: 'blur' }, ],
        }
		}
	},
	methods: {
		/**添加 */
		submitForm(formName) {
			this.$store.dispatch('permission/gad',this.ruleForm )
		},
		add(){
			this.dialogFormVisible=true
			this.title='新增权限点'
		},
		/**编辑 */
		edit(row){
			this.dialogFormVisible=true
			this.title='编辑权限点'
		},
		/**删除 */
		del(row){
			this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
					// 删除
					del(row).then(res=>{
			const {code,message}=res.data
			if(code===10000){
				/**提示 */
			this.$message.success(message)
			/**调用数据 */
		this.$store.dispatch('permission/gent', )
			}
		})

        }).catch(() => {
          this.$message({
            type: 'error',
            message: '已取消删除'
          });
        });
		}
	},
	created () {

	},
	mounted () {
		/**调用数据 */
		this.$store.dispatch('permission/gent', )
	},
	components: {
		model
	},
	computed: {

	},
	watch: {

	},
}
</script>

<style lang='scss' scoped>
.box {
	display: flex;
p{
	padding: 10px;
	color: #66b1ff;
}
}
</style>
