const express = require('express')
const router = express.Router()
const applicationController = require('../controllers/application.js')

router.get('/', applicationController.index)
router.get('/showAll', isLoggedIn, applicationController.showAll)
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next()
    res.redirect('/')
}
module.exports = router