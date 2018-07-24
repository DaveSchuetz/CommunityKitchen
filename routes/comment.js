const express = require('express')
const router = express.Router()
const commentController = require('../controllers/comment')

router.post("/", commentController.create)
router.get("/new", commentController.new)
router.get("/:id", commentController.show)

module.exports = router