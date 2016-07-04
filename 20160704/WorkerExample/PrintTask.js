/**
 * Created by plter on 7/4/16.
 */


(function () {


    var a = 0;
    var max = 1000000000;

    for (var i = 0; i < max; i++) {
        a++;

        if (i % 1000000 == 0) {
            postMessage(Math.round(i / max * 100) + "%");
        }
    }

    postMessage("完成");
})();