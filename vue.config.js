let proxyObj = {};
// 拦截http请求,解决跨域访问问题
proxyObj['/'] = {
    ws: false,
    target: 'http://localhost:8084',
    changeOrigin: true,
    pathRewrite:{
        '^/' : ''
    }
}
module.exports={
    devServer:{
        host:'localhost',
        port:8080,
        proxy:proxyObj
    }
}