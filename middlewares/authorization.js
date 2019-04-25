let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next) {
  if (req.user)
    next();
  else
    res.redirect('/login');
}
