/**
 * Created by plter on 6/20/16.
 */

(function () {

    function Main() {
        this.findElements();
        // this.addListeners1();
        this.addListeners2();
    }

    Main.prototype.findElements = function () {
        this._linkClickMe = document.getElementById("link-clickme");
    };

    Main.prototype.addListeners1 = function () {
        this._linkClickMe.onclick = function (event) {
            console.log(event);

            this._linkClickMe.onclick = null;
        }.bind(this);
    };

    function mouseEventListener(event) {

        console.log("link clicked", event.target);

        event.target.removeEventListener("click", mouseEventListener);
    }

    Main.prototype.addListeners2 = function () {
        this._linkClickMe.addEventListener("click", mouseEventListener);

        // this._linkClickMe.addEventListener("click", function (event) {
        //     console.log("link clicked 2");
        // });
    };

    new Main();
})();