/**
 * Created by plter on 7/1/16.
 */

(function () {

    //import classes and resources
    var Config = ucai.Config;
    var CenterCircle = ucai.CenterCircle;

    function Main() {
        this.buildUI();

        //init center circle
        this._centerCircle = new CenterCircle(this._canvas);

        //load named image
        this.loadImage("photo.jpg");

        //create a canvas in memory
        this._memoryCanvas = document.createElement("canvas");
        this._memoryCanvas.width = Config.CANVAS_WIDTH;
        this._memoryCanvas.height = Config.CANVAS_HEIGHT;
        this._memoryContext2d = this._memoryCanvas.getContext("2d");

        this.render();
        this.addListeners();
    }

    Main.prototype.buildUI = function () {
        this._sourceImage = document.createElement("img");
        this._targetImageContainer = document.getElementById("targetimagecontainer");

        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");
    };

    Main.prototype.render = function () {
        this._context2d.clearRect(0, 0, ucai.Config.CANVAS_WIDTH, ucai.Config.CANVAS_HEIGHT);

        this.redraw();

        requestAnimationFrame(this.render.bind(this));
    };

    Main.prototype.loadImage = function (imgUrl) {
        this._sourceImage.src = imgUrl;
    };

    Main.prototype.redraw = function () {
        this._context2d.save();

        this._context2d.drawImage(this._sourceImage, 0, 0, ucai.Config.CANVAS_WIDTH, ucai.Config.CANVAS_HEIGHT);

        this._context2d.beginPath();
        this._context2d.rect(0, 0, ucai.Config.CANVAS_WIDTH, ucai.Config.CANVAS_HEIGHT);
        this._centerCircle.draw(this._context2d);
        this._context2d.closePath();
        this._context2d.fillStyle = "#ffffff";
        this._context2d.globalAlpha = 0.7;
        this._context2d.fill("evenodd");

        this._context2d.restore();
    };

    Main.prototype.addListeners = function () {
        this._canvas.onmousedown = function (event) {
            if (this._centerCircle.hitTestPoint(event.layerX, event.layerY)) {
                this._centerCircle.startDrag(event.layerX, event.layerY);
            }
        }.bind(this);

        this._centerCircle.onCircleDragEnd = function () {
            this._memoryCanvas.width = Config.CANVAS_WIDTH;
            this._memoryCanvas.height = Config.CANVAS_HEIGHT;
            this._memoryContext2d.clearRect(0, 0, Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT);
            this._memoryContext2d.save();
            this._memoryContext2d.beginPath();
            this._memoryContext2d.arc(this._centerCircle.x, this._centerCircle.y, this._centerCircle.r, 0, Math.PI * 2);
            this._memoryContext2d.closePath();
            this._memoryContext2d.clip();
            this._memoryContext2d.drawImage(this._sourceImage, 0, 0, Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT);
            this._memoryContext2d.restore();

            var centerX = this._centerCircle.x;
            var centerY = this._centerCircle.y;
            var r = this._centerCircle.r;
            var newImageData = this._memoryContext2d.getImageData(centerX - r, centerY - r, r * 2, r * 2);

            this._memoryContext2d.clearRect(0, 0, Config.CANVAS_WIDTH, Config.CANVAS_HEIGHT);
            this._memoryCanvas.width = r * 2;
            this._memoryCanvas.height = r * 2;
            this._memoryContext2d.putImageData(newImageData, 0, 0);

            this._targetImageContainer.innerHTML = "<img src='" + this._memoryCanvas.toDataURL() + "'>";
        }.bind(this);
    };


    new Main();
})();