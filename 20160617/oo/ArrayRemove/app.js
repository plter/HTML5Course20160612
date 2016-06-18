/**
 * Created by plter on 6/17/16.
 */



(function () {


    Array.prototype.remove = function (obj) {
        var index = this.indexOf(obj);
        if (index != -1) {
            this.splice(index, 1);
        }
    };


    function init() {
        var arr = [];

        var obj1 = {name: "ucai"};
        var obj2 = {name: "ZhangSan"};
        var obj3 = {name: "WuDuo"};

        arr.push(obj1);
        arr.push(obj2);
        arr.push(obj3);

        arr.remove(obj2);

        console.log(arr);
    }

    init();
})();