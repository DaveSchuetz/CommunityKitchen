const express = require('express')
const router = express.Router()
const cookbookController = require('../controllers/cookbook')
const Cookbook = require('../models/Cookbook')

router.post('/new', isLoggedIn, cookbookController.create)
router.get('/new', isLoggedIn, cookbookController.new)
router.get('/:id/edit', currentUser, cookbookController.edit)
router.post('/:id', currentUser, cookbookController.update)
router.get('/:id', currentUser, cookbookController.show)
router.delete('/:id', currentUser, cookbookController.delete)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next()
    res.redirect('/')
}
function currentUser(req, res, next){
    Cookbook.findOne({_id: req.params.id})
    .then (cookbook =>{
     if (String(cookbook.author) == String(req.user._id)){
        return next()
     }else {
         res.redirect('/')
        }
})
}

module.exports = router