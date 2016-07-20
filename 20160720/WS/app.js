/**
 * Created by plter on 7/20/16.
 */


var net = require("net");
var http = require("http");
var fs = require("fs");

var server = net.createServer((socket)=> {
    socket.on("data", (data)=> {
        console.log(String(data));
    })
});

server.listen(8888, function () {
    console.log("Socket server started at port 8888");
});

var http = http.createServer((req, res)=> {
    switch (req.url) {
        case "/":
            res.end(fs.readFileSync("static/index.html"));
            break;
        case "/index.js":
            res.end(fs.readFileSync("static/index.js"));
            break;
    }
});
http.listen(8000, function () {
    console.log("Http server started at port 8000");
});