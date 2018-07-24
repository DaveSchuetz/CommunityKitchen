const { Recipe } = require("../models/Recipe")

// module.exports = {
//   index: (req, res) => {
//     Recipe.find({})
//       .sort({ createdAt: -1 })
//       .limit(10)
//       .populate("author")
//       .then(recipes => {
//         res.render("app/index", { recipes })
//       })
//   }
// }

module.exports = {
  index: (req, res) => {
    res.render("index", { page: "homepage" })
  }
}