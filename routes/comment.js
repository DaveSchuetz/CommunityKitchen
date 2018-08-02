const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

// router.post("/new", isLoggedIn, commentController.create)
// router.get("/new", isLoggedIn, commentController.new)
router.get("/:id/edit", currentUser, commentController.edit)
router.post("/:id", currentUser, commentController.update)
router.get("/:id", isLoggedIn, commentController.show)
router.delete('/:id', currentUser, commentController.delete)
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