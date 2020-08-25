<template>
    <div>
        <div>
            我的订单
        </div>

        <div style="width: 40%;" >
            <el-steps :active="active" finish-status="success">
                <el-step title="确认商品信息"></el-step>
                <el-step title="确认收货信息"></el-step>
                <el-step title="确认支付"></el-step>
            </el-steps>
        </div>


        <div v-if="show1">

            <el-input placeholder="" v-model="cartItem.itemid" :disabled="true" style="width: 300px;">
                <template slot="prepend">商品编号</template>
            </el-input>


        </div>


        <div v-if="show2">
            <el-form :disabled="committed" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                <el-row :gutter="40" type="flex" justify="center">
                    <el-col :span="10">
                        <div>
                            <el-divider>Payment Details</el-divider>
                            <el-form-item label="Card Type" prop="cardtype">
                                <el-select v-model="ruleForm.cardtype" placeholder="Pick a card type">
                                    <el-option label="Visa" value="Visa"></el-option>
                                    <el-option label="Mastercard" value="Mastercard"></el-option>
                                    <el-option label="American Express" value="American Express"></el-option>
                                    <el-option label="Discover" value="Discover"></el-option>
                                    <el-option label="JCB" value="JCB"></el-option>
                                    <el-option label="UnionPay" value="UnionPay"></el-option>
                                    <el-option label="Maestro" value="Maestro"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Card Number" prop="creditcard">
                                <el-input v-model="ruleForm.creditcard"></el-input>
                            </el-form-item>
                            <el-form-item label="Expiry Date" required>
                                <el-form-item prop="exprdate">
                                    <el-date-picker type="month" placeholder="Pick a month" v-model="ruleForm.exprdate" style="width: 100%;"></el-date-picker>
                                </el-form-item>
                            </el-form-item>
                            <el-divider>Billing Address</el-divider>
                            <el-form-item label="First Name" prop="billtofirstname">
                                <el-input v-model="ruleForm.billtofirstname"></el-input>
                            </el-form-item>
                            <el-form-item label="Last Name" prop="billtolastname">
                                <el-input v-model="ruleForm.billtolastname"></el-input>
                            </el-form-item>
                            <el-form-item label="Address 1" prop="billaddr1">
                                <el-input v-model="ruleForm.billaddr1"></el-input>
                            </el-form-item>
                            <el-form-item label="Address 2">
                                <el-input v-model="ruleForm.billaddr2"></el-input>
                            </el-form-item>
                            <el-form-item label="billcity" prop="billcity">
                                <el-input v-model="ruleForm.billcity"></el-input>
                            </el-form-item>
                            <el-form-item label="billstate" prop="billstate">
                                <el-input v-model="ruleForm.billstate"></el-input>
                            </el-form-item>
                            <el-form-item label="billzip" prop="billzip">
                                <el-input v-model="ruleForm.billzip"></el-input>
                            </el-form-item>
                            <el-form-item label="billcountry" prop="billcountry">
                                <el-input v-model="ruleForm.billcountry"></el-input>
                            </el-form-item>
                            <el-form-item label="Ship to different address">
                                <el-switch @change="changeRules()" v-model="ruleForm.shipToDifferentAddr"></el-switch>
                            </el-form-item>
                        </div>
                    </el-col>
                    <template v-if="ruleForm.shipToDifferentAddr">
                        <el-col :span="10">
                            <div>
                                <el-divider>Shipping Address</el-divider>
                                <el-form-item label="First Name" prop="shiptofirstname">
                                    <el-input v-model="ruleForm.shiptofirstname"></el-input>
                                </el-form-item>
                                <el-form-item label="Last Name" prop="shiptolastname">
                                    <el-input v-model="ruleForm.shiptolastname"></el-input>
                                </el-form-item>
                                <el-form-item label="Address 1" prop="shipaddr1">
                                    <el-input v-model="ruleForm.shipaddr1"></el-input>
                                </el-form-item>
                                <el-form-item label="Address 2">
                                    <el-input v-model="ruleForm.shipaddr2"></el-input>
                                </el-form-item>
                                <el-form-item label="City" prop="shipcity">
                                    <el-input v-model="ruleForm.shipcity"></el-input>
                                </el-form-item>
                                <el-form-item label="State" prop="shipstate">
                                    <el-input v-model="ruleForm.shipstate"></el-input>
                                </el-form-item>
                                <el-form-item label="Zip" prop="shipzip">
                                    <el-input v-model="ruleForm.shipzip"></el-input>
                                </el-form-item>
                                <el-form-item label="Country" prop="shipcountry">
                                    <el-input v-model="ruleForm.shipcountry"></el-input>
                                </el-form-item>
                            </div>
                        </el-col>
                    </template>
                </el-row>
                <div class="button">
                    <el-button type="primary" @click="submitForm('ruleForm')">confirm</el-button>
                </div>

            </el-form>
        </div>


        <div v-if="show3">
            这是第三页——————调用支付宝接口...
        </div>

        <div>
            <el-button type="danger" style="margin-top: 12px;" @click="previous">取消订单</el-button>
            <el-button style="margin-top: 12px;" @click="previous">上一步</el-button>
            <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
        </div>
    </div>
    
</template>

<script>
    export default {
        data() {
            return {
                active: 0,
                show1: true,
                show2: false,
                show3: false,
                cartItem: [],
                itemOfAddBuy: [],



                committed: false,
                ruleForm: {
                    cardtype: '',
                    creditcard: '',
                    exprdate: '',
                    billtofirstname: '',
                    billtolastname: '',
                    billaddr1: '',
                    billaddr2: '',
                    billcity: '',
                    billstate: '',
                    billzip: '',
                    billcountry: '',
                    shipToDifferentAddr: false,
                    shiptofirstname: '',
                    shiptolastname: '',
                    shipaddr1: '',
                    shipaddr2: '',
                    shipcity: '',
                    shipstate: '',
                    shipzip: '',
                    shipcountry: '',
                },
                rules: {
                    cardtype: [{
                        required: true,
                        message: 'Please pick your card type',
                        trigger: 'change'
                    }],
                    creditcard: [{
                        required: true,
                        message: 'Please enter your card number',
                        trigger: 'blur'
                    }],
                    exprdate: [{
                        type: 'date',
                        required: true,
                        message: 'Please pick a month',
                        trigger: 'change'
                    }],
                    billtofirstname: [{
                        required: true,
                        message: 'Please enter your billtofirstname',
                        trigger: 'blur'
                    }],
                    billtolastname: [{
                        required: true,
                        message: 'Please enter your billtolastname',
                        trigger: 'blur'
                    }],
                    billaddr1: [{
                        required: true,
                        message: 'Please enter your address',
                        trigger: 'blur'
                    }],
                    billcity: [{
                        required: true,
                        message: 'Please enter your billcity',
                        trigger: 'blur'
                    }],
                    billstate: [{
                        required: true,
                        message: 'Please enter your billstate',
                        trigger: 'blur'
                    }],
                    billzip: [{
                        required: true,
                        message: 'Please enter your billzip',
                        trigger: 'blur'
                    }],
                    billcountry: [{
                        required: true,
                        message: 'Please enter your billcountry',
                        trigger: 'blur'
                    }],
                    shiptofirstname: [{
                        required: false,
                        message: 'Please enter a firstname',
                        trigger: 'blur'
                    }],
                    shiptolastname: [{
                        required: false,
                        message: 'Please enter a lastname',
                        trigger: 'blur'
                    }, ],
                    shipaddr1: [{
                        required: false,
                        message: 'Please enter a address',
                        trigger: 'blur'
                    }],
                    shipcity: [{
                        required: false,
                        message: 'Please enter a city',
                        trigger: 'blur'
                    }],
                    shipstate: [{
                        required: false,
                        message: 'Please enter a state',
                        trigger: 'blur'
                    }],
                    shipzip: [{
                        required: false,
                        message: 'Please enter a zip',
                        trigger: 'blur'
                    }],
                    shipcountry: [{
                        required: false,
                        message: 'Please enter a country',
                        trigger: 'blur'
                    }],
                }



            };
        },
        mounted() {
            this.initItemOfAddBuy();
        },

        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;

                if (this.active==0) {
                    this.show1 = true;
                    this.show2 = false;
                    this.show3 = false;
                } else if (this.active==1) {
                    this.show1 = false;
                    this.show2 = true;
                    this.show3 = false;
                } else if (this.active==2) {
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = true;
                }
            },
            previous() {
                if (this.active-- < 2) this.active = 0;

                if (this.active==0) {
                    this.show1 = true;
                    this.show2 = false;
                    this.show3 = false;
                } else if (this.active==1) {
                    this.show1 = false;
                    this.show2 = true;
                    this.show3 = false;
                } else if (this.active==2) {
                    this.show1 = false;
                    this.show2 = false;
                    this.show3 = true;
                }
            },
            addItemsToCart() {
                this.getRequest(/insertTheItemToCart/)
            },
            initItemOfAddBuy() {
                this.getRequest("/getCartByItemId/"+this.$route.params.itemId).then(resp => {
                    if (resp) {
                        //alert(JSON.stringify(resp))
                        this.cartItem = resp.obj;
                        //alert(JSON.stringify(this.cartItem))
                    }
                })
            },


            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        let orders = this.ruleForm.shipToDifferentAddr ? {
                            cardtype: this.ruleForm.cardtype,
                            exprdate: this.ruleForm.exprdate,
                            creditcard: this.ruleForm.creditcard,

                            billtofirstname: this.ruleForm.billtofirstname,
                            billtolastname: this.ruleForm.billtolastname,
                            billaddr1: this.ruleForm.billaddr1,
                            billaddr2: this.ruleForm.billaddr2,
                            billcity: this.ruleForm.billcity,
                            billstate: this.ruleForm.billstate,
                            billzip: this.ruleForm.billzip,
                            billcountry: this.ruleForm.billcountry,
                            shiptofirstname: this.ruleForm.shiptofirstname,
                            shiptolastname: this.ruleForm.shiptolastname,
                            shipaddr1: this.ruleForm.shipaddr1,
                            shipaddr2: this.ruleForm.shipaddr2,
                            shipcity: this.ruleForm.shipcity,
                            shipstate: this.ruleForm.shipstate,
                            shipzip: this.ruleForm.shipzip,
                            shipcountry: this.ruleForm.shipcountry,
                        } : {
                            cardtype: this.ruleForm.cardtype,
                            exprdate: this.ruleForm.exprdate,
                            creditcard: this.ruleForm.creditcard,
                            billtofirstname: this.ruleForm.billtofirstname,
                            billtolastname: this.ruleForm.billtolastname,
                            billaddr1: this.ruleForm.billaddr1,
                            billaddr2: this.ruleForm.billaddr2,
                            billcity: this.ruleForm.billcity,
                            billstate: this.ruleForm.billstate,
                            billzip: this.ruleForm.billzip,
                            billcountry: this.ruleForm.billcountry,
                        }
                        this.committed = true;

                        orders.userid='j2ee';
                        orders.billaddr1=this.ruleForm.billaddr1;


                        // alert(JSON.stringify(orders));

                        this.postRequest('/newOrders/',orders).then(resp => {
                            if (resp) {
                                this.$message.success("成功提交订单,请支付")
                            }
                        })
                    }
                });
            },
            changeRules() {
                let shipToDifferentAddr = this.ruleForm.shipToDifferentAddr
                this.rules.shiptofirstname[0].required = shipToDifferentAddr
                this.rules.shiptolastname[0].required = shipToDifferentAddr
                this.rules.shipaddr1[0].required = shipToDifferentAddr
                this.rules.shipstate[0].required = shipToDifferentAddr
                this.rules.shipcity[0].required = shipToDifferentAddr
                this.rules.shipzip[0].required = shipToDifferentAddr
                this.rules.shipcountry[0].required = shipToDifferentAddr
                this.rules.shipcountry[0].required = shipToDifferentAddr
            }


        }
    }
</script>

<style>
    .el-form {
        margin: 50px auto 100px auto;
        width: 1000px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
    }

    .el-button {
        margin-bottom: 15px;
    }

    .button {
        text-align: center;
    }
</style>