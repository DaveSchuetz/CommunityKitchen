const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')
const Recipe = require("../models/Recipe")

router.post("/new", isLoggedIn, recipeController.create)
router.get("/new", isLoggedIn, recipeController.new)
router.get("/:id", recipeController.show)
router.delete('/:id', currentUser, recipeController.delete)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next()
    res.redirect('/')
}
function currentUser(req, res, next){
    Recipe.findOne({_id: req.params.id})
    .then (recipe =>{
     if (String(recipe.author) == String(req.user._id)){
        return next()
     }else {
         res.redirect('/')
        }
})
}
module.exports = router