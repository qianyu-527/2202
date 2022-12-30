<template>
  <div>
    <div class="box">
      <el-button type="primary" @click="add">新增</el-button>
    </div>

    <el-calendar>
      <template slot="dateCell" slot-scope="{ date, data }">
        <p>
          {{ data.day.split("-").slice(2).join("-") }}
        </p>
        <div v-for="item in $store.state.arr" :key="item.id">
          <div
            v-if="
              item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1
            "
          >
            <el-button
              type="primary"
              size="mini"
              v-show="item.status == '已办'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button
            >
          </div>
          <div
            v-if="
              item.date1.indexOf(data.day.split('-').slice(0).join('-')) != -1
            "
          >
            <el-button
              type="danger"
              size="mini"
              v-show="item.status == '待办'"
              @click="edit(item, item.id)"
              >{{ item.name }}</el-button
            >
          </div>
        </div>
      </template>
    </el-calendar>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="事件名称">
          <el-input v-model="form.name"></el-input>
        </el-form-item>

        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
              style="width: 100%"
            ></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
        </el-form-item>

        <el-form-item label="事件状态">
          <el-radio-group v-model="form.status">
            <el-radio label="待办"></el-radio>
            <el-radio label="已办"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="qd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //添加模态框
      form: {
        name: "",
        date1: "",
        status: "",
      }, //表单双向绑定
      editid: 0,
      ids: 0,
    };
  },
  methods: {
    add() {
      this.dialogVisible = true;
    },
    // 添加内容
    qd() {
      this.dialogVisible = false;
      let res = new Date(this.form.date1).toLocaleDateString();
      // console.log(res);
      console.log(res.split("/").slice(0).join("-"));
      this.form.date1 = res.split("/").slice(0).join("-");

      // console.log(this.form.date1);
      if (this.editid == 0) {
        this.$store.commit("qd", this.form);
        this.form = {};
        this.editid != 0;
      } else {
        this.$store.commit("edit", { form: this.form, id: this.ids });
        this.editid = 0;

        this.form = {};
      }
    },
    // 添加确定按钮
    edit(val, id) {
      console.log(val);
      this.dialogVisible = true;
      this.form.name = val.name;
      this.form.status = val.status;
      this.form.date1 = val.date1;
      this.form.date2 = val.date2;
      this.editid = -1;
      this.ids = id;
    },
    // 点击编辑按钮回填
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {},
  filters: {},
};
</script>

<style lang='scss' scoped>
.box {
  margin: 20px 0 0 20px;
}
</style>

