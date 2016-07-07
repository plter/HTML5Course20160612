/**
 * Created by plter on 7/7/16.
 */


(function () {

    // $.get("data.txt").done(function (data) {
    //     console.log(data);
    // });

    $.ajax("data.txt", {
        error: function () {
            console.error("加载数据时出错");
        },
        complete: function (xhr) {
            console.log(xhr.responseText);
        }
    });

})();