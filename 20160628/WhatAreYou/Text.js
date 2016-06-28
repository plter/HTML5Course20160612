/**
 * Created by plter on 6/28/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Text(text, fontSize) {
        this._text = text;
        this.fontSize = fontSize ? fontSize : 32;
    }

    Text.prototype = new ucai.DisplayObject();


    Object.defineProperties(Text.prototype, {
        text: {
            get: function () {
                return this._text;
            },
            set: function (value) {
                this._text = value;
            }
        },
        fontSize: {
            get: function () {
                return this._fontSize;
            },
            set: function (value) {
                this._fontSize = value;

                this._font = this._fontSize + "px Courier";
            }
        }
    });


    /**
     *
     * @param g {CanvasRenderingContext2D}
     */
    Text.prototype.protected_onDraw = function (g) {
        g.font = this._font;
        g.fillText(this._text, 0, this.fontSize);
    };

    ucai.Text = Text;
})();