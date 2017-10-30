var express = require('express');
var router = express.Router();
var ctrlOthers = require('../controllers/main');

/* GET users listing. */
router.get('/about', ctrlOthers.about);


module.exports = router;
