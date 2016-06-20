/**
 * Created by plter on 6/20/16.
 */

(function () {


    function Main() {

        this.findElements();
        this.addListeners();
    }

    Main.prototype.findElements = function () {
        this._a = document.getElementById("a");
        this._b = document.getElementById("b");
        this._c = document.getElementById("c");
    };


    Main.prototype.addListeners = function () {
        this._a.addEventListener("click", function (event) {
            console.log("捕获阶段 a clicked");

            event.stopPropagation();
        }, true);
        this._b.addEventListener("click", function (event) {
            console.log("捕获阶段 b clicked");
        }, true);
        this._c.addEventListener("click", function (event) {
            console.log("捕获阶段 c clicked");

            //阻止事件继续传递
            // event.stopPropagation();
        }, true);
    };

    new Main();
})();