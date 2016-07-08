var express = require('express');
var router = express.Router();


var users = [
    {name: "ucai", password: "123456"},
    {name: "wuduo", password: "123456"},
    {name: "zhangsan", password: "123456"},
    {name: "lisi", password: "123456"}
];


/* GET users listing. */
router.post('/', function (req, res, next) {
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        if (user.name == req.body.name) {
            if (user.password == req.body.pass) {
                res.send("登陆成功");
            } else {
                res.send("密码错误");
            }

            return;
        }
    }

    res.send('帐户不存在');
});

module.exports = router;
