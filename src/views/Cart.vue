<template>
    <div>
        <div class="CartMain">
            <!-- :data="positions" 这里是指返回服务器端的数据-->
            <!-- prop="id",prop="createDate" 这些都是数据 -->
            <el-table
                    :data="CartList"
                    style="width: 100%">
                <!--多选-->
                <el-table-column
                        type="selection"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="itemid"
                        label="商品编号"
                        width="100">
                </el-table-column>
                <el-table-column
                        prop="productid"
                        label="产品编号"
                        width="180">
                </el-table-column>
                <el-table-column
                        prop="quantity"
                        width="150"
                        label="数量">
                </el-table-column>
                <el-table-column
                        prop="listprice"
                        width="150"
                        label="价格">
                </el-table-column>
                <el-table-column
                        prop="total"
                        width="150"
                        label="总计价格">
                </el-table-column>

                <el-table-column label="操作" width="300" >
                    <template slot-scope="scope">
                        <router-link :to="'/order/'+item.itemid">
                            <el-button size="mini" style="margin-right: 8px" type="primary" @click="addBuy(scope.$index, scope.row)">
                                购买
                            </el-button>
                        </router-link>

                        <el-button
                                size="mini"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)">移除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>


            <!--批量删除的按钮控件-->
            <el-button @click="deleteMany" type="danger" size="small" style="margin-right: 12px"
                       :disabled="multipleSelection.length==0">选择要移除的商品
            </el-button>

            <el-button @click="" type="success" size="small" style="margin-top: 8px"
                       :disabled="multipleSelection.length==0">选择要购买的商品
            </el-button>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data() {
            return {
                CartList: [],
                item: [],
                multipleSelection: []

            }
        },
        // 数据初始化一般放到 mounted 函数中
        // mounted() {
        //     this.initCartList();
        // },
        mounted() {
            this.initCartList();
        },

        methods: {
            deleteMany() {
                this.$confirm('此操作将永久删除【' + this.multipleSelection.length + '】条记录, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    let ids = '?';
                    this.multipleSelection.forEach(item => {
                        ids += 'ids=' + item.id + '&';
                    })
                    this.deleteRequest("/system/basic/pos/" + ids).then(resp => {
                        if (resp) {
                            this.initPositions();
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },
            // handleSelectionChange(val) {
            //     this.multipleSelection = val;
            // },
            handleDelete(index, data) {

                this.$confirm('此操作将永久删除【' + data.itemid + '】商品, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    // alert(JSON.stringify(data));
                    this.deleteRequest("/deleteTheItemOutCart/" ,data).then(resp => {
                        if (resp) {

                            //alert(JSON.stringify(resp.obj))
                            this.initCartList();
                        }
                    })
                }).catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
            },


            initCartList() {
                this.getRequest("/getCartList").then(resp => {

                    // alert(JSON.stringify(resp));
                    if (resp) {
                        // alert(JSON.stringify(resp));
                        this.CartList = resp.obj;
                    } else {
                        // alert("error");
                        this.$message.error(resp.msg);
                        this.$router.replace('/login')
                    }
                })
            },
            addBuy(index, row){
                this.item = row;

                this.cart.userid='j2ee';
                this.cart.itemid=this.item.itemid;
                this.cart.productid=this.item.productid;
                this.cart.quantity=this.form.num;
                this.cart.listprice=this.form.itemListprice;
                this.cart.total=this.form.totalMoney;
                this.postRequest("/insertTheItemToCart/",this.cart).then(resp => {
                    if (resp) {
                        this.cart = resp.obj;
                    }
                })
            }
        }
    }
</script>

<style>
    .addPosInput {
        width: 300px;
        margin-right: 8px
    }

    .updatePosInput {
        width: 200px;
        margin-left: 8px;
    }

    .CartMain {
        margin-top: 10px;
    }
</style>