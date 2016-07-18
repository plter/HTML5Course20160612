/**
 * Created by plter on 7/18/16.
 */
"use strict";
var Main = (function () {
    function Main() {
        this.index = 0;
    }
    Main.prototype.startTimer = function () {
        var _this = this;
        setInterval(function () {
            console.log(_this.index++);
        }, 1000);
        // setInterval(function () {
        //     console.log(this);
        //     console.log(this.index++);
        // }, 1000);
    };
    return Main;
}());
var m = new Main();
m.startTimer();
//# sourceMappingURL=app.js.map