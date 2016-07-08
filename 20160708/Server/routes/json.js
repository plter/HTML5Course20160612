var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.jsonp({name: "ucai", age: 4});
});

module.exports = router;
