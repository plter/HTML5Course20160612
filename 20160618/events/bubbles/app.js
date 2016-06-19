/**
 * Created by plter on 6/18/16.
 */

(function () {

    var a, b, c;

    function findDivs() {
        a = document.getElementById("a");
        b = document.getElementById("b");
        c = document.getElementById("c");
    }

    function addListeners() {

        // a.addEventListener("click", function (event) {
        //     console.log("a clicked");
        // });
        // b.addEventListener("click", function (event) {
        //     console.log("b clicked");
        //
        //     //阻止事件冒泡
        //     event.stopPropagation();
        //
        //     //事件立即停止冒泡
        //     // event.stopImmediatePropagation();
        // });
        // b.addEventListener("click", function (event) {
        //     console.log("b clicked 1");
        // });
        // c.addEventListener("click", function (event) {
        //     console.log("c clicked");
        // });


        // a.addEventListener("click", function (event) {
        //     console.log("捕获阶段 a clicked");
        //
        //     //此操作可以屏蔽了级对象的事件响应
        //     event.stopImmediatePropagation();
        // }, true);
        // b.addEventListener("click", function (event) {
        //     console.log("捕获阶段 b clicked");
        // }, true);
        // c.addEventListener("click", function (event) {
        //     console.log("捕获阶段 c clicked");
        // }, true);
        // a.addEventListener("click", function (event) {
        //     console.log("冒泡阶段 a clicked");
        // });
        // b.addEventListener("click", function (event) {
        //     console.log("冒泡阶段 b clicked");
        // });
        // c.addEventListener("click", function (event) {
        //     console.log("冒泡阶段 c clicked");
        // });

        a.addEventListener("contextmenu",function (event) {
            console.log("将要呈现右键菜单");

            //取消该事件
            event.preventDefault();
        });
    }

    function init() {
        findDivs();
        addListeners();
    }

    init();

})();