/**
 * Created by plter on 7/4/16.
 */

(function () {

    var btnPrint, progressContainer;

    function init() {

        progressContainer = document.getElementById("progresscontainer");

        btnPrint = document.getElementById("btnprint");
        btnPrint.onclick = function () {
            var worker = new Worker("PrintTask.js");
            worker.onmessage = function (event) {
                progressContainer.innerHTML = event.data;
            }
        };
    }

    init();
})();