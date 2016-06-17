/**
 * Created by plter on 6/15/16.
 */

(function () {

    function Human(name) {
        var self = {};

        self._name = name;

        // self.setName = function (name) {
        //     self._name = name;
        //    
        //     console.log("名字改变了");
        // };
        //
        // self.getName = function () {
        //     return self._name;
        // };

        Object.defineProperty(self, "name", {
            get: function () {
                return self._name;
            },
            set: function (value) {
                self._name = value;
                console.log("名字改变了");
            }
        });

        self.sayHello = function () {
            console.log(self._name + " say hello");
        };

        self.hi = function () {
            switch (arguments.length) {
                case 0:
                    console.log("Hello World");
                    break;
                case 1:
                    var name = arguments[0];
                    console.log("Hello " + name);
                    break;
                default:
                    console.error("参数不正确");
            }
        };

        return self;
    }


    /**
     * 静态函数的实现
     * @param name
     * @returns {Hello}
     */
    Human.createHuman = function (name) {
        return Human(name);
    };

    /**
     * 静态属性
     * @type {string}
     */
    Human.CLASS_NAME = "Human";

    window.Human = Human;
}());