const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//链接数据库
mongoose.connect('mongodb://localhost:27017/user'); //链接mongdb服务下的user数据库
mongoose.connection.once("open", () => {
  console.log("数据库连接成功");
});
// <----------------下面是登录页面核对信息的操作---------------->
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
const userinfos = mongoose.model("userinfos", userInfoSchema)
// 以下设置服务器相关请求,核对用户名信息是否正确
app.get('/server', (request, response) => {
  // 设置响应头允许跨域
  response.setHeader('Access-Control-Allow-Origin', '*');
  userinfos.find({}, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      response.send(data)
    }
  })
});

// <----------------下面是注册页面核对信息的操作---------------->
app.post('/signin', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
  // 获取用户注册表单的值
  const userData = {
    userName: request.body.createUserName,
    passWord: request.body.createPassword
  };
  //核实数据库是否存在该用户名
  userinfos.findOne({ "userName": userData.userName }, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      if (data) {
        response.send("重复")
      }
      else {
        userinfos.create(userData, (err) => {
          if (err) { console.log(request.createPassword) }
          else {
            response.send("成功")
          }
        })
      }
    }
  })
})

// 下面是约束一级目录catagory集合,并且链接数据库的方法

const catagorySchema = new Schema({
  parentID: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true
  }
});
const catagoryModel = mongoose.model('categorys', catagorySchema)

// 下面是约束二级级目录catagory集合,并且链接数据库的方法
const subCatagorySchema = new Schema({
  name: {
    type: String,
    required: true
  }
})
const subCatagoryModel = mongoose.model('subcategorys', subCatagorySchema)

app.get('/catagoryList', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');

  catagoryModel.find({}, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      response.send(data)
    }
  });
})

// 切换到src文件夹，然后node express.js,然后启动服务器
app.listen(5500, () => {
  console.log("服务器5500端口已经启动!!")
})