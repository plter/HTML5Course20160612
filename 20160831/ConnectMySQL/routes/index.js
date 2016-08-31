var express = require('express');
var router = express.Router();

var mysql = require("mysql");

/* GET home page. */
router.get('/', function (req, res, next) {

    var connection = mysql.createConnection("mysql://root:@localhost/node");
    connection.connect(function (err, result) {
        if (!err) {
            var id = 1;
            connection.query("SELECT * FROM user", function (err, rows, fields) {
                if (!err) {
                    res.render('index', {
                        title: 'Express',
                        rows: rows
                    });
                } else {
                    res.json(err);
                }

                connection.end();
            });
        } else {
            res.json(err);
        }
    });
});

module.exports = router;
