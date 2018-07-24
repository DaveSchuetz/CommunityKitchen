const Recipe = require("../models/Recipe")

module.exports = {
  show: (req, res) => {
    Recipe.findOne({ _id: req.params.id })
      .populate("author")
      .exec(function(err, recipe) {
        Comment.populate(recipe.comments, { path: "author" }, function(
          err,
          comments
        ) {
          recipe.comments = comments
          console.log(recipe)
          res.render("recipe/show", recipe)
        })
      })
  },
  new: (req, res) => {
    res.render("recipe/new")
  },
  create: (req, res) => {
    Recipe.create({
      content: req.body.recipe.content,
      author: req.user._id
    }).then(recipe => {
      req.user.recipes.push(recipe)
      req.user.save(err => {
        res.redirect(`/recipe/${recipe._id}`)
      })
    })
  },
  requireAuth: function(req, res, next) {
    if (req.isAuthenticated()) {
      next()
    } else {
      res.redirect("/")
    }
  }
}
