const express = require('express')
const router = express.Router()
const cookbookController = require('../controllers/cookbook')

router.post("/new", currentUser, cookbookController.create)
router.get("/new", currentUser, cookbookController.new)
router.get("/:id/edit", currentUser, cookbookController.edit)
router.post("/:id", currentUser, cookbookController.update)
router.get("/:id", currentUser, cookbookController.show)
router.delete('/:id', currentUser, cookbookController.delete)
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