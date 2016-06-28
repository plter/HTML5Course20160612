/**
 * Created by plter on 6/28/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Rect(width, height) {
        this._width = width;
        this._height = height;

        this._color = "#ff0000";
    }
    
    Rect.prototype = new ucai.DisplayObject();

    Object.defineProperties(Rect.prototype, {
        color: {
            set: function (value) {
                this._color = value;
            },
            get: function () {
                return this._color;
            }
        },
        width: {
            set: function (value) {
                this._width = value;
            },
            get: function () {
                return this._width;
            }
        },
        height: {
            set: function (value) {
                this._height = value;
            },
            get: function () {
                return this._height;
            }
        }
    });

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    Rect.prototype.protected_onDraw = function (context2d) {
        context2d.fillStyle = this.color;
        context2d.fillRect(0, 0, this.width, this.height);
    };

    Rect.prototype.hitTestPoint = function (pointX, pointY) {
        return pointX > this.x &&
            pointX < this.x + this.width &&
            pointY > this.y &&
            pointY < this.y + this.height;
    };


    ucai.Rect = Rect;
})();