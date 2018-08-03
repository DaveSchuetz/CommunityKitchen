const mongoose = require('../db/connection')
const Schema = mongoose.Schema
const Recipe = new Schema({
    name: String,
    ingredient: Array,
    directions: String,
    description: String,
    more: String,
    author:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now()
      }
})
module.exports = mongoose.model('Recipe', Recipe)