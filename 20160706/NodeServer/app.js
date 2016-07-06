/**
 * Created by plter on 7/4/16.
 */

var http = require("http");
var fs = require("fs");

function decodeParams(paramsStr) {
    var pKv = /(\?|\&|^)([^=]+)=([^&]+)/g;
    var params = {};
    while (true) {
        var result = pKv.exec(paramsStr);
        if (result) {
            params[result[2]] = result[3];
        } else {
            break;
        }
    }
    return params;
}

function handlerServerRequestEnd(request, response, params) {
    response.end("<!DOCTYPE html><html><head><meta charset='UTF-8'></head><body>Hello " + decodeURI(params['name']) + "</body></html>");
}


function handleServerRequest(request, response) {
    switch (request.method) {
        case "GET":
            var params = decodeParams(request.url);
            handlerServerRequestEnd(request, response, params);
            break;
        case "POST":
            var allData = "";
            request.on("data", function (data) {
                allData += data;
            });
            request.on("end", function () {
                var params = decodeParams(allData);
                handlerServerRequestEnd(request, response, params);
            });
            break;
    }
}


http.createServer(function (request, response) {

    if (request.url == "/index.html" || request.url == "/") {
        response.end(fs.readFileSync("index.html"));

    } else if (request.url.match(/\/server/)) {
        handleServerRequest(request, response);
    } else {
        response.end("<h1>404</h1>");
    }
}).listen(8000);