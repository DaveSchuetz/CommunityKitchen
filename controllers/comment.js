const Comment = require('../models/Comment')
const Recipe = require('../models/Recipe')

module.exports = {
    show: (req, res) => {
        Comment.findOne({_id: req.params.id})
        res.render("comment/show", comment)
    },
    // new: (req, res) => {
    //     res.render("comment/new")
    // },
    // create: (req, res) =>{
    //     Comment.create({
    //         content: req.body.content,
    //         author: req.user.id,
    //         recipe: req.recipe
    //     })
    //     .then(comment =>{
    //         console.log(req.user.id)
    //       Recipe.findOne({_id: req.body.recipe.id}).then(recipe =>{
    //         recipe.comments.push(comment)
    //         recipe.save(err =>{
    //             res.redirect(`/recipe/${recipe._id}`)
    //         })
    //       })
            
    //     })
    // },
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