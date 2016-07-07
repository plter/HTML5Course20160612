/**
 * Created by plter on 7/7/16.
 */


(function () {

    var form, nameInput, SERVER_URL = "/helloserver";
    var resultField;

    function init() {
        nameInput = $("#nameinput");
        resultField = $("#resultfiled");

        form = $("#form");
        form.on("submit", function (event) {
            event.preventDefault();

            resultField.html("Loading...");
            $.post(SERVER_URL, {name: nameInput.val()}, function (data) {
                resultField.html(data);
            });
        });
    }


    init();
})();