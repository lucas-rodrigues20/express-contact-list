var express = require('express');
var router = express.Router();

let index = require('../controllers/index');
let users = require('../controllers/users');

/* GET home page. */
router.get('/', index.get_index);

router.get('/login', users.get_login);
router.post('/login', users.do_login);

router.get('/signup', users.get_signup);
router.post('/signup', users.do_signup);

router.get('/logout', users.do_logout);

module.exports = router;
