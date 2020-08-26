<template>
    <div>
        <el-form
                :rules="rules"
                ref="loginForm"
                :model="loginForm"
                class="loginContainer">
            <h3 class="loginTitle">系统登录</h3>
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.userId" auto-complete="off" placeholder="请输入用户名"></el-input>
            </el-form-item>

            <el-form-item prop="password">
                <!-- @keydown.enter.native="submitLogin"是按回车触发登录事件，.native是饿了么UI中的写法 -->
                <el-input type="password" v-model="loginForm.password" auto-complete="off"
                          placeholder="请输入用户密码" @keydown.enter.native="submitLogin"></el-input>
            </el-form-item>

            <el-checkbox class="loginRemember" v-model="checked"></el-checkbox>

            <el-button type="primary" style="width: 100%" @click="submitLogin">登录</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                loading: false,
                loginForm:{
                    userId: 'j2ee1',
                    password: 'j2ee'
                },

                checked:true,

                rules:{
                    userId:[{required:true, message:'请输入用户名', trigger:'blur'}],
                    password:[{required:true, message:'请输入密码', trigger:'blur'}]
                }
            }
        },

        // 点击事件的方法：
        methods:{
            // 对表单进行校验
            submitLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        this.loading = true;
                        this.postRequest('/signIn/',this.loginForm).then(resp=>{
                            if (resp) {
                                alert(JSON.stringify(resp))
                                if (resp.status==200) {
                                    // window.sessionStorage.setItem("user", JSON.stringify(resp.obj));
                                    // 在这里进行页面的跳转，跳转到 Home 页, 这里的 $router 就是 main.js 中的 router
                                    this.$router.replace('/main')
                                } else if(resp.status==500) {
                                    this.$message.error(resp.msg);
                                }
                            }
                        })
                    } else {
                        this.$message.error('请输入所有字段');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style scoped>
    .loginContainer {
        /* 边框 15px */
        border-radius: 15px;
        /* 元素背景 padding-box */
        background-clip: padding-box;
        /* 外边距 上180px 自动 */
        margin: 180px auto;
        /* 宽度 350px */
        width: 350px;
        /* 内边距分别是上、右、下、左 */
        padding: 15px 35px 15px 35px;
        /* 白色背景 */
        background: #fff;
        /* 边框 */
        border: 1px solid #eaeaea;
        /* 阴影效果 水平、垂直、模糊、阴影颜色 */
        box-shadow: 0 0 25px #cac6c6;
    }

    .loginTitle {
        /* 外边距 上15px 自动 右20px 自动 */
        margin: 15px auto 20px auto;
        /* 字的位置 居中 */
        text-align: center;
        /* 字的颜色 偏灰色 */
        color: #505458;
    }

    .loginRemember {
        text-align: left;
        margin: 0px 0px 15px 0px;
    }
</style>