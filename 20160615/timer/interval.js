/**
 * Created by plter on 6/15/16.
 */

(function () {


    var intervalId;

    function init() {

        var count = 0;

        intervalId = setInterval(function () {
            count++;

            console.log(count);

            if (count >= 10) {
                clearInterval(intervalId);
            }
        }, 1000);
    }

    init();
}());