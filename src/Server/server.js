const express = require('express');
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

const productModel = require('../MongDB/Schema/productSchema')

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
// 点击添加按钮，向一级列表添加子项目的接口数据
app.post("/addcategory", (req, res) => {
  const newCategory = {
    parentID: "0",
    name: req.body.newCategoryName
  }
  console.log(req.body)
  catagoryModel.create(newCategory, (err) => {
    res.send(err)
  })
})
// 点击更新按钮，向数据库请求修改数据
// app.post("updatecategory", (req, res) => {
//   const updateCategoryName = {
//     name: req.body.newCategoryName
//   }
// })

// 下面是约束二级级目录catagory集合,并且链接数据库的方法
const subCategorySchema = new Schema({
  name: [],
  parentID: String
})
const subCategoryModel = mongoose.model('subcategorys', subCategorySchema)

app.get("/subCategory", (req, res) => {

  subCategoryModel.find({}, (err, data) => {
    if (err) {
      res.send(err)
      console.log("发送失败")
    }
    else {
      res.send(data)
      console.log("发送成功")
    }
  })
})
// 下面是向二级列表里添加新的项目的接口方法
app.post("/addsubcategory", (req, res) => {
  const newSubCategory = {
    name: req.body.newCategoryName
  };
  console.log(newSubCategory)
  subCategoryModel.create(newSubCategory, (err) => {
    console.log(err)
    res.send(err)
  })
})
//下面是页面一进来uesEffect请求数据的渲染的列表接口
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
});

// 下面是一进来获取商品管理列表的请求

app.all('/product/list', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (JSON.stringify(req.body) === "{}") {
    productModel.find({}, (err, data) => {
      if (err) {
        console.log(err)
      }
      else {
        res.send(data)
      }
    })
  }
  else {
    //这里写添加数据的功能
  }
})

app.all('/product/search', (req, res) => {
  const { searchType, keyWord } = req.body;
  console.log(req.body)
  productModel.find({ [searchType]: { $regex: eval(`/${keyWord}/`) } }, (err, data) => {
    if (err) {
      res.send(err);
      console.log("请求失败")
    }
    else {
      res.send(data)
      console.log("数据返回")
    }
  })
})

// 下面是修改商品上架还是下架的状态信息
app.post('/product/updatestatus', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { productID, productStatus } = req.body;
  if (productStatus === 2) {
    productModel.findByIdAndUpdate({ _id: [productID] }, { status: 1 }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data)
      }
    })
  }
  else if (productStatus === 1) {
    productModel.findByIdAndUpdate({ _id: [productID] }, { status: 2 }, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.send(data)
      }
    })
  }

})

//在----商品管理---页面添加新的商品，发送请求来获取商品分类的二级栏
app.post('/subCategoryaaa', (req, res) => {
  console.log(req.body)
  const parentID = req.body.number
  console.log(parentID)
  subCategoryModel.findOne({ "parentID": [parentID] }, (err, data) => {
    if (err) {
      console.log(err)
    }
    else {
      res.send(data)
    }
  })
})

// 切换到src文件夹，然后node express.js,然后启动服务器
app.listen(5500, () => {
  console.log("服务器5500端口已经启动!!")
})