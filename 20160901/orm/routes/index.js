var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    req.models.user.find({/*id: 1*/}, function (err, user) {
        if (!err) {

            console.log(user);

            // res.send("OK");
            res.render('index', {title: 'Express', users: user});
        } else {
            res.json(err);
        }
    });
});

module.exports = router;
