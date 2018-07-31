const express = require('express')
const server = express()
const flash = require('connect-flash')
const hbs = require("hbs")
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')
const passport = require('passport')
const methodOverride = require('method-override')
// const usersController = require('./controllers/user')
hbs.registerPartials(__dirname + "/views/partial")
server.use(cookieParser())
server.use(bodyParser.urlencoded({ extended: true }))
server.use(session({secret: 'schuetz-project2-cookbook'}))
server.use(flash())
server.set('view engine', 'hbs')
server.use(express.static(__dirname + '/public'))



require('./config/passport')(passport)
server.use(passport.initialize())
server.use(passport.session())
server.use(methodOverride('_method'))
server.use(function(req, res, next) {
  res.locals.currentUser = req.user
  next()
})
server.use(require("./routes/index.js"))
// server.use('/', usersController)

server.set('port', process.env.PORT || 8236)

server.listen(server.get('port'), () => console.log(`testing on ${server.get('port')}`))

