/**
 * Created by plter on 7/1/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     *
     * @param canvas {HTMLCanvasElement}
     * @constructor
     */
    function CenterCircle(canvas) {
        this._canvas = canvas;

        this._x = ucai.Config.CANVAS_WIDTH / 2;
        this._y = ucai.Config.CANVAS_HEIGHT / 2;
        this._r = 150;
    }

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    CenterCircle.prototype.draw = function (context2d) {
        context2d.arc(this._x, this._y, this._r, 0, Math.PI * 2);
    };

    Object.defineProperties(CenterCircle.prototype, {
        x: {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this._x = value;
            }
        },
        y: {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this._y = value;
            }
        },
        onCircleDragEnd: {
            set: function (value) {
                this._onCircleDragEnd = value;
            },
            get: function () {
                return this._onCircleDragEnd;
            }
        },
        r:{
            get:function () {
                return this._r;
            }
        }
    });

    CenterCircle.prototype.hitTestPoint = function (x, y) {
        var distanceX = x - this.x;
        var distanceY = y - this.y;

        var distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
        return distance <= this._r;
    };

    CenterCircle.prototype.startDrag = function (currentMouseX, currentMouseY) {
        var offsetX = this.x - currentMouseX;
        var offsetY = this.y - currentMouseY;

        this._canvas.onmousemove = function (e) {
            this.x = e.layerX + offsetX;
            this.y = e.layerY + offsetY;

            if (this.x > ucai.Config.CANVAS_WIDTH - this._r) {
                this.x = ucai.Config.CANVAS_WIDTH - this._r;
            }
            if (this.x < this._r) {
                this.x = this._r;
            }
            if (this.y < this._r) {
                this.y = this._r;
            }
            if (this.y > ucai.Config.CANVAS_HEIGHT - this._r) {
                this.y = ucai.Config.CANVAS_HEIGHT - this._r;
            }
        }.bind(this);

        document.onmouseup = function (e) {
            this._canvas.onmousemove = null;

            if (this.onCircleDragEnd) {
                this.onCircleDragEnd();
            }

            document.onmouseup = null;
        }.bind(this);
    };


    ucai.CenterCircle = CenterCircle;
})();