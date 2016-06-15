/**
 * Created by plter on 6/15/16.
 */

(function () {
    
    function init() {
        
        var h = Human("ucai");
        h.sayHello();


        var s = Student("ZhangSan");
        s.sayHello();
        s.learn();
    }

    init();
}());