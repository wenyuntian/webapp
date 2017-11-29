const ad = require('./home/ad.js');
const list = require('./home/list');
const info = require('./detail/info');
const comment = require('./detail/comment');
const orderList = require('./user/orderList');

module.exports = function(app) {
	
  app.get('/api/ad', (req, res, next) => {
    res.send(ad);
  });

  app.get('/api/list/:city/:page', (req, res, next) => {
    res.send(list);
  });

  app.get('/api/search/:category/:keyWord?', (req, res, next) => {
    res.send(list);
  });

  app.get('/api/detail/info/:id', (req, res, next) => {
    res.send(info);
  });

  app.get('/api/detail/commit/:id/:page', (req, res, next) => {
    res.send(comment);
  });

  app.get('/api/orderList/:userName', (req, res, next) => {
    res.send(orderList);
  });

  app.post('/api/userComment', (req, res, next) => {
    console.log(req.body)
    
    res.send({
      result: '点评成功',
      status: 1000
    })
  });
}
