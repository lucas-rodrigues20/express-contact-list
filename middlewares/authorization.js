let createError = require('http-errors');

exports.isLoggedIn = function(req, res, next) {
  if (req.user)
    next();
  else
    res.redirect('/login');
}

exports.isAdmin = function(req, res, next) {
  if (req.user && req.user.is_admin)
    next();
  else if (req.user)
    res.redirect('/');
  else
    res.redirect('/login');
}

exports.blockAdmin = function(req, res, next) {
  if (req.user && req.user.is_admin)
    res.redirect('/contacts/admin');
  else
    next();
}
