const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/CommunityKitchen')

mongoose.Promise = Promise

module.exports = mongoose