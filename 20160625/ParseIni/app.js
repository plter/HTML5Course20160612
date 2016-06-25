/**
 * Created by plter on 6/25/16.
 */


(function () {

    function init() {

        $.get("config.ini").done(function (data) {
            var ini = new ucai.Ini(data);
            console.log(ini.app.name);
        });
    }

    init();
})();