import mongoose from 'mongoose'

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

export default userInfo;

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