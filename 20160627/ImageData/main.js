/**
 * Created by plter on 6/27/16.
 */

(function () {

    function Main() {

        this._context2d = document.getElementById("canvas").getContext("2d");

        new Promise(function (resolve, reject) {
            var img = document.createElement("img");
            img.onload = function () {
                resolve(img);
            };
            img.onerror = reject;
            img.src = "photo.jpg";
        }).then(function (result) {
            this._context2d.drawImage(result, 0, 0);
            var imageWidth = Math.round(result.width);
            var imageHeight = Math.round(result.height);

            var originImageData = this._context2d.getImageData(0, 0, result.width, result.height);

            var i = 0;
            //red image data
            var redChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                redChannelData.data[i] = originImageData.data[i];
                redChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(redChannelData, 0, 250);

            //green image data
            var greenChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                greenChannelData.data[i + 1] = originImageData.data[i + 1];
                greenChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(greenChannelData, 0, 500);

            //blue image data
            var blueChannelData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                blueChannelData.data[i + 2] = originImageData.data[i + 2];
                blueChannelData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blueChannelData, 0, 750);

            //reverse color
            var reversedImageData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                reversedImageData.data[i] = 255 - originImageData.data[i];
                reversedImageData.data[i + 1] = 255 - originImageData.data[i + 1];
                reversedImageData.data[i + 2] = 255 - originImageData.data[i + 2];
                reversedImageData.data[i + 3] = 255;
            }
            this._context2d.putImageData(reversedImageData, 0, 1000);

            //black and white image data
            var blackAndWhiteImageData = this._context2d.createImageData(imageWidth, imageHeight);
            for (i = 0; i < originImageData.data.length; i += 4) {
                var color = (originImageData.data[i] + originImageData.data[i + 1] + originImageData.data[i + 2]) / 3;
                blackAndWhiteImageData.data[i] = color;
                blackAndWhiteImageData.data[i + 1] = color;
                blackAndWhiteImageData.data[i + 2] = color;
                blackAndWhiteImageData.data[i + 3] = 255;
            }
            this._context2d.putImageData(blackAndWhiteImageData, 0, 1250);
        }.bind(this)).catch(function (error) {
            console.log(error);
        });

    }

    new Main();
})();