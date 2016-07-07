/**
 * Created by plter on 7/7/16.
 */


(function () {

    var container = $("#container");

    container.html("Loading...");
    container.load("content.htm", function (data, status) {
        if (status == "error") {
            container.html("加载内容失败");
        }
    });

})();