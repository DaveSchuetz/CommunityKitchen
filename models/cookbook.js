const mongoose = require("../db/connection")
const Schema = mongoose.Schema
const Cookbook = new Schema({
    title: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
}]
})

module.exports = mongoose.model("Cookbook", Cookbook)