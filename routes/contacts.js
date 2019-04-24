var express = require('express');
var router = express.Router();

let contacts = require('../controllers/contacts');

router.get('/', contacts.get_contacts);
router.post('/', contacts.submit_contact);

module.exports = router;
