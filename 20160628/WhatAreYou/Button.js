/**
 * Created by plter on 6/28/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Button(label, bgColor, textColor) {
        this._text = new ucai.Text(label, 20);
        ucai.Rect.call(this, 100, 30);
        this.color = bgColor ? bgColor : "#ff0000";

        this._textColor = textColor ? textColor : "#ffffff";
        this._text.x = 20;
    }

    Button.prototype = new ucai.Rect();

    Button.prototype.protected_onDraw = function (g) {
        ucai.Rect.prototype.protected_onDraw.call(this, g);

        g.fillStyle = this._textColor;
        this._text.draw(g);
    };

    ucai.Button = Button;
})();