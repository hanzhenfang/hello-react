//包含应用所有类型的接口请求函数
import Myajax from './ajax'
const proxy = require('http-proxy-middleware')


// 1.用户请求登陆页面，发送“GET”请求获取数据库是否有该用户
export const reqLogin = (username, password) =>
    Myajax('/login', { username, password });

// 2.用户注册页面，发送“POST”请求向数据库添加用户
export const reqSignIn = (username, password) =>
    Myajax('/signin', { username, password }, "post");

module.exports = function (app) {
    app.use(proxy('api1', {
        target: 'http://localhost:5500',
        changeOrigin: true,
        pathRewrite: { '^/api1': "" }
    }))
}