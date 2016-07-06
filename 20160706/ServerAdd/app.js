/**
 * Created by plter on 7/6/16.
 */

var http = require("http");
var fs = require("fs");


function decodeUrlParams(url) {
    var pKv = /(\?|\&)([^=]+)=([^&]+)/g;
    var params = {};
    while (true) {
        var result = pKv.exec(url);
        if (result) {
            params[result[2]] = result[3];
        } else {
            break;
        }
    }
    return params;
}

function handleServer(request, response) {
    var params = decodeUrlParams(request.url);
    var aValue = parseInt(params.a);
    var bValue = parseInt(params.b);

    response.end("Result:" + (aValue + bValue));
}


http.createServer(function (request, response) {

    if (request.url == "/index.html" || request.url == "/") {
        response.end(fs.readFileSync("index.html"));
    } else if (request.url.match(/\/server/)) {
        handleServer(request, response);
    }

}).listen(8000);