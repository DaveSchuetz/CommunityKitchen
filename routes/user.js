const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.js')
const User = require("../models/User")

router.get('/login', userController.login)
router.get('/:id/recipes', currentUser, userController.recipes)
router.get('/:id/cookbooks', currentUser, userController.cookbooks)
router.post('/login', userController.createLogin)
router.get('/signup', userController.signUp)
router.post('/signup', userController.createSignUp)
router.get("/:id/edit", currentUser, userController.edit)
router.post("/:id", currentUser, userController.update)
router.get('/logout', userController.logout)
router.get('/:id', currentUser, userController.show)
router.post('/add', userController.add)
router.delete('/:id', currentUser, userController.remove, userController.delCB, userController.delete)
function currentUser(req, res, next){
    User.findOne({_id: req.params.id})
    .then (user =>{
     if (String(user._id) == String(req.user._id)){
        return next()
     }else {
         res.redirect('/')
        }
})
}
module.exports = router