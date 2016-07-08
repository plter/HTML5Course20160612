/**
 * Created by plter on 7/8/16.
 */


(function () {

    window.ondataLoaded = function (result) {
        console.log(result);
    };


    function init() {
        var script = document.createElement("script");
        script.src = "http://localhost:3000/json?callback=ondataLoaded";
        document.body.appendChild(script);
    }

    init();
})();