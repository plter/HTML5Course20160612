/**
 * Created by plter on 6/19/16.
 */

(function () {

    function Eyeball() {

        this._eyeballNode = document.createElement("div");
        this._eyeballNode.className = "eyeball";

        this.ORIGIN_LEFT = 16;
        this.ORIGIN_TOP = 16;
        this.R = 16;

        this._left = this.ORIGIN_LEFT;
        this._top = this.ORIGIN_TOP;
        this._originGlobalLeft = -1;
        this._originGlobalTop = -1;

        this.syncStyle();

        document.addEventListener("mousemove", this.mouseMoveHandler.bind(this));
    }

    Object.defineProperty(Eyeball.prototype, "eyeballNode", {
        get: function () {
            return this._eyeballNode;
        }
    });

    Eyeball.prototype.syncStyle = function () {
        this._eyeballNode.style.left = this._left + "px";
        this._eyeballNode.style.top = this._top + "px";
    };

    Eyeball.prototype.mouseMoveHandler = function (event) {
        if (this._originGlobalLeft == -1 && this._originGlobalTop == -1) {
            var rect = this._eyeballNode.getBoundingClientRect();
            this._originGlobalLeft = rect.left;
            this._originGlobalTop = rect.top;
        }

        var dy = event.clientY - this._originGlobalTop;
        var dx = event.clientX - this._originGlobalLeft;

        var r = dx >= 0 ? 1 : -1;

        var angle = Math.atan(dy / dx);

        this._left = this.ORIGIN_LEFT + Math.cos(angle) * this.R * r;
        this._top = this.ORIGIN_TOP + Math.sin(angle) * this.R * r;
        this.syncStyle();
    };


    window.Eyeball = Eyeball;
})();