/**
 * Created by plter on 6/28/16.
 */

window.ucai = window.ucai || {};

(function () {

    function DisplayObject() {
        this._x = 0;
        this._y = 0;
    }

    Object.defineProperties(DisplayObject.prototype, {
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
        }
    });

    /**
     * @param g {CanvasRenderingContext2D}
     */
    DisplayObject.prototype.draw = function (g) {
        g.save();
        g.translate(this.x, this.y);
        this.protected_onDraw(g);
        g.restore();
    };

    /**
     *
     * @param g {CanvasRenderingContext2D}
     */
    DisplayObject.prototype.protected_onDraw = function (g) {
    };

    ucai.DisplayObject = DisplayObject;
})();