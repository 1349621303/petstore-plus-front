<template>
  <div>
      <default-layout>
          <div>
              <inputSearch></inputSearch>
          </div>
            <el-main style="margin: 0px;padding: 0px">
                <div>
                    <el-carousel indicator-position="outside">
                        <el-carousel-item v-for="item in 4" :key="item">
                            <h3>{{ item }}</h3>
                        </el-carousel-item>
                    </el-carousel>
                </div>
                <div>
                    Category:
                </div>


                <div>
                    <el-row>
                        <el-col :span="4" v-for="cat in category" >
                            <router-link :to="'/product'">
                                <el-card :body-style="{ padding: '0px' }">
                                    <img :src="cat.descn" class="image">
                                    <div style="padding: 8px;">
                                        <div class="bottom clearfix">
                                            <el-link type="danger" @click="$router.push(category)" class="button">{{cat.name}}</el-link>
                                        </div>
                                    </div>
                                </el-card>
                            </router-link>
                        </el-col>
                    </el-row>
                </div>









                <router-view/>
            </el-main>
      </default-layout>
  </div>

</template>

<script>

    import defaultLayout from '../layout/default'

    export default {
        name: "Home",
      components: {
          defaultLayout
      },
    data() {
      return {
          category: []
          // 获取用户对象的 session
        // user: JSON.parse(window.sessionStorage.getItem("user"))
      }
    },
        // 数据初始化一般放到 mounted 函数中
        mounted() {
            this.initPositions();
        },

      computed: {
        routes() {
          // 这里用计算属性 store.state 来获取状态对象 ???????????????
          return this.$store.state.routes;
        }
      },

    methods: {
      menuClick(index) {
          console.log(index);
          //console.log(indexPath);
          this.$router.push(index);
      },
      // commandHandler(cmd) {
      //   if (cmd == 'logout') {
      //       this.$confirm('此操作将注销登录, 是否继续?', '提示', {
      //       confirmButtonText: '确定',
      //       cancelButtonText: '取消',
      //       type: 'warning'
      //     }).then(() => {
      //
      //         // 退出登录的操作
      //       this.getRequest("/logout");
      //
      //       //登出操作
      //       // window.sessionStorage.removeItem("user")
      //
      //       // 退出登录的跳转前要初始化store，即清空store ;store.commit 方法触发状态变更
      //       // this.$store.commit('initRoutes', []);
      //
      //       // 跳转页面到登录页面「退出登录后」
      //       // this.$router.replace("/");
      //
      //     }).catch(() => {
      //       this.$message({
      //         type: 'info',
      //         message: '已取消操作'
      //       });
      //     });
      //   }else if (cmd == 'userinfo') {
      //     this.$router.push('/userinfo');
      //   }
      // },
        initPositions() {
            //这里调用后端的方法是新写的，getCategoryListAll直接返回List<Category>数据集
            this.getRequest("/getCategoryListAll").then(resp => {
                if (resp) {
                    // alert(JSON.stringify(resp))
                    this.category = resp;
                }
            })
         }
            // ,getCategoryById(success) {
        //   if (success ==)
        // }
    }
  }
</script>

<style>
  /*.homeHeader {*/
  /*  !*background-color: #409eff;*!*/
  /*  !*display: flex;*!*/
  /*  !* 字体居中 *!*/
  /*  !*align-items: center;*!*/

  /*  !*justify-content: space-between;*!*/
  /*  !*padding: 0px 15px;*!*/
  /*  !*box-sizing: border-box;*!*/
  /*}*/

  /*.homeHeader .title {*/
  /*  font-size: 30px;*/
  /*  font-family: STKaiti;*/
  /*  color: #ffffff*/
  /*}*/

  /*.homeHeader .userInfo {*/
  /*  cursor: pointer;*/
  /*}*/

  /*.el-dropdown-link img {*/
  /*  width: 48px;*/
  /*  height: 48px;*/
  /*  border-radius: 24px;*/
  /*  margin-left: 8px;*/
  /*}*/

  /*.homeWelcome{*/
  /*  text-align: center;*/
  /*  font-size: 30px;*/
  /*  font-family: STKaiti;*/
  /*  color: #409eff;*/
  /*  padding-top: 50px;*/
  /*}*/

  /*.homeRouterView {*/
  /*  margin-top: 10px;*/
  /*}*/
/*==============================================*/
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