<template lang="">
  <div>
    <el-button @click="handleAdd">新增</el-button>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{ row, $index }">
          <el-button
            size="mini"
            @click="handleEdit(row,$index)"
          >编辑</el-button>
          <el-button
            size="mini"
            type="danger"
            @click="tableData.splice(index, 1)"
          >删除</el-button>
        </template>
</el-table-column>
</el-table>

<el-dialog :visible.sync="dialogVisible" :title="isEdit?'编辑':'新增'">
    <el-form :inline="true" :model="form">
        <el-form-item label="姓名">
            <el-input v-model="form.name" placeholder="姓名"></el-input>
        </el-form-item>
        <el-form-item label="地址">
            <el-input v-model="form.address" placeholder="地址"></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
</el-dialog>
</div>
</template>
<script>
export default {
    data() {
        return {
            tableData: [
                {
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1518 弄",
                },
                {
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1517 弄",
                },
                {
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1519 弄",
                },
                {
                    name: "王小虎",
                    address: "上海市普陀区金沙江路 1516 弄",
                },
            ],
            form: {
                name: '',
                address: ''
            },
            dialogVisible: false,
            isEdit: false,
            currentIndex: null
        }
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    methods: {
        handleAdd() {
            this.isEdit = false
            this.dialogVisible = true
        },
        onSubmit() {
            const obj = JSON.parse(JSON.stringify(this.form))
            if (this.isEdit) {
                this.tableData.splice(this.currentIndex, 1, obj)
            } else {
                this.tableData.push(obj)
            }
            this.dialogVisible = false
        },
        handleEdit(row, index) {
            this.currentIndex = index
            this.form = JSON.parse(JSON.stringify(row))
            this.isEdit = true
            this.dialogVisible = true
        }
    }
};
</script>
<style lang=""></style>
