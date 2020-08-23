<template>
    <div>
        Test2!!!!!!

        <!--<div>-->
        <!--    <el-page-header @back="goBack" content="详情页面">-->
        <!--    </el-page-header>-->
        <!--</div>-->

        <el-row>
            <el-col :span="4" v-for="cat in category" >
                <el-card
                        :body-style="{ padding: '0px' }">
                    <img :src="cat.descn" class="image">
                    <div style="padding: 8px;">
                        <div class="bottom clearfix">
                            <el-link href="/#/test1" type="danger" class="button">{{cat.name}}</el-link>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>



        <el-steps :space="200" :active="active" finish-status="success">
            <el-step title="确认商品信息"></el-step>
            <el-step title="确认收货信息"></el-step>
            <el-step title="确认支付"></el-step>
        </el-steps>

        <el-button style="margin-top: 12px;" @click="previous">上一步</el-button>
        <el-button style="margin-top: 12px;" @click="next">下一步</el-button>
    </div>


</template>

<script>
    export default {
        name: "Test2",
        data() {
            return {
                category: [],
                active: 0
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
                this.getRequest("/getCategoryListAll").then(resp => {
                    if (resp) {
                        // alert(JSON.stringify(resp))
                        this.category = resp;
                    }
                })
            },next() {
                if (this.active++ > 2) this.active = 0;
            },previous() {
                if (this.active-- < 2) this.active = 0;
            }



        }
    }
</script>

<style scoped>

</style>