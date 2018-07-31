const User = require("../models/User")
const Recipe = require("../models/Recipe")
const passport = require("passport")


module.exports = {
    show: (req, res) =>{
        User.findOne({ _id: req.params.id})
        .populate("recipes")
        .then(user => {
            res.render("user/show", {user})
        })
    },
    login: (req, res) => {
        res.render("user/login", {message: req.flash("loginMessage")})
    },
    createLogin: (req, res) => {
        const login = passport.authenticate("local-login", {
          successRedirect: "/",
          failureRedirect: "/user/login",
          failureFlash: true
        })
        return login(req,res)
    },
    signUp: (req,res) => {
        res.render("user/signup", {message: req.flash("signupMessage")})
    },
    createSignUp: (req, res) => {
        const signup = passport.authenticate("local-signup", {
          successRedirect: `/user/${User._id}`,
          failureRedirect: "/user/signup",
          failureFlash: true
        })
        return signup(req, res)
      },
    logout: (req, res) => {
        req.logout();
        res.redirect("/")
      }
}
