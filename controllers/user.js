const User = require("../models/User")
const passport = require("passport")

module.exports = {
    show: (req, res) =>{
        User.findOne({ _id:req.params.id})
        res.render("user/show", { user })
    },
    login: (req, res) => {
        res.render("user/login", {message: req.flash("loginMessage")})
    },
    createLogin: (req, res) => {
        const login = passport.authenticate("local-login", {
          successRedirect: "/",
          failureRedirect: "/login",
          failureFlash: true
        })
        return login(req,res)
    },
    signUp: (req,res) => {
        res.render("user/signup", { message: req.flash("signupMessage") })
    },
    createSignUp: (req, res) => {
        const signup = passport.authenticate("local-signup", {
          successRedirect: "/",
          failureRedirect: "/signup",
          failureFlash: true
        })
        return signup(req, res)
      },
      logout: (req, res) => {
        req.logout();
        res.redirect("/")
      }
}
