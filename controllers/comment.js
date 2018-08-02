const Comment = require('../models/Comment')

module.exports = {
    show: (req, res) => {
        Comment.findOne({_id: req.params.id})
        res.render("comment/show", comment)
    },
    new: (req, res) => {
        res.render("comment/new")
    },
    create: (req, res) =>{
        Comment.create({
            content: req.body.content,
            author: req.user._id
        })
        .then(comment =>{
            req.recipe.comments.push(comment)
            req.recipe.save(err =>{
                res.redirect(`/recipe/${recipe._id}`)
            })
        })
    },
    edit: (req, res) =>{
        Comment.findOne({ _id: req.params.id })
        .then(comment =>{
          res.render("comment/update",{comment})
        })
    },
    update: (req, res) =>{
        Comment.findOneAndUpdate({ _id: req.params.id },
        {content: req.body.content})
        .then(comment =>{
            res.redirect(`/recipe/${comment._id}`)
        })
    },
    delete: (req, res) => {
        Comment.findOneAndRemove({ _id: req.params.id})
        .then(() =>{
          res.redirect('/')
      })
    }
}