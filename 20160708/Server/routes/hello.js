var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    // res.jsonp({name: "ucai", age: 4});

    if (req.query.cb) {
        res.send(req.query.cb + "(\"Hello World\");");

    } else {
        res.send("error");
    }
});

module.exports = router;
