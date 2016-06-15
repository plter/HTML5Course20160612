/**
 * Created by plter on 6/15/16.
 */


(function () {


    var btnStopTimer, currentTimerId = -1;


    function findTags() {
        btnStopTimer = document.getElementById("btnStopTimer");
        btnStopTimer.onclick = function () {
            if (currentTimerId != -1) {
                clearTimeout(currentTimerId);
            }
        };
    }


    function timeOutHander(name) {
        console.log("Hello " + name);
    }

    function init() {
        findTags();

        timeOutHander("ucai");

        currentTimerId = setTimeout(timeOutHander, 5000, "ZhangSan");
    }

    init();
}());