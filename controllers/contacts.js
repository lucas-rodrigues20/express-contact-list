const models = require('../models');

exports.get_contacts = function(req, res, next) {

  return models.Contact
    .findAll({
      where: {user_id: req.user.id }
    })
    .then(contacts => {
      res.render('contacts/contacts', { contacts: contacts, user: req.user });
    });
};

exports.submit_contact = function(req, res, next) {

  return models.Contact
    .create({
      email: req.body.email,
      user_id: req.user.id
    })
    .then(contact => {
      res.redirect('/contacts');
    });
};

exports.delete_contact = function(req, res, next) {

  return models.Contact
    .destroy({
      where: { id: req.params.contact_id }
    })
    .then(contact => {
      res.redirect('/contacts');
    });
};

exports.edit_contact = function(req, res, next) {

  return models.Contact
    .update({
      email: req.body.edit_email
    }, {
      where: { id: req.params.contact_id }
    })
    .then(contact => {
      res.redirect('/contacts');
    });
};
