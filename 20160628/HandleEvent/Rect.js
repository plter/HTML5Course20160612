/**
 * Created by plter on 6/28/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Rect(width, height) {
        this._width = width;
        this._height = height;

        this._x = 0;
        this._y = 0;
        this._regX = 0;
        this._regY = 0;
        this._color = "#ff0000";
        this._rotation = 0;
    }

    Object.defineProperties(Rect.prototype, {
        x: {
            set: function (value) {
                this._x = value;
            },
            get: function () {
                return this._x;
            }
        },
        y: {
            set: function (value) {
                this._y = value;
            },
            get: function () {
                return this._y;
            }
        },
        regX: {
            set: function (value) {
                this._regX = value;
            },
            get: function () {
                return this._regX;
            }
        },
        regY: {
            set: function (value) {
                this._regY = value;
            },
            get: function () {
                return this._regY;
            }
        },
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
        },
        rotation: {
            set: function (value) {
                this._rotation = value;
            },
            get: function () {
                return this._rotation;
            }
        }
    });

    /**
     *
     * @param context2d {CanvasRenderingContext2D}
     */
    Rect.prototype.draw = function (context2d) {
        context2d.save();
        context2d.fillStyle = this.color;
        context2d.translate(this.x, this.y);
        context2d.rotate(this.rotation);
        context2d.fillRect(-this.regX, -this.regY, this.width, this.height);
        context2d.restore();
    };

    Rect.prototype.hitTestPoint = function (pointX, pointY) {
        return pointX > this.x &&
            pointX < this.x + this.width &&
            pointY > this.y &&
            pointY < this.y + this.height;
    };


    ucai.Rect = Rect;
})();