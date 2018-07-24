const express = require('express')
const router = express.Router()
const cookbookController = require('../controllers/cookbook')

router.post("/", cookbookController.create)
router.get("/new", cookbookController.new)
router.get("/:id", cookbookController.show)

module.exports = router