/**
 * Created by plter on 7/6/16.
 */


(function () {

    var rect;

    function init() {
        rect = $("#rect");
        // function toggleSlide() {
        //     rect.slideToggle(1000, toggleSlide);
        // }
        //
        // toggleSlide();

        // rect.hide();
        rect.click(function () {
            // $(this).hide(1000);
            // $(this).fadeOut();

            $(this).slideUp(1000, function () {
                alert("图形消失了");
            });
        });

        $("#btnshow").click(function () {
            // rect.show(1000);
            // rect.toggle();
            // rect.fadeToggle();
            // rect.slideToggle();

            rect.fadeIn();
        });
    }


    init();
})();