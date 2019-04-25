let validator = require('validator');
let models = require('./../models');

const validateCreateUserFields = function(errors, req) {
  if (!validator.isEmail(req.body.email))
    errors['email'] = "Please use a valid email.";

  if (!validator.isAscii(req.body.password))
    errors['password'] = "Invalid characters.";

  if (!validator.isLength(req.body.password, { min: 8 }))
    errors['password'] = "Password needs to be at least 8 characters.";  

};

exports.validateUser = function(errors, req) {
  return new Promise(function(resolve, reject) {

    validateCreateUserFields(errors, req);

    return models.User
      .findOne({
        where: { email: req.body.email }
      })
      .then(user => {
        if (user != null)
          errors['email'] = "Email is already in use.";

        resolve(errors);
      });

  });
}
