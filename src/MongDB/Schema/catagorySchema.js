import mongoose from "mongoose";

const Schema = mongoose.Schema;
const catagorySchema = new Schema({
    parentID: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
})

const catagorys = mongoose.model('categorys', catagorySchema);

export default catagorys;




