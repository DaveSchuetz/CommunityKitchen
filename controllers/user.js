const User = require('../models/User')
const Recipe = require('../models/Recipe')
const Cookbook = require('../models/Cookbook')
const passport = require('passport')


module.exports = {
    show: (req, res) =>{
        User.findOne({ _id: req.params.id})
        .then(user => {
            res.render('user/show', {user})
        })
    },
    login: (req, res) => {
        res.render('user/login', {message: req.flash('loginMessage')})
    },
    createLogin: (req, res) => {
        const login = passport.authenticate('local-login', {
          successRedirect: '/',
          failureRedirect: '/user/login',
          failureFlash: true
        })
        return login(req,res)
    },
    signUp: (req,res) => {
        res.render('user/signup', {message: req.flash('signupMessage')})
    },
    createSignUp: (req, res) => {
        const signup = passport.authenticate('local-signup', {
          successRedirect: '/',
          failureRedirect: '/user/signup',
          failureFlash: true
        })
        return signup(req, res)
      },
    logout: (req, res) => {
        req.logout();
        res.redirect('/')
      },
    remove: (req,res, next) => {
        Recipe.deleteMany({ author: req.params.id})
        .then(() => {
            next()
        })
    },
    delCB: (req,res,next) => {
        Cookbook.deleteMany({ author: req.params.id})
        .then(() => {
            next()
        })
    },
    delete: (req, res) => {
        User.findByIdAndRemove(req.user.id)
        .then(()=>{
            res.redirect('/')
        })
    },
    recipes: (req, res) =>{
        User.findOne({ _id: req.params.id})
        .populate('recipes')
        .then(user => {
            res.render('user/recipes', {user})
        })
    },
    cookbooks: (req, res) =>{
        User.findOne({ _id: req.params.id})
        .populate('cookbooks')
        .then(user => {
            res.render('user/cookbooks', {user})
        })
    },
    edit: (req, res) =>{
        User.findOne({ _id: req.params.id })
        .then(user =>{
          res.render('user/update',{user})
        })
    },
      update: (req, res) =>{
        User.findOneAndUpdate({ _id: req.params.id },
        {
            local:{
                email: req.user.local.email,
                password: req.user.local.password,
                screenName: req.body.screenName
            }
        }).then(user =>{
          res.redirect(`/user/${user._id}`)
        })
      },
    add: (req,res) =>{
        Recipe.findOne({_id: req.params.id})
        .then(recipe =>{
            req.cookbook.recipes.push(recipe)
            req.cookbook.save(err => {
                res.redirect('/')
              })
        })
    }
}
