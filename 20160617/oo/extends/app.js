/**
 * Created by plter on 6/17/16.
 */

(function () {


    function copyMember(dist, from) {
        for (var k in from) {
            dist[k] = from[k];
        }
    }


    function A() {
        var self = {};

        self.sayHello = function () {
            console.log("Hello");
        };

        return self;
    }

    function C() {
        var self = {};
        self.sayHi = function () {
            console.log("Hi");
        };
        return self;
    }


    function B() {
        var self = {};
        copyMember(self, A());
        copyMember(self, C());

        return self;
    }

    var b = B();
    b.sayHello();
    b.sayHi();

})();