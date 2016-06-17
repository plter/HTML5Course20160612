/**
 * Created by plter on 6/17/16.
 */

(function () {

    var hourPointer, minPointer, secPointer;

    function getPointers() {
        hourPointer = document.getElementById("hour-pointer");
        minPointer = document.getElementById("min-pointer");
        secPointer = document.getElementById("sec-pointer");
    }

    function showTime() {
        var d = new Date();

        var secValue = d.getSeconds() * 6;
        var minValue = d.getMinutes() * 6;
        var hourValue = (d.getHours() % 12) * 30 + minValue / 360 * 30;

        secPointer.style.transform = "rotate(" + secValue + "deg)";
        minPointer.style.transform = "rotate(" + minValue + "deg)";
        hourPointer.style.transform = "rotate(" + hourValue + "deg)";
    }

    function init() {
        getPointers();

        showTime();

        setInterval(showTime, 1000);
    }

    init();
})();