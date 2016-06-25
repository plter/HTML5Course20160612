/**
 * Created by plter on 6/25/16.
 */


(function () {

    function init() {
        var str = "Hello World";

        var p = /[a-f]/g;

        while (true) {
            var result = p.exec(str);

            if (result) {
                console.log(result);
            } else {
                break;
            }
        }
    }

    init();
})();