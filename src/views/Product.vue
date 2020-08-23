<template>
    <div>
        <div>
            <el-row>
                <el-col :span="4" v-for="product in products" >
                    <router-link :to="'/item/' + product.productid">
                        <el-card :body-style="{ padding: '0px' }">
                            <img :src="product.descn" class="image">
                            <div style="padding: 8px;">
                                <div class="bottom clearfix">
                                    <el-link type="danger" @click="$router.push(product)" class="button">{{product.name}}</el-link>
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
        name: "Product",
        components: {

        },
        data() {
            return {
                products: []
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
                this.getRequest("/getProductListByCategory/"+this.$route.params.categoryId).then(resp => {
                    if (resp) {
                        this.products = resp.obj;
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>