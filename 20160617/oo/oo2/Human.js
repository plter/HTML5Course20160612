/**
 * Created by plter on 6/17/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Human(name) {
        this._name = name;
    }

    Human.prototype.sayHello = function () {
        console.log(this._name + " say hello");
    };

    ucai.Human = Human;
})();