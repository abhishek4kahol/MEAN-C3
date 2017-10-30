module.exports.about = function(req, res) {
  res.render('others', {title: 'About'});
};

module.exports.homelist = function(req, res) {
  res.render('locations', {title: 'Home'});
};

module.exports.locationInfo = function(req, res) {
  res.render('locations', {title: 'LocationInfo'});
};

module.exports.addReview = function(req, res) {
  res.render('locations', {title: 'addReview'});
};
