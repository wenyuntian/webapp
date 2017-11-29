var mongoose = require('mongoose')
var bcript = require('bcryptjs')

var SALT_WORK_FACTOR = 10

var UserSchema = new mongoose.Schema({
  name: {
    unique: true,
    type: String
  },
  password: String,
  role: {
    default: 0,
    type: Number
  },
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updataAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.pre('save', function(next) {
  var user = this
  if(this.isNew) {
    this.meta.createAt = this.meta.updataAt = Date.now()
  }
  else{
    this.meta.updataAt = Date.now()
  }
  var _hash_fn = (text, cb) =>{
    bcript.hash(text, SALT_WORK_FACTOR, cb);
  }
  _hash_fn(user.password, function(err, hash) {
    if(err)
      return next(err);
    else {
      user.password = hash
      next();
    }
  })
})

UserSchema.methods = {
  comparePassword: function(_password, cb) {
    bcript.compare(_password, this.password, function(err, isMath){
      if(err)
        return cb(err)
      cb(null, isMath)
    })
  }
}

UserSchema.statics = {
  fetch: function(cb) {
    return this
      .find({})
      .sort('mata.updataAt')
      .exec(cb)
  },
  findById: function(id, cb) {
    return this
      .findOne({_id:id})
      .exec(cb)
  }
}

module.exports = UserSchema
