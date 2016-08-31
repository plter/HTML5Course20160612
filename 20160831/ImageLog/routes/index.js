var express = require('express');
var router = express.Router();
const mc = require("../classes/MongoConnection");
const multer = require("multer");
const uploadDirectory = "uploads";
const upload = multer({dest: `public/${uploadDirectory}`});

/* GET home page. */
router.get('/', (req, res, next) => {
    mc.connect((err, db) => {
        if (!err) {
            db.images.find().toArray((err, images)=> {

                if (!err) {
                    res.render('index', {
                        title: 'Image log',
                        images: images
                    })
                } else {
                    res.json(err);
                }

                db.close();
            });
        } else {
            res.json(err);
        }
    });
});

router.post("/upload", upload.single("image"), (req, res)=> {

    const imageUrl = `${uploadDirectory}/${req.file.filename}`;

    mc.connect((err, db)=> {
        if (!err) {
            db.images.insertOne({
                description: req.body.description,
                imageUrl: imageUrl
            }, function (err, result) {
                if (!err) {
                    res.redirect("/");
                } else {
                    res.json(err);
                }

                db.close();
            });
        } else {
            res.json(err);
        }
    });
});

module.exports = router;
