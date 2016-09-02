var express = require('express');
var router = express.Router();
const md5 = require("js-md5");

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.post("/register", function (req, res) {
    req.models.user.create([{login: req.body.login, password: md5(req.body.password)}], function (err) {
        if (!err) {
            res.json({state: 1, message: "Success"});
        } else {
            console.log(err);
            res.json({state: 2, message: "Can not insert user"});
        }
    });
});

module.exports = router;
