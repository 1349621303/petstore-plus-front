<template>
    <div>
        <div>
            <!--<router-link :to=" 'item' + scope.row.itemid ">-->
            <el-table
                    :data="items"
                    border
                    style="width: 100%">
                <el-table-column
                        prop="itemid"
                        label="商品编号"
                        width="150">
                </el-table-column>
                <el-table-column
                        prop="listprice"
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

                <el-table-column label="操作" fixed="right" width="150">
                    <template slot-scope="scope">
                        <el-button
                                size="mini"
                                type="primary" round
                                @click="handleEdit(scope.$index, scope.row)">添加到购物车</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <el-dialog :visible.sync="dialogFormVisible">
                <el-form :model="form">
                    <el-form-item label="商品编号" :label-width="formLabelWidth">
                        <el-input v-model="form.itemId" autocomplete="off" :disabled="true" style="width: 300px;"></el-input>
                    </el-form-item>

                    <el-form-item label="库存剩余" :label-width="formLabelWidth">
                        <el-input v-model="form.itemQty" autocomplete="off" :disabled="true" style="width: 300px;"></el-input>
                    </el-form-item>

                    <el-form-item label="选择数量" :label-width="formLabelWidth">
                        <el-input-number v-model="form.num" @change="handleChange" :min="1" :max="99" label="选择数量"></el-input-number>
                    </el-form-item>

                    <el-form-item label="商品价格" :label-width="formLabelWidth">
                        <el-input v-model="form.itemListprice" autocomplete="off" :disabled="true" style="width: 300px;"></el-input>
                    </el-form-item>

                    <el-form-item label="总金额" :label-width="formLabelWidth">
                        <el-input v-model="form.totalMoney" autocomplete="off" :disabled="true" style="width: 300px;"></el-input>
                    </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取 消</el-button>


                <router-link :to="'/order/'+item.itemid">
                    <el-button type="primary" @click="addBuy">
                        直接购买
                    </el-button>
                </router-link>





                    <el-button type="primary" @click="addCart">添加到购物车</el-button>
                </div>
            </el-dialog>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Item",

        data() {
            return {
                items: [],
                item:[],
                cart:{
                    userid: '',
                    itemid: '',
                    productid: '',
                    name: '',
                    instock: 1,
                    quantity: 0,
                    listprice: 0,
                    total: 0

                },

                dialogFormVisible: false,
                form: {
                    itemId: '',
                    itemQty: '',
                    itemListprice:'',
                    num: 1,
                    totalMoney:''

                },
                formLabelWidth: '120px'
            }
        },

        mounted() {
            this.initItemList();
        },
        methods: {
            initItemList() {
                this.getRequest("/getItemListByProduct/"+this.$route.params.productId).then(resp => {
                    if (resp) {
                        // alert(JSON.stringify(resp.obj))
                        this.items = resp.obj;
                    }
                })
            },
            addBuy(){
                this.cart.userid='j2ee';
                this.cart.itemid=this.item.itemid;
                this.cart.productid=this.item.productid;
                this.cart.name=this.item.attr1;
                this.cart.instock=1;
                this.cart.quantity=this.form.num;
                this.cart.listprice=this.form.itemListprice;
                this.cart.total=this.form.totalMoney;
                //alert(JSON.stringify(this.cart))
                this.postRequest("/insertTheItemToCart/",this.cart).then(resp => {
                    if (resp) {
                        //this.form.cart.itemid = resp.obj.itemid;
                        //alert(JSON.stringify(resp.obj))
                        this.cart = resp.obj;
                    }
                })
            },
            addCart(){
                this.dialogFormVisible = false;
            },

            handleEdit(index, row) {
                //弹出对话框
                this.dialogFormVisible = true;

                this.item=[];
                this.item=row;
                this.form.itemId=row.itemid;

                this.getRequest("/getQtyByItemId/"+row.itemid).then(resp => {
                    if (resp) {
                        this.form.itemQty = resp.obj.qty;
                    }
                });
                this.form.num=1;

                this.form.itemListprice=row.listprice;
                this.form.totalMoney=row.listprice;

                console.log(index, row);
            },
            handleChange(value) {
                this.form.totalMoney=this.form.itemListprice * value;
                console.log(value);
            }
        }
    }
</script>

<style scoped>


</style>