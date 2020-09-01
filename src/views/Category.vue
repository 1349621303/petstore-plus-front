<template>
    <div>
        <div>
            <el-carousel   indicator-position="outside">
                <el-carousel-item v-for="item in 4" :key="item">
                    <h3>{{ item }}</h3>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div>
            <el-row>
                <el-col :span="4" v-for="category in categorys" >
                    <router-link :to="'product/' + category.catid">
                        <el-card :body-style="{ padding: '0px' }">
                            <!--<img :src="category.descn" class="image">-->
                            <img :src="category.descn" alt="" style="width: 300px; height: 250px">


                            <div style="padding: 8px;">
                                <div class="bottom clearfix">
                                    <el-link type="danger" @click="$router.push(category)" class="button">{{category.name}}</el-link>
                                </div>
                            </div>
                        </el-card>
                    </router-link>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Category",
        components: {

        },
        data() {
            return {
                categorys: []
            }
        },
        mounted() {
            this.initPositions();
        },
        computed: {

        },
        methods: {
            menuClick(index) {
                console.log(index);
                this.$router.push(index);
            },
            initPositions() {
                this.getRequest("/getCategoryList").then(resp => {
                    if (resp) {
                        this.categorys = resp.obj;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 18px;
        opacity: 0.75;
        line-height: 300px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>