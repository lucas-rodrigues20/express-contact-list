exports.get_index = function(req, res, next) {
  res.render('home', { user: req.user });
};
