// const proxy = require('http-proxy-middleware')  //这是node.js里的方法 middleware是中间商的意思

// //跨域的主要思路在于找到一个 --中间商--proxy翻译过来也就是代理的意思，
// //我现在的端口是localhost:3000,如果我现在给5000端口的服务器发送请求，比如post请求，
// //我的请求数据是可以发送给服务器的，服务器也能收到，数据也会返回，问题就出现在：服务器返回给3000端口
// //的时候被拦截
// //这时候我们的思路就是欺骗浏览器

// module.exprots = function (app) {
//     app.use(
//         proxy('/xxx', //遇到/xxx前缀的请求，就会触发该代理配置
//             {
//                 target: 'http://localhost:5000', //请求转发给谁
//                 changeOrigin: true, //控制服务器收到的请求头中host的值
//                 pathRewrite: { '^/xxx': "" } //重写请求路径(必须写的)
//             }
//         )
//     )
// }