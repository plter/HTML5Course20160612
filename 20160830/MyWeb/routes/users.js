var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

//Action
router.get('/login', function (req, res, next) {
    res.send('Login page');
});

router.get('/register', function (req, res, next) {
    res.send('Register page');
});

module.exports = router;
