import axios from 'axios'
import { Message } from "element-ui";

// 响应拦截器
axios.interceptors.response.use(success=>{
    //服务器没错，但是逻辑有问题
    if (success.status && success.status==200 && success.data.status==500) {
        Message.error({message:success.data.msg})
        return;
    }
    // 如果登录成功，那么会提示一条登录成功的信息
    if (success.data.msg) {
        Message.success({ message : success.data.msg })
    }

    return success.data;
},error=> {
    if(error.response.status == 504 || error.response.status ==404){
        Message.error({message:'服务器被吃了'})

    }else if (error.response.status == 403){
        Message.error({message:'权限不足，请联系管理员'})
    }
    else if (error.response.status ==401){
        Message.error({message:'尚未登陆，请登录'})
        //router.replace('/');
    }
    else {
        if (error.response.data.msg) {
            Message.error({message: error.response.data.msg})
        } else {
            Message.error({message: '未知错误！'})
        }
    }
    return;
})


//定义一个全局变量用来封装
let base = '';

export const postKeyValueRequest=(url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params,
        // 把这个json数据格式的参数（params）转换成非json的key-value
        // transformRequest在向服务器发送前，修改请求数据
        // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        transformRequest:[function (data) {
            let ret = '';
            // 把数据都遍历一遍，对其重新进行编码
            for(let i in data){
                // 变成 key-value 就是 key=value&，这里是对url进行解析
                ret+=encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            console.log(ret)
            return ret;
        }],
        // 在http请求中，ContentType都是默认的值 application/x-www-form-urlencoded, 这种编码格式的特点是：name/value值对，
        // 每组之间使用&连接，而name与value之间是使用 = 连接，比如 key=xxx&name=111&password=123456; 键值对一般的情况下是没有什么问题的
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}

//传递json的post
export const postRequest=(url,params)=>{
    return axios({
        method:'post',
        url:`${base}${url}`,
        data:params
    })
}
//传递json的put
export const putRequest=(url,params)=>{
    return axios({
        method:'put',
        url:`${base}${url}`,
        data:params
    })
}
//传递json的get
export const getRequest=(url,params)=>{
    return axios({
        method:'get',
        url:`${base}${url}`,
        data:params
    })
}
//传递json的delete
export const deleteRequest=(url,params)=>{
    return axios({
        method:'delete',
        url:`${base}${url}`,
        data:params
    })
}

