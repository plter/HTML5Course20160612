/**
 * Created by plter on 6/21/16.
 */


(function () {

    function Main() {
        this._div1 = document.getElementById("div1");
        this._div1.useCustomContextMenu = true;

        var menu = new ucai.CustomContextMenu();
        menu.addItem(new ucai.CustomContextMenuItem("去优才", function () {
            window.location.href = "http://ucai.cn";
        }));
        menu.addItem(new ucai.CustomContextMenuItem("输出信息", function () {
            console.log("JavaScript是世界上最强大的编程语言,没有之一");
        }));
        this._div1.customContextMenu = menu;

        this._div2 = document.getElementById("div2");
        this._div2.useCustomContextMenu = true;
        menu = new ucai.CustomContextMenu();
        menu.addItem(new ucai.CustomContextMenuItem("去百度", function () {
            window.location.href = "http://baidu.com"
        }));
        menu.addItem(new ucai.CustomContextMenuItem("打开github", function () {
            window.location.href = "http://github.com"
        }));
        this._div2.customContextMenu = menu;
    }


    new Main();
})();