/**
 * Created by plter on 6/15/16.
 */

(function () {
    
    function init() {
        
        // var h = Human("ucai");
        // h.sayHello();
        // h.hi();
        // h.hi("ucai");
        //
        //
        var s = ucai.Student("ZhangSan");
        s.sayHello();
        s.learn();

        // console.log(Math.random());
        
        
        var h = ucai.Human("ZhangSan");
        console.log(h.name);
        
        h.name = "LiSi";
        console.log(h.name);
    }

    init();
}());