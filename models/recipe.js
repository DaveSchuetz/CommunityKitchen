const mongoose = require("../db/connection")
const Schema = mongoose.Schema
const Recipe = new Schema({
    name: String,
    ingredient: [String],
    directions: String,
    description: String,
    more: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    createdAt: {
        type: Date,
        default: Date.now()
      },
    comments:[{
        type: Schema.Types.ObjectId,
        ref: "Comment"
    }]
})
module.exports = mongoose.model("Recipe", Recipe)