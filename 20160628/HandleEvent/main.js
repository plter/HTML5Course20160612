/**
 * Created by plter on 6/28/16.
 */

(function () {

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        this.addRect();
        this.render();

        this.addListeners();
    }

    Main.prototype.addRect = function () {
        this._rect = new ucai.Rect(100, 100);
        this._rect.color = "#0000ff"
    };

    Main.prototype.addListeners = function () {
        this._canvas.onmousedown = function (e) {
            if (this._rect.hitTestPoint(e.layerX, e.layerY)) {

                this._rectOffsetX = this._rect.x - e.layerX;
                this._rectOffsetY = this._rect.y - e.layerY;

                this._canvas.onmousemove = function (event) {
                    this._rect.x = event.layerX + this._rectOffsetX;
                    this._rect.y = event.layerY + this._rectOffsetY;
                }.bind(this);
            }
        }.bind(this);

        window.onmouseup = function () {
            this._canvas.onmousemove = null;
        }.bind(this);
    };

    Main.prototype.render = function (time) {

        this._context2d.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this._rect.draw(this._context2d);

        requestAnimationFrame(this.render.bind(this));
    };

    new Main();
})();