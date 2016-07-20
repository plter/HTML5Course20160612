/**
 * Created by plter on 7/20/16.
 */


var ws = new WebSocket("ws://localhost:8888");
ws.onopen = function (e) {
    console.log(e);
    ws.send("Hello Server >>>>>>>>>>>>>");
};