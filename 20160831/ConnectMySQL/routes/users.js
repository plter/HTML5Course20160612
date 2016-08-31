var express = require('express');
var router = express.Router();
var mysql = require("mysql");

/* GET users listing. */
router.post('/add', function (req, res, next) {
    const conn = mysql.createConnection("mysql://root:@localhost/node");
    conn.connect(function (err) {
        if (!err) {
            conn.query("INSERT INTO user SET ?", req.body, function (err) {
                if (!err) {
                    res.redirect("/");
                } else {
                    res.json(err);
                }

                conn.end();
            });
        } else {
            res.json(err);
        }
    });
});

module.exports = router;
