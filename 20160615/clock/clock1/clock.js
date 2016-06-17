/**
 * Created by plter on 6/15/16.
 */


(function () {

    var divClock;


    function formatTime(num) {
        return (num >= 10 ? "" : "0") + num;
    }

    function showTime() {

        var date = new Date();

        divClock.innerHTML = formatTime(date.getHours()) + ":" + formatTime(date.getMinutes()) + ":" + formatTime(date.getSeconds());
    }

    function init() {

        divClock = document.getElementById("clock");


        showTime();
        setInterval(showTime, 1000);
    }

    init();

}());