var express = require('express');
var router = express.Router();

let contacts = require('../controllers/contacts');

router.get('/', contacts.get_contacts);

module.exports = router;
