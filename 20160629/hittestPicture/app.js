/**
 * Created by plter on 6/29/16.
 */


(function () {

    function Main() {
        this._infoDiv = document.getElementById("info");

        this._memoryCanvas = document.createElement("canvas");
        this._memoryCanvas.width = 1000;
        this._memoryCanvas.height = 1000;
        this._memoryContext2d = this._memoryCanvas.getContext("2d");

        this._context2d = document.getElementById("canvas").getContext("2d");

        this.loadImage(function (imgData) {

            this._context2d.putImageData(imgData, 0, 0);

        }.bind(this));

        this.addListeners();
    }

    Main.prototype.addListeners = function () {
        this._context2d.canvas.onclick = function (event) {
            if (this._imgData) {
                var c = this.getColorByPosition(event.layerX, event.layerY);
                if (c && c.a > 0) {
                    this._infoDiv.innerHTML = "点中了图片";
                } else {
                    this._infoDiv.innerHTML = "没有点中图片";
                }
            }
        }.bind(this);
    };

    Main.prototype.getColorByPosition = function (x, y) {
        var data = this._imgData.data;
        var index = (y * this._imgData.width + x) * 4;
        if (index < data.length) {
            return {r: data[index], g: data[index + 1], b: data[index + 2], a: data[index + 3]};
        } else {
            return null;
        }
    };


    Main.prototype.loadImage = function (callback) {
        var img = new Image();
        img.onload = function () {
            this._memoryContext2d.clearRect(0, 0, this._memoryCanvas.width, this._memoryCanvas.height);
            this._memoryContext2d.drawImage(img, 0, 0);
            this._imgData = this._memoryContext2d.getImageData(0, 0, img.width, img.height);

            callback(this._imgData);
        }.bind(this);
        img.src = "image.png";
    };

    new Main();
})();