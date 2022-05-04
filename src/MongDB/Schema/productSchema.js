const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const productSchema = new Schema({
    status: Number,
    name: String,
    desc: String,
    price: Number,
});

module.exports = mongoose.model('products', productSchema);



// 用来获取列表项目