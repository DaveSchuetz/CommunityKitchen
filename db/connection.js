const mongoose = require('mongoose')
mongoose.Promise = Promise
const mongoUri = 'mongodb://localhost/CommunityKitchen'
mongoose
  .connect(mongoUri)
  .then(connection => console.log('Connection established to db'))
  .catch(connectionError => console.log('Connection failed!', connectionError))



module.exports = mongoose