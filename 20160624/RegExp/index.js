/**
 * Created by plter on 6/24/16.
 */


(function () {

    // var str = "Hello World";
    // console.log(str.replace(/o/g, "a"));


    // var email = "ss@ucai.cn";
    // var p = /.*@.*\..*/;
    // console.log(p.test(email));


    var str = "Hello World Google Apple";

    var p = /.{5}\s/g;

    while (true) {
        var result = p.exec(str);
        if (result) {
            console.log(result);
        } else {
            break;
        }
    }

})();