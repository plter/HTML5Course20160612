/**
 * Created by plter on 6/28/16.
 */

(function () {

    function Main() {
        this._context2d = document.getElementById("canvas").getContext("2d");

        var img = new Image();
        img.onload = function () {
            this.draw(img);
        }.bind(this);
        img.src = "photo.jpg";
    }


    Main.prototype.draw = function (img) {

        var g = this._context2d;

        g.beginPath();
        g.arc(120, 90, 75, 0, Math.PI * 2);
        g.fill();
        g.closePath();
        g.clip();

        g.drawImage(img, 0, 0);
    };


    new Main();
})();