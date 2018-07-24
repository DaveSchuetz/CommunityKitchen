const Cookbook = require('../models/Cookbook')

module.exports = {
    show: (req, res) => {
        Cookbook.findOne({ _id:req.params.id})
        res.render("cookbook/show", { cookbook })
    },
    new: (req, res) => {
        res.render("cookbook/new")
      },
    create: (req, res) => {
    Cookbook.create({
        content: req.body.cookbook.content,
        author: req.user._id
    }).then(cookbook => {
        req.user.cookbooks.push(cookbook)
        req.user.save(err => {
        res.redirect(`/cookbook/${cookbook._id}`)
        })
    })
    },
    requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
        next();
        } else {
        res.redirect("/");
        }
    }
}