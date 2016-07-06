/**
 * Created by plter on 7/6/16.
 */

(function () {

    var form;

    function init() {
        form = $("#form");

        form.on("submit", function (event) {
            console.log($("#blank").val());

            // console.log($("#blank").attr("type"));

            event.preventDefault();
        });
        $("#blank").val("Hello World");

        // $("#blank").attr("type", "number");
    }

    init();
})();