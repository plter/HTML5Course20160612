/**
 * Created by plter on 7/7/16.
 */


(function () {

    var xhr, form, result;

    function addListeners() {
        form.onsubmit = function (event) {
            event.preventDefault();

            connectServer({name: form['name'].value});
        }
    }

    function connectServer(data) {
        xhr.onload = function () {
            result.innerHTML = "Result:" + xhr.responseText;
        };

        var paramsStr = "";
        for (var key in data) {
            paramsStr += key + "=" + data[key] + "&";
        }

        //GET method
        // xhr.open("get", "/helloserver?" + paramsStr);
        // xhr.send();

        //POST method
        xhr.open("post", "/helloserver");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(paramsStr);
    }

    function getElements() {
        form = document.querySelector("#form");
        result = document.querySelector("#result");
    }

    function init() {
        xhr = new XMLHttpRequest();

        getElements();
        addListeners();


        // xhr = new XMLHttpRequest();
        // xhr.onload = function () {
        //     // console.log(JSON.parse(xhr.responseText));
        //     console.log(xhr.responseXML);
        // };
        // xhr.open("get", "data.xml");
        // xhr.send();
    }

    init();
})();