/**
 * Created by plter on 7/20/16.
 */


(function () {

    var socket, btnSend, input, output;

    function init() {
        getElements();
        connectServer();
        addListeners();
    }

    function getElements() {
        btnSend = document.querySelector("#btnsend");
        input = document.querySelector("#input");
        output = document.querySelector("#output");
    }

    function outputLine(msg) {
        output.innerHTML += msg + "\n";
        output.scrollTop = output.scrollHeight;
    }

    function addListeners() {
        btnSend.onclick = function () {
            var inputVal = input.value;
            if (inputVal && inputVal != "") {
                socket.emit("chat", inputVal);
                input.value = "";
            }
        }
    }

    function connectServer() {
        socket = io(location.origin);
        socket.on("chat", function (data) {
            outputLine(data);
        });
        socket.on("login", function (data) {
            outputLine(data);
        });
        socket.on("logout", function (data) {
            outputLine(data);
        });
    }

    init();
})();