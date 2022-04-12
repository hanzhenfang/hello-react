const express = require('express');

const app = express();

app.get('/server', (request, response) => {
  // 设置响应头允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  response.send(
    {
      login: { username: "admin", password: "admin" },
    }
  )

});

// 切换到src文件夹，然后node express.js,然后启动服务器
app.listen(5500, () => {
  console.log("服务器5500端口已经启动!!")
})