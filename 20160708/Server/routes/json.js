var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.jsonp({name: "ucai", age: 4});

    if (req.query.callback) {
        var obj = {name: "ucai", age: 3};
        var jsonStr = JSON.stringify(obj);

        res.send(req.query.callback + "(" + jsonStr + ");");
    } else {
        res.send("error");
    }
});

module.exports = router;
