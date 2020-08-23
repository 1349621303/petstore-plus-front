<template>
    <div>
        <el-container>
            <el-header style="margin: 0px;padding: 0px">
                <div>
                    <el-menu
                            :default-active="$route.path"
                            class="el-menu-demo"
                            mode="horizontal"
                            @select="handleSelect"
                            background-color="#545c64"
                            text-color="#fff"
                            style="margin: 0px;padding: 0px"
                            active-text-color="#ffd04b">
                        <el-menu-item index="/main">宠物商城</el-menu-item>
                        <el-menu-item index="../#/cart">购物车</el-menu-item>
                        <el-menu-item index="../#/order">我的订单</el-menu-item>
                        <el-menu-item index="../#/message">消息通知</el-menu-item>
                    </el-menu>
                </div>
            </el-header>

            <el-main class="el-main" style="margin: 0px;padding: 0px">

                <router-view></router-view>


            </el-main>

            <el-footer style="margin: 0px;padding: 0px">
                <div class="Footer">
                    <div class="footerContainer">
                        <el-row>
                            <el-col :xs="24" :sm="6">
                                <h1 class="logo">JPetStore <small>2019</small></h1>
                                <p>🏫 Central South University</p>
                                <p></p>
                                <p>👨‍💻 Lgx</p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style  scoped>
    .el-main {
        background-color: #E9EEF3;
        color: #333;
        /*text-align: center;*/
        /*line-height: 160px;*/
        height: 860px;
    }

    .Footer {
        height: 95px;
        background-color: #E9EEF3;
        .footerContainer {
            max-width: 1000px;
            margin: 0 auto;
            padding: 2rem 2rem;
            .logo{
                color: #4C566A;
                font-size: 2rem;
                line-height: 5rem;
                font-weight: 400;
            }
            p{
                font-size: .8rem;
                font-weight: 500;
                color: #4C566A;
                line-height: 2rem;
            }
        }
    }

    *,*:before,*:after {
        box-sizing: border-box;
        margin: 0;
    }

</style>