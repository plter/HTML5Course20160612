/**
 * Created by plter on 6/29/16.
 */

(function () {

    function Main() {

        this._video = document.getElementById("video");

        this.showCamera();
    }

    Main.prototype.showCamera = function () {
        navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

        navigator.getUserMedia({video: true}, function (stream) {

            var url = URL.createObjectURL(stream);
            this._video.src = url;
            this._video.play();

        }.bind(this), function (error) {
            console.error("无法获取设备");
            console.error(error);
            alert("您拒绝了使用本机设备");
        });
    };

    new Main();
})();