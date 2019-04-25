var express = require('express');
var router = express.Router();

let contacts = require('../controllers/contacts');
let { isLoggedIn } = require('../middlewares/authorization');

router.get('/', isLoggedIn, contacts.get_contacts);
router.post('/', isLoggedIn, contacts.submit_contact);
router.delete('/:contact_id', isLoggedIn, contacts.delete_contact);
router.put('/:contact_id', isLoggedIn, contacts.edit_contact);

module.exports = router;
