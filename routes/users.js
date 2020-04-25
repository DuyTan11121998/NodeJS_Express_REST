var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/**
 * http://localhost:3000/user/find/hoa
 */
router.get('/find/:name', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
