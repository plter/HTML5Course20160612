var express = require('express');
var router = express.Router();
const multer = require("multer");
const fs = require("fs");

const upload = multer();

router.post('/', upload.single("img"), function (req, res, next) {

    fs.writeFile(`public/${req.file.originalname}`, req.file.buffer, function (err) {
        if (!err) {
            res.render("upload", {imageName: req.file.originalname});
        } else {
            res.send("Can not save the file");
        }
    });
});

module.exports = router;
