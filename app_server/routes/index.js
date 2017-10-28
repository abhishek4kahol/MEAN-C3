var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');


/* GET home page. */

router.get('/', ctrlMain.index);
//Reference index method of controllers in route definition

module.exports = router;
