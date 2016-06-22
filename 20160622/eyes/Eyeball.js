/**
 * Created by plter on 6/22/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Eyeball() {
        this._node = document.createElement("div");
        this._node.className = "eyeball";

        this._ORIGIN_LEFT = 15;
        this._ORIGIN_TOP = 15;
        this._R = 14;

        this.left = this._ORIGIN_LEFT;
        this.top = this._ORIGIN_TOP;

        this.addListeners();
    }

    Object.defineProperties(Eyeball.prototype, {
        left: {
            get: function () {
                return this._left;
            },
            set: function (value) {
                this._left = value;

                this._node.style.left = this._left + "px";
            }
        },
        top: {
            get: function () {
                return this._top;
            },
            set: function (value) {
                this._top = value;

                this._node.style.top = this._top + "px";
            }
        },
        node: {
            get: function () {
                return this._node;
            }
        },
        globalOriginLeft: {
            get: function () {
                if (!this._globalOriginLeft) {
                    var rect = this.boundingRect;
                    this._globalOriginLeft = rect.left;
                }

                return this._globalOriginLeft;
            }
        },
        globalOriginTop: {
            get: function () {
                if (!this._globalOriginTop) {
                    var rect = this.boundingRect;
                    this._globalOriginTop = rect.top;
                }

                return this._globalOriginTop;
            }
        },
        boundingRect: {
            get: function () {
                if (!this._boundingRect) {
                    this._boundingRect = this._node.getBoundingClientRect();
                }
                return this._boundingRect;
            }
        }
    });

    Eyeball.prototype.addListeners = function () {

        (function (self) {
            document.addEventListener("mousemove", function (event) {

                var dy = event.pageY - self.globalOriginTop;
                var dx = event.pageX - self.globalOriginLeft;

                var angle = Math.atan(dy / dx);

                var r = dx >= 0 ? 1 : -1;

                self.left = self._ORIGIN_LEFT + Math.cos(angle) * self._R * r;
                self.top = self._ORIGIN_TOP + Math.sin(angle) * self._R * r;
            });
        })(this);
    };

    ucai.Eyeball = Eyeball;
})();