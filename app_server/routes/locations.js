var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/main');


/* GET location page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);


//Reference index method of controllers in route definition

module.exports = router;
