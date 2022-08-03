const axios = require('axios');
import {Message} from 'element-ui'

axios.defaults.baseURL = '//blog-server.hunger-valley.com'; // https: 省略的话表示协议名与当前页面保持一致
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

export default function request(url, method = 'GET',data = {}) {
    return new Promise((resolve,reject) => {
        let option = {
            url,
            method,
        }
        if(method.toLowerCase() == 'get'){  // axios 的GET请求的参数是 params,POST请求的参数是 data
            option.params = data
        }else {
            option.data = data
        }
        if(localStorage.token){   // 如果本地已经有 token,下次连接服务器时向主动向服务器发送 token
            axios.defaults.headers.common['Authorization'] = localStorage.token
        }

        axios(option).then(res => {
            console.log(res.data)
            if(res.data.status === 'ok'){
                if(res.data.token){
                    localStorage.token = res.data.token
                }
                resolve(res.data)
            }else {
                Message.error(res.data.msg)
                reject(res.data)
            }    
        }).catch(err => {
            Message.error('网络异常')
            reject({ msg: '网络异常' })
        })
    })
}