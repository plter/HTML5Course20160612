/**
 * Created by plter on 7/18/16.
 */
var cn;
(function (cn) {
    var ucai;
    (function (ucai) {
        var hello;
        (function (hello) {
            var Hello = (function () {
                function Hello() {
                }
                Hello.prototype.sayHello = function () {
                    console.log("Hello TS");
                };
                Hello.prototype.getString = function () {
                    return "Hello World";
                };
                return Hello;
            }());
            hello.Hello = Hello;
        })(hello = ucai.hello || (ucai.hello = {}));
    })(ucai = cn.ucai || (cn.ucai = {}));
})(cn || (cn = {}));
/**
 * Created by plter on 7/18/16.
 */
var cn;
(function (cn) {
    var ucai;
    (function (ucai) {
        var Hello = cn.ucai.hello.Hello;
        var Main = (function () {
            function Main() {
                // var h = new cn.ucai.hello.Hello();
                var h = new Hello();
                h.sayHello();
            }
            return Main;
        }());
        ucai.Main = Main;
    })(ucai = cn.ucai || (cn.ucai = {}));
})(cn || (cn = {}));
new cn.ucai.Main();
