/**
 * Created by plter on 6/20/16.
 */


(function () {
    
    
    function Hello() {
        
    }

    /**
     * @deprecated 使用sayHi方法替代
     */
    Hello.prototype.sayHello = function () {
        console.log("Hello World");
    };
    
    Hello.prototype.sayHi = function () {
        console.log("Hi javascript");
    };
    
    
    window.Hello = Hello;
    
})();