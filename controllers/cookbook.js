const Cookbook = require('../models/Cookbook')

module.exports = {
    show: (req, res) => {
        Cookbook.findOne({ _id: req.params.id })
          .populate("author")
          .then(cookbook =>{
            res.render("cookbook/show", {cookbook})
          })
      },
      new: (req, res) => {
        res.render("cookbook/new")
      },
      create: (req, res) => {
        Cookbook.create({
          title: req.body.title,
          author: req.user._id
        }).then(cookbook => {
          req.user.cookbooks.push(cookbook)
          req.user.save(err => {
            res.redirect(`/cookbook/${cookbook._id}`)
          })
        })
      },
      edit: (req, res) =>{
        Cookbook.findOne({ _id: req.params.id })
        .then(cookbook =>{
          res.render("cookbook/update",{cookbook})
        })
    },
      update: (req, res) =>{
        Cookbook.findOneAndUpdate({ _id: req.params.id },
        {
          title: req.body.title
        }).then(cookbook =>{
          res.redirect(`/cookbook/${cookbook._id}`)
        })
      },
      delete: (req, res) => {
        Cookbook.findOneAndRemove({ _id: req.params.id})
        .then(() =>{
            res.redirect('/')
        })
      }
    }