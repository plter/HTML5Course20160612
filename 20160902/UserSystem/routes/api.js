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

            switch (err.errno) {
                case 1062:
                    res.json({state: err.errno, message: "Duplicate entry"});
                    break;
                default:
                    res.json({state: 2, message: "Can not insert user"});
                    break;
            }

        }
    });
});

router.post("/login", function (req, res) {
    req.models.user.find({login: req.body.login}, function (err, rows) {

        if (rows.length) {
            var user = rows[0];

            if (md5(req.body.password) == user.password) {
                req.session.currentUser = user.login;
                req.session.currentUserId = user.id;
                res.json({state: 1, message: "Success"});
            } else {
                res.json({state: 4, message: "Password wrong"});
            }
        } else {
            res.json({state: 3, message: "No such user"});
        }
    });
});

module.exports = router;
