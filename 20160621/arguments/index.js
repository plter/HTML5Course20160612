/**
 * Created by plter on 6/21/16.
 */

(function () {

    function max() {
        var arr = [];
        for (var i = 0; i < arguments.length; i++) {
            arr.push(arguments[i]);
        }

        var arr1 = arr.sort(function (a, b) {
            if (a < b) {
                return 1;
            }
            if (a > b) {
                return -1;
            }

            return 0;
        });

        return arr[0];
    }


    console.log(max(1, 2, 3, 4, 5, 6, -1, 10));

    var result = max(1, 2, 3, 4, 5, 6, -1, 10);

    alert(result);
})();