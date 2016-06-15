/**
 * Created by plter on 6/15/16.
 */

(function () {

    var count = 0;

    function timer() {
        count++;

        console.log(count);

        if (count < 10) {
            setTimeout(timer, 1000);
        }
    }

    function init() {
        timer()
    }

    init();
}());