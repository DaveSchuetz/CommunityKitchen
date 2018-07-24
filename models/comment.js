const mongoose = require("../db/connection")
const Schema = mongoose.Schema
const Comment = new Schema({
    content: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model("Comment", Comment)