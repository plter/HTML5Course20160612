/**
 * Created by plter on 7/25/16.
 */

(function () {

    var es = new EventSource("sse");
    // es.onmessage = function (event) {
    //     console.log(event);
    // }
    es.addEventListener("hello", function (e) {
        var result = JSON.parse(e.data);
        console.log(result, e);
    })

})();