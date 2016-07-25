var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache"
    });

    // res.end("data: HelloWorld\n\n");
    res.end("event: hello\ndata: {\"name\":\"ucai\",\"age\":\"3\"}\n\n");
});

module.exports = router;
