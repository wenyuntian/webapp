let Home = require('../data/home/comme')

let Detail = require('../data/data.js')

exports.bookList = function(req, res) {
  let data = DateJson.bookList
  res.json({
    data: data
  })
}

exports.bookDetail = function(req, res) {
  let data = DateJson.bookDetail
  res.json({
    data: data
  }) 
}

exports.commendList = function(req, res) {
  let data = DateJson.commendList
  res.json({
    data: data 
  })
}