var express = require('express');
var router = express.Router();
const mysqlConn = require("../src/MySQLConnection");
const Config = require("../src/Config");
const multer = require("multer");

const upload = multer({dest: `public/${Config.UPLOADS_DIRECTORY}/`});

/* GET home page. */
router.get('/', function (req, res, next) {

    var conn = mysqlConn.createConnection();
    conn.connect(function (err) {
        if (!err) {
            conn.query(`SELECT * FROM ${Config.IMAGES_TABLE}`, function (err, rows) {
                if (!err) {
                    res.render('index', {
                        title: 'Express',
                        rows: rows
                    });
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


router.post("/upload", upload.single("img"), function (req, res) {

    var conn = mysqlConn.createConnection();
    conn.connect(function (err) {
        if (!err) {
            conn.query(`INSERT INTO ${Config.IMAGES_TABLE} SET ?`,
                {
                    description: req.body.desc,
                    path: `${Config.UPLOADS_DIRECTORY}/${req.file.filename}`
                }, function (err) {

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
