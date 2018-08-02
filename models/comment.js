const mongoose = require("../db/connection")
const Schema = mongoose.Schema
const Comment = new Schema({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
      },
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipe:{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }
})

module.exports = mongoose.model("Comment", Comment)