/**
 * Created by plter on 6/13/16.
 */

(function () {
    //Function
    function hello(name) {
        console.log("Hello " + name);
    }

// hello();


// function max(a, b) {
//
//     // console.log(arguments);
//
//     // if (a > b) {
//     //     return a;
//     // } else {
//     //     return b;
//     // }
//
//     return a > b ? a : b;
// }
//
// console.log(Math.max(1, 2, 10, 100, -10, 101));


    var h = hello;
// h("ZhangSan");
// h();

// h.call(null, "LiSi");
    h.apply(null, ["ucai"]);
}());
