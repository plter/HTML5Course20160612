/**
 * Created by plter on 6/21/16.
 */


(function () {

    Object.defineProperties(HTMLElement.prototype, {
        useCustomContextMenu: {
            get: function () {
                return this._useCustomContextMenu;
            },
            set: function (value) {
                this._useCustomContextMenu = value;

                if (this._useCustomContextMenu) {
                    this.oncontextmenu = function (event) {
                        event.preventDefault();
                    }
                } else {
                    this.oncontextmenu = null;
                }
            }
        }
    });


})();