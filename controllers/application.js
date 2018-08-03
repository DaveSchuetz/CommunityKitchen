const Recipe= require("../models/Recipe")

module.exports = {
  showAll: (req, res) => {
    Recipe.find({})
      .sort({ createdAt: -1 })
      .populate("author")
      .then(recipes => {
        res.render("showAll", { recipes })
      })
  },
  index: (req, res) => {
    Recipe.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .populate("author")
      .then(recipes => {
        res.render("index", { recipes })
      })
  }
}