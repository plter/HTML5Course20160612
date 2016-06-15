/**
 * Created by plter on 6/15/16.
 */

(function () {

    function Human(name) {
        var self = {};

        self.name = name;

        self.sayHello = function () {
            console.log(self.name + " say hello");
        };

        return self;
    }

    window.Human = Human;
}());