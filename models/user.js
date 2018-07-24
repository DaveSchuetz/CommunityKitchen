const mongoose = require("../db/connection")
const Schema = mongoose.Schema
const User = new Schema({
    local:{
        screenName: String,
        email: String,
        password: String,
        image: String
    },
    cookbooks:[{
        type: Schema.Types.ObjecdId,
        ref: "Cookbook"
    }],
    recipes: [{
        type: Schema.Types.ObjectId,
        ref: "Recipe"
    }]
})

User.methods.encrypt = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  }
  
User.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password)
  }

module.exports = mongoose.model("User", User)
