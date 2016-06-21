/**
 * Created by plter on 6/21/16.
 */


(function () {

    // console.log(arguments.callee);
    //
    //
    // function Human(name) {
    //     this._name = name;
    // }
    //
    // var h = new Human("吴多");
    //
    // var hello = function () {
    //     console.log("Hello " + this._name);
    // }.bind(h);
    //
    // hello();

    // setTimeout(function () {
    //     console.log(this);
    // }, 1000);


    // function Human(name) {
    //     this._name = name;
    //
    //     this.hello = function () {
    //         (function (self) {
    //             var count = 0;
    //             var id = setInterval(function () {
    //                 console.log(self._name + " say hello");
    //
    //                 count++;
    //                 if (count > 5) {
    //                     clearInterval(id);
    //                 }
    //             }, 1000);
    //         })(this);
    //     };
    // }
    //
    // var h = new Human("吴多");
    // h.hello();
    
    
    var div = document.getElementById("div");
    div.onclick = function (event) {
        console.log(this);
    }

})();