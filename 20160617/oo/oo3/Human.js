/**
 * Created by plter on 6/18/16.
 */

window.ucai = window.ucai || {};


(function () {

    function Human(name) {

        this._name = name;

        Object.defineProperty(this, "name", {
            get: function () {
                return this._name;
            }
        });

        this.sayHello = function () {
            console.log(this.name + " say hello");
        }
    }

    ucai.Human = Human;
})();