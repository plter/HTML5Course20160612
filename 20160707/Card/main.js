/**
 * Created by plter on 7/7/16.
 */


(function () {

    function init() {
        $(".card").card({
            width: "120px", height: "80px", onclick: function (event) {
                $(this).toggleFace();
            }
        });
    }

    init();
})();