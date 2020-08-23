<template>
    <default-layout>
    <div>
        Test1!!!!!!!
        <el-table
                :data="tableData"
                stripe
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="itemid"
                    label="商品编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    fixed
                    prop="productid"
                    label="product编号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="listpirce"
                    label="价格"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="supplier"
                    label="卖家店铺"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="status"
                    label="状态"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="attr1"
                    label="描述1"
                    width="300">
            </el-table-column>
            <el-table-column
                    prop="attr2"
                    label="描述2"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="attr3"
                    label="描述3"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="attr4"
                    label="描述4"
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="attr5"
                    label="描述5"
                    width="120">
            </el-table-column>

            <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看详情</el-button>
                    <el-button type="text" size="small">其他</el-button>
                </template>
            </el-table-column>

        </el-table>
    </div>
    </default-layout>
</template>


<script>

    export default {
        name: "Test1",
        data() {
            return {
                tableData: []
            }
        },
        // 数据初始化一般放到 mounted 函数中
        mounted() {
            this.initPositions();
        },
        // 点击事件的方法：
        methods:{
            initPositions() {
                //这里调用后端的方法是新写的，getCategoryListAll直接返回List<Category>数据集
                this.getRequest("/getItemListByProduct/FL-DLH-02").then(resp => {
                    if (resp) {
                         //alert(JSON.stringify(resp.msg))
                        this.tableData = resp.obj;
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>