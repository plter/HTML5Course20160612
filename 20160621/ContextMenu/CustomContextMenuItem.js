/**
 * Created by plter on 6/21/16.
 */

window.ucai = window.ucai || {};

(function () {

    function CustomContextMenuItem(text, itemSelectedCallback) {
        this._itemSelectedCallback = itemSelectedCallback;

        this._li = document.createElement("li");

        /**
         *
         * @type {HTMLAnchorElement}
         * @private
         */
        this._a = document.createElement("a");
        this._li.appendChild(this._a);
        this._a.href = "#";
        this._a.innerHTML = text;
        this._a.onclick = function (event) {
            if (this._itemSelectedCallback) {
                this._itemSelectedCallback();
            }
        }.bind(this);
    }

    Object.defineProperty(CustomContextMenuItem.prototype, "node", {
        get: function () {
            return this._li;
        }
    });

    ucai.CustomContextMenuItem = CustomContextMenuItem;
})();