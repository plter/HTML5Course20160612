/**
 * Created by plter on 6/21/16.
 */


(function () {


    function Human(name) {

        this._name = name;

        this.sayHello = function () {
            console.log(this._name + " say hello");
        }
    }

    Human.prototype.sayHi = function () {
        console.log(this._name + " say hi");
    };

    Object.defineProperty(Human.prototype, "name", {
        get: function () {
            return this._name;
        }
    });

    ucai.Human = Human;
})();