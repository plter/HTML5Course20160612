/**
 * Created by plter on 7/6/16.
 */

(function () {

    function init() {
        // $("div").html("Hello World");
        // console.log($("div").html());

        // $("#mydiv").html("Hello World");

        $("div").click({name: "ucai", age: 4}, function (event) {
            console.log(event);

            // $(this).off("click");
        });
        // $("div").bind("click", {name: "ucai"}, function (event) {
        //     console.log(event.data);
        //
        //     $(this).unbind("click");
        // });

        // $("div").on("click", function (event) {
        //     console.log(event);
        //
        //     $(this).off("click");
        // });
    }

    init();
})();