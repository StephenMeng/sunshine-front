import $ from 'jquery';
import { message } from 'antd';
const API_URL ="http://localhost:8080"

var MyFetch = {
    get(path,params) {
        var url=API_URL+"/"+path;
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
        }

        return new Promise((resolve, reject) => {
            console.log(url)
            fetch(url, {
                method:"get",
                // headers: new Headers({
                //     'token': localStorage.getItem("my-custom-token"),
                //     'Accept': 'application/json',
                //     'Content-Type': 'application/json',
                // })
            }).then(res => {
                return handleStatus(res);
            })
                .then(json => {
                    resolve(json);
                })
                .catch(err => {
                    reject(err);
                });
        });
    },
}

function handleStatus(res) {
    let errors;
    switch (res.status) {
        case 200:
            return res.json();
        case 500:
            console.log("500错误");
            message.error('服务器内部错误', 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
        case 404:
            message.error("资源不存在", 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
        case 401:
            message.error("登录会话过期,请重新登录", 5)
            localStorage.removeItem("my-custom-token")
            window.location.href = '/login'
            break;
        case 403:
            message.error("无权限访问", 5)
            errors = `${res.status}, ${res.statusText}`
            throw errors
        default:
    }
}
export default MyFetch;