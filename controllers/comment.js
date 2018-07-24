const Comment = require('../models/Comment')

module.exports = {
    show: (req, res) => {
        Comment.findOne({_id: req.params.id})
        res.render("comment/show", comment)
    },
    new: (req, res) => {
        res.render("comment/new")
    }
}