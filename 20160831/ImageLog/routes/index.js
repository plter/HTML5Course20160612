const express = require('express');
const router = express.Router();
const mc = require("../classes/MongoConnection");
const multer = require("multer");
const uploadDirectory = "uploads";
const upload = multer({dest: `public/${uploadDirectory}`});
const Config = require("../classes/Config");

/* GET home page. */
router.get('/', (req, res, next) => {
    mc.connect((err, db) => {
        if (!err) {
            db.collection(Config.IMAGES_COLLECTION_NAME).find().toArray((err, images)=> {

                if (!err) {
                    res.render('index', {
                        title: 'Image log',
                        images: images
                    });
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
            db.collection(Config.IMAGES_COLLECTION_NAME).insertOne({
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
