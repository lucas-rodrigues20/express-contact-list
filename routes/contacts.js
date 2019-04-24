var express = require('express');
var router = express.Router();

let contacts = require('../controllers/contacts');

router.get('/', contacts.get_contacts);
router.post('/', contacts.submit_contact);
router.delete('/:contact_id', contacts.delete_contact);
router.put('/:contact_id', contacts.edit_contact);

module.exports = router;
