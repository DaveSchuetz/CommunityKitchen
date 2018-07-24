const Comment = require('../models/Comment')

module.exports = {
    show: (req, res) => {
        Comment.findOne({_id: req.params.id})
        res.render("comment/show", comment)
    },
    create: (req, res) =>{
        Comment.create({
            content: req.body.comment.content,
            author: req.body.author
        })
    },
    new: (req, res) => {
        res.render("comment/new")
    }
}