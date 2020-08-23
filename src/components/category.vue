<template>
    <div>

        <div class="posManaMain">
            <!-- :data="positions" 这里是指返回服务器端的数据-->
            <!-- prop="id",prop="createDate" 这些都是数据 -->
            <el-table
                    :data="positions"
                    border
                    @selection-change="handleSelectionChange"
                    size="small"
                    stripe
                    style="width: 70%">
                <!--多选-->

                <el-table-column
                        prop="catid"
                        label="编号"
                        width="55">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="名称"
                        width="180">
                </el-table-column>

            </el-table>

        </div>

    </div>
</template>


<script>
    export default {
        name: "PosMana",
        data() {
            return {
                pos: {
                    name: ''
                },
                dialogVisible: false,
                loading: false,
                updatePos: {
                    name: '',
                    enabled: false
                },
                multipleSelection: [],
                positions: []
            }
        },
        // 数据初始化一般放到 mounted 函数中
        mounted() {
            this.initPositions();
        },
        methods: {

            handleSelectionChange(val) {
                this.multipleSelection = val;
            },


            initPositions() {
                this.loading = true;
                this.getRequest("/getCategoryList").then(resp => {
                    this.loading = false;
                    if (resp) {
                        this.positions = resp;
                    }
                })
            }
        }
    }
</script>
<style scoped>

</style>