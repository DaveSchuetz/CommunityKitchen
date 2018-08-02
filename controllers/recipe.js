const Recipe = require("../models/Recipe")

module.exports = {
  show: (req, res) => {
    Recipe.findOne({ _id: req.params.id })
      .populate("author")
      .then(recipe =>{
        res.render("recipe/show", {recipe})
      })
  },
  new: (req, res) => {
    res.render("recipe/new")
  },
  create: (req, res) => {
    Recipe.create({
      name: req.body.name,
      ingredient: [req.body.ingredient],
      directions: req.body.directions,
      description: req.body.description,
      more: req.body.more,
      author: req.user._id
    }).then(recipe => {
      req.user.recipes.push(recipe)
      req.user.save(err => {
        res.redirect(`/recipe/${recipe._id}`)
      })
    })
  },
  edit: (req, res) =>{
    Recipe.findOne({ _id: req.params.id })
    .then(recipe =>{
      res.render("recipe/update",{recipe})
    })
},
  update: (req, res) =>{
    Recipe.findOneAndUpdate({ _id: req.params.id },
    {
      name: req.body.name,
      ingredient: [req.body.ingredient],
      directions: req.body.directions,
      description: req.body.description,
      more: req.body.more
    }).then(recipe =>{
      res.redirect(`/recipe/${recipe._id}`)
    })
  },
  delete: (req, res) => {
    Recipe.findOneAndRemove({ _id: req.params.id})
    .then(() =>{
        res.redirect('/')
    })
  }
}

