/**
 * Created by plter on 6/19/16.
 */

(function () {

    var audio, btnPlay, btnStop, btnGetCurrentTime;

    function findComponents() {
        audio = document.getElementById("audio");
        btnPlay = document.getElementById("btn-play-sound");
        btnStop = document.getElementById("btn-stop-sound");
        btnGetCurrentTime = document.getElementById("btn-get-current-time");
    }

    function addListeners() {
        btnPlay.addEventListener("click", function (event) {
            audio.play();
        });

        btnStop.addEventListener("click", function (event) {
            audio.pause();
        });

        btnGetCurrentTime.addEventListener("click",function (event) {
            console.log(audio.currentTime);
        });
    }

    function init() {
        findComponents();
        addListeners();
    }

    init();
})();