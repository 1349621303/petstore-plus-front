<template>
    <div>
        <el-table
                :data="orders"
                border
                style="width: 100%">
            <el-table-column
                    fixed
                    prop="orderid"
                    label="订单号"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="orderdate"
                    label="订单日期"
                    width="140">
            </el-table-column>
            <el-table-column
                    prop="shipaddr1"
                    label="shipaddr1"
                    width="180">
            </el-table-column>
            <el-table-column
                    prop="shipaddr2"
                    label="shipaddr2"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="shipcity"
                    label="城市"
                    width="100">
            </el-table-column>
            <el-table-column
                    prop="shipstate"
                    label="地区"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="shipzip"
                    label="邮编"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="shipcountry"
                    label="国家"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="totalprice"
                    label="总价格"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="exprdate"
                    label="支付日期"
                    width="80">
            </el-table-column>
            <el-table-column
                    prop="billtofirstname"
                    label="姓氏"
                    width="80">
            </el-table-column>

            <el-table-column label="操作" fixed="right" width="150">
                <template slot-scope="scope">
                    <el-button type="text" @click="getLineItemsByOrderId(scope.$index, scope.row)">打开嵌套表格的 Dialog</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
                background
                @current-change="currentChange"
                @size-change="sizeChange"
                layout="sizes, prev, pager, next, jumper, ->, total, slot"
                :total="total">
        </el-pagination>

        <el-dialog title="收货地址" :visible.sync="dialogTableVisible" append-to-body>
            <el-table :data="lineitems">
                <el-table-column property="orderid" prop="orderid" label="订单编号" width="150"></el-table-column>
                <el-table-column property="linenum" prop="linenum" label="列表号" width="200"></el-table-column>
                <el-table-column property="itemid" prop="itemid" label="商品编号"></el-table-column>

                <el-table-column property="quantity" prop="quantity" label="数量" width="150"></el-table-column>
                <el-table-column property="unitprice" prop="unitprice" label="单价" width="200"></el-table-column>

            </el-table>
        </el-dialog>


    </div>
    
</template>

<script>
    export default {
        name: "OrderList",
        data() {
            return {
                orders:[],
                lineitems:[],
                total: 0,
                page: 1,
                size: 10,
                dialogTableVisible: false
            }
        },
        mounted() {
            this.initOrderList();
        },
        methods: {
            initOrderList() {
                this.getRequest("/getOrdersByUser/").then(resp => {
                    if (resp) {
                        this.orders = resp.obj;
                        //alert(JSON.stringify(resp.obj))
                    }
                })
            },
            getLineItemsByOrderId(index, data) {
                this.dialogTableVisible = true;
                // alert(JSON.stringify(data.orderid));
                this.getRequest("/getLineitemsByOrderId/"+data.orderid).then(resp => {
                    if (resp) {
                        // alert(JSON.stringify(resp.obj))
                        this.lineitems = resp.obj;
                    }
                })
            },
            sizeChange(currentSize) {
                this.size = currentSize;
                this.initOrderList();
            },
            currentChange(currentPage) {
                this.page = currentPage;
                this.initOrderList();
            },
        }
    }
</script>

<style scoped>

</style>