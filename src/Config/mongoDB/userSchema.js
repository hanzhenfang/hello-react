import mongoose from "mongoose";

const { Schema } = mongoose;

// 1.首先你要明白，Schema是用来约束数据库中数据的类型的，它只是规范，当你完成这一步的时候，并没有创建任何集合，只是创建了一个外壳,和TS的类型约束差不多
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

//2.
const db = {
    User: mongoose.model("User", userSchema)
}
module.exports = db;


