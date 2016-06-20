/**
 * Created by plter on 6/20/16.
 */


(function () {

    var div;

    function init() {
        div = document.getElementById("div");
        div.addEventListener("contextmenu",function (event) {
            console.log(event);

            //取消事件的默认行为
            event.preventDefault();
        });
    }


    init();
})();