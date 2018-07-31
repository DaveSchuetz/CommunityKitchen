const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post("/new", recipeController.create)
router.get("/new", recipeController.new)
router.get("/:id", recipeController.show)
router.delete('/:id', recipeController.delete)

module.exports = router