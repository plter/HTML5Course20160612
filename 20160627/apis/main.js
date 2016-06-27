/**
 * Created by plter on 6/27/16.
 */


(function () {

    function Main() {
        /**
         *
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        // this.drawRect();
        // this.drawCircle();
        // this.drawLines();
        // this.drawText();
        this.drawImage();
    }

    Main.prototype.drawRect = function () {
        this._context2d.fillStyle = "#ff0000";//rgb Red Green Blue
        this._context2d.fillRect(10, 10, 200, 100);

        this._context2d.lineWidth = 10;
        this._context2d.strokeRect(10, 10, 200, 100);
    };

    Main.prototype.drawCircle = function () {
        this._context2d.beginPath();
        this._context2d.arc(100, 100, 50, 0, Math.PI * 2);
        this._context2d.stroke();
        this._context2d.closePath();

        this._context2d.beginPath();
        this._context2d.arc(100, 200, 50, 0, Math.PI);
        this._context2d.closePath();
        this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(200, 100);
        this._context2d.arc(200, 100, 50, 0, Math.PI / 4);
        this._context2d.closePath();
        this._context2d.stroke();
    };


    Main.prototype.drawLines = function () {
        // this._context2d.moveTo(100, 100);
        // this._context2d.quadraticCurveTo(150, 0, 200, 100);
        // this._context2d.stroke();

        this._context2d.beginPath();
        this._context2d.moveTo(100, 100);
        this._context2d.lineTo(100, 200);
        this._context2d.lineTo(200, 200);
        // this._context2d.closePath();
        this._context2d.stroke();
    };

    Main.prototype.drawText = function () {
        this._context2d.font = "bold 32px Courier";
        this._context2d.fillStyle = "red";
        this._context2d.fillText("Hello World", 0, 32);
    };

    Main.prototype.drawImage = function () {
        var img = document.createElement("img");
        img.onload = function () {
            this._context2d.drawImage(img, 0, 0);
            // this._context2d.drawImage(img, 0, 0, 300, 100);
            // this._context2d.drawImage(img, 0, 0, 110, 110, 100, 100, 110, 110)
        }.bind(this);
        img.onerror = function () {
            console.error("无法加载图片");
        };
        img.src = "photo.jpg";
    };

    new Main();
})();