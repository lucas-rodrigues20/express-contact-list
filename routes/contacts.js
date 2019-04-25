var express = require('express');
var router = express.Router();

let contacts = require('../controllers/contacts');
let { isLoggedIn, isAdmin, blockAdmin } = require('../middlewares/authorization');

router.get('/', isLoggedIn, blockAdmin, contacts.get_contacts);
router.post('/', isLoggedIn, contacts.submit_contact);
router.delete('/:contact_id', isLoggedIn, contacts.delete_contact);
router.put('/:contact_id', isLoggedIn, contacts.edit_contact);

router.get('/admin', isAdmin, contacts.get_all_contacts);

module.exports = router;
