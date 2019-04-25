let models = require("../models");
let bcrypt = require('bcrypt');
let flash = require('connect-flash');

const passport = require('passport');
const myPassport = require('./../passport_setup')(passport);

const generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

exports.get_login = function(req, res, next) {
  res.render('users/login');
};

exports.do_login = function(req, res, next) {
  
  passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
  })(req, res, next);
};

exports.get_signup = function(req, res, next) {
  res.render('users/signup');
};

exports.do_signup = function(req, res, next) {
  
  const newUser = models.User.build({
    email: req.body.email,
    password: generateHash(req.body.password)
  });

  return newUser.save()
    .then(result => {
      passport.authenticate('local', {
        successRedirect: "/",
        failureRedirect: "/signup",
        failureFlash: true
      })(req, res, next);
    });
};

exports.do_logout = function(req, res, next) {
  req.logout();
  req.session.destroy();
  res.redirect("/");
}