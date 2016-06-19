/**
 * Created by plter on 6/18/16.
 */

(function () {

    var link;


    function linkClickedHander(event) {
        console.log("Link clicked");

        link.onclick = null;
    }

    function link_clickedHandler(event) {
        console.log("link clicked");

        link.removeEventListener("click", link_clickedHandler);
    }

    function init() {
        link = document.getElementById("link");
        // link.onclick = linkClickedHander;
        // link.onclick = function (event) {
        //     console.log("Link clicked 2");
        // }

        // link.addEventListener("click",function (event) {
        //     console.log("link clicked");
        // });
        link.addEventListener("click", link_clickedHandler);
        // link.addEventListener("mousemove", function (event) {
        //     console.log(event);
        // });
    }

    init();
})();