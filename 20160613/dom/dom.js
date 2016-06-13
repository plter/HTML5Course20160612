/**
 * Created by plter on 6/13/16.
 */

(function () {

    var div, h1;

    function init() {
        div = document.getElementById("container");
        // div.innerHTML = "Hello";
        // div.innerHTML = "<h1>Page Title</h1>";

        h1 = document.createElement("h1");
        h1.innerHTML = "Page Title";

        div.appendChild(h1);
    }

    init();

    window.btnClickedHandler = function () {
        if (h1) {
            div.removeChild(h1);
            h1 = null;
        }
    };
}());