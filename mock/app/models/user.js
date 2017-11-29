var mongoose = require('mongoose')
var UserSchema = require('../schema/user.js')
var User = mongoose.model('User', UserSchema)

module.exports = User
