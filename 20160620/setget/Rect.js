/**
 * Created by plter on 6/20/16.
 */

(function () {

    function Rect(context) {
        this._color = "#ff0000";
        this._context2d = context;
    }


    Rect.prototype.draw = function () {
        this._context2d.fillStyle = this._color;
        this._context2d.fillRect(0, 0, 100, 100);
    };
    
    // Rect.prototype.setColor = function (color) {
    //     this._color = color;
    //     this.draw()
    // };
    
    Object.defineProperty(Rect.prototype,"color",{
        get:function () {
            return this._color;
        },
        set:function (value) {
            this._color = value;
            this.draw();
        }
    });

    window.Rect = Rect;
})();