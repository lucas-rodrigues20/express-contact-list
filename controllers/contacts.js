const models = require('../models');

exports.get_contacts = function(req, res, next) {

  return models.Contact
    .findAll()
    .then(contacts => {
      res.render('contacts/contacts', { contacts });
    });
};

exports.submit_contact = function(req, res, next) {

  return models.Contact
    .create({
      email: req.body.email
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
