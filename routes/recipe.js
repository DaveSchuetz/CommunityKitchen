const express = require('express')
const router = express.Router()
const recipeController = require('../controllers/recipe')

router.post("/", recipeController.create)
router.get("/new", recipeController.new)
router.get("/:name", recipeController.show)

module.exports = router