/**
 * Created by plter on 6/20/16.
 */


(function () {

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        this._rect = new Rect(this._context2d);
        this._rect.draw();

        setTimeout(function () {
            // this._rect.setColor("#00ff00");
            this._rect.color = "#00ff00";
        }.bind(this), 2000);
    }

    new Main();
})();