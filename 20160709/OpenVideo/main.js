/**
 * Created by plter on 7/9/16.
 */


(function () {

    var videoDialog;

    function init() {
        $("#btnopenvideo").button().click(function () {
            videoDialog.dialog("open");
        });

        videoDialog = $("#videodialog").dialog({
            autoOpen: false,
            close: function (event, ui) {
                var videoPlayer = $(this).find(".videoplayer");
                var vpElement = videoPlayer[0];
                vpElement.pause();
            }
        });
    }

    init();
})();