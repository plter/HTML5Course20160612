/**
 * Created by plter on 7/8/16.
 */


(function () {

    var Config = {CALLBACK_NAME: "ondataLoaded"};

    window[Config.CALLBACK_NAME] = function (result) {
        console.log(result);
    };


    function init() {
        var script = document.createElement("script");
        script.src = "http://localhost:3000/json?callback=" + Config.CALLBACK_NAME;
        document.body.appendChild(script);
    }

    init();
})();