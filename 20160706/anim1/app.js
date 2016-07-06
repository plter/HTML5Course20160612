/**
 * Created by plter on 7/6/16.
 */


(function () {

    function init() {
        $("#rect").click(function () {

            //slide left
            $(this).animate({width: 0}, 1000, function () {
                $(this).hide();
            });
        });
    }

    init();
})();