var express = require('express');
var router = express.Router();


var users = [
    {name: "ucai", password: "123456"},
    {name: "wuduo", password: "123456"},
    {name: "zhangsan", password: "123456"},
    {name: "lisi", password: "123456"}
];


/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('Hello World');
});

module.exports = router;
