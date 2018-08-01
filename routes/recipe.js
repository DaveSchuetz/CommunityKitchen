const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post("/new", isLoggedIn, recipeController.create)
router.get("/new", isLoggedIn, recipeController.new)
router.get("/:id", recipeController.show)
router.delete('/:id', isLoggedIn, recipeController.delete)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();
    res.redirect('/')
}
module.exports = router