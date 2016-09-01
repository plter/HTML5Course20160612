var express = require('express');
var router = express.Router();

router.post("/updateuser", function (req, res) {
    req.models.user.get(req.body.id, function (err, user) {
        if (!err) {
            user.save({name: req.body.name, age: req.body.age}, function (err) {
                if (!err) {
                    res.json({state: 1, message: "Success"});
                } else {
                    res.json({state: 3, message: "Unable to save the user information"});
                }
            });
        } else {
            res.json({state: 2, message: `Unable to find the user by id ${req.body.id}`});
        }
    });
});

module.exports = router;
