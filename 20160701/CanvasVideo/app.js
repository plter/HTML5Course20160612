/**
 * Created by plter on 6/29/16.
 */

(function () {

    function Main() {
        this._context2d = document.getElementById("canvas").getContext("2d");

        /**
         *
         * @type {HTMLVideoElement}
         * @private
         */
        this._video = document.createElement("video");
        this._video.autoplay = true;
        this._video.src = "video.mp4";

        this._video.loaded = false;

        this.render();
    }

    Main.prototype.render = function () {

        if (this._video.readyState != 0) {

            this._context2d.drawImage(this._video, 0, 0);

            var imageData = this._context2d.getImageData(0, 0, this._video.videoWidth, this._video.videoHeight);
            if (!this._blackAndWhiteImageData) {
                this._blackAndWhiteImageData = this._context2d.createImageData(this._video.videoWidth, this._video.videoHeight);
            }

            for (var i = 0; i < imageData.data.length; i += 4) {
                var r = imageData.data[i];
                var g = imageData.data[i + 1];
                var b = imageData.data[i + 2];
                var color = (r + g + b) / 3;

                this._blackAndWhiteImageData.data[i] = color;
                this._blackAndWhiteImageData.data[i + 1] = color;
                this._blackAndWhiteImageData.data[i + 2] = color;
                this._blackAndWhiteImageData.data[i + 3] = 255;
            }

            this._context2d.putImageData(this._blackAndWhiteImageData, 0, this._video.videoHeight + 10);

        }
        requestAnimationFrame(this.render.bind(this));
    };


    new Main();
})();