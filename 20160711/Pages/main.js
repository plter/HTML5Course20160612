/**
 * Created by plter on 7/11/16.
 */

(function () {

    var offsetY = 0, translateY = 0;
    var jqDocument, jqContainer;
    var containerHeight = 0;
    var jqPage, pageCount, windowHeight = window.innerHeight;
    var minTranslateY, maxTranslateY = 0;

    function initPages() {
        jqPage = $(".page");
        pageCount = jqPage.length;
        containerHeight = windowHeight * pageCount;
        minTranslateY = -windowHeight * (pageCount - 1);

        jqPage.css({
            width: windowHeight + "px",
            height: windowHeight + "px"
        });
    }

    function syncTranslateY() {
        jqContainer.css("transform", "translateY(" + translateY + "px)");
    }

    function addListeners() {
        jqDocument.on("touchstart", function (event) {
            offsetY = translateY - event.originalEvent.touches[0].clientY;
            jqContainer.css("transition-duration", "0s");
        });

        jqDocument.on("touchmove", function (event) {
            translateY = event.originalEvent.touches[0].clientY + offsetY;
            syncTranslateY();
        });

        jqDocument.on("touchend", function (event) {
            if (translateY > maxTranslateY) {
                translateY = maxTranslateY;
            }
            if (translateY < minTranslateY) {
                translateY = minTranslateY;
            }

            var pageIndex = Math.round(Math.abs(translateY / windowHeight));
            translateY = -pageIndex * windowHeight;

            jqContainer.css("transition-duration", "0.3s");
            syncTranslateY();
        });
    }

    function main() {
        jqDocument = $(document);
        jqContainer = $("#container");

        initPages();
        addListeners();
    }

    main();
})();