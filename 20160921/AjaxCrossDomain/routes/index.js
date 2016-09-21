var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});


router.get("/data", (req, res)=> {
    var domains = ["http://localhost:63342", "http://localhost"];

    if (domains.indexOf(req.headers.origin) != -1) {
        res.header("Access-Control-Allow-Origin", req.headers.origin);
    }
    res.send("HelloWorld");
});

module.exports = router;
