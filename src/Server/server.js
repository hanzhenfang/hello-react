const express = require('express');
const app = express();
const mongoose = require("mongoose");

//链接数据库
mongoose.connect('mongodb://localhost:27017/user'); //链接mongdb服务下的user数据库
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
});
const Schema = mongoose.Schema;//获取Schema对象
const userInfoSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  passWord: {
    type: String,
    required: true
  }

});

const userInfo = mongoose.model('userInfo', userInfoSchema);

// userInfo.create(
//   {
//     userName: "admin1",
//     passWord: "admin"
//   },
//   (err,) => {
//     if (err) {
//       console.log(err)
//     }
//   })

// userInfo.find(
//   { userName: "admin1" },  //设置查询条件
//   { userName: 1, _id: 0 }, //设置查询显示的某个字段，id默认显示
//   { skip: 1, limit: 1 },
//   (err, docs) => {
//     if (err) {
//       console.log(err)
//     }
//     else {
//       console.log(docs)
//     }
//   }
// )

// userInfo.updateOne({ userName: "admin" }, { $set: { passWord: "hanzhenfang" } }, (erro) => {
//   console.log(erro);
// })

let user_2 = new userInfo({
  userName: "admin2",
  passWord: "admin2"
});

user_2.sex = "男";

// -------------------以下设置服务器相关请求------------
app.get('/server', (request, response) => {
  // 设置响应头允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');

  response.send(
    {
      login: { username: "admin", password: "admin" },
    }
  )

});

app.post('/signin', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.send(
    {
      login: { username: "admin", password: "admin" },
    }
  )
})


// 切换到src文件夹，然后node express.js,然后启动服务器
app.listen(5500, () => {
  console.log("服务器5500端口已经启动!!")
})