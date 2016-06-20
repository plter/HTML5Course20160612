/**
 * Created by plter on 6/20/16.
 */

(function () {


    function init() {
        $.get("song.lrc").done(function (data) {
            console.log(data);
        }).fail(function () {
            console.error("加载失败");
        });
    }

    init();
})();