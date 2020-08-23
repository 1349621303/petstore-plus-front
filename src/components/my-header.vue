<template>
    <div>
        <el-menu
                :default-active="$route.path"
                router mode="horizontal">

                <!--class="el-menu-demo"-->
                <!--mode="horizontal"-->
                <!--@select="handleSelect"-->
                <!--background-color="#545c64"-->
                <!--text-color="#fff"-->
                <!--style="margin: 0px;padding: 0px"-->
                <!--active-text-color="#ffd04b"-->

            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                {{ item.navItem }}
            </el-menu-item>

            <!--<el-menu-item index="1">>宠物商城</el-menu-item>-->
            <!--<el-menu-item index="2">购物车</el-menu-item>-->
            <!--<el-menu-item index="3">我的订单</el-menu-item>-->
            <!--<el-menu-item index="4">消息通知</el-menu-item>-->
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "my-header",
        data() {
            return {
                navList:[
                    {name:'Main',navItem:'宠物商城'},
                    {name:'/cart',navItem:'购物车'},
                    {name:'/publishProject',navItem:'我的订单'},
                    {name:'/personalCenter',navItem:'消息通知'},
                    {name:'/manageCenter',navItem:'个人中心'},
                ]
            }
        }
    }
</script>

<style scoped>

</style>