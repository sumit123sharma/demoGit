var express = require('express');
var router = express.Router();
var controller = require('../user/controller/controller')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// user routes
router.post('/signup' , controller.signup);
router.post('/login' , controller.login);



module.exports = router;
