/**
 * Created by plter on 6/20/16.
 */


(function () {

    /**
     * @type {HTMLMediaElement}
     */
    var audio;
    var btnGetTime;

    function Main() {
        audio = document.getElementById("audio");
        btnGetTime = document.getElementById("btn-get-time");

        btnGetTime.addEventListener("click", function (event) {
            console.log(audio.currentTime);
        });
    }


    Main();
})();