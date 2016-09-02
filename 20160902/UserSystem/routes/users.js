var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get("/register", function (req, res) {
    res.render("users/register");
});

router.get("/login", function (req, res) {
    res.render("users/login");
});

module.exports = router;
