/**
 * Created by plter on 7/8/16.
 */

(function () {

    var container = $("#container");

    $("form").on("submit", function (event) {
        event.preventDefault();

        var jqSelf = $(this);

        var action = jqSelf.attr("action");
        var method = jqSelf.attr("method");

        var form = jqSelf[0];
        var name = form['name'].value;
        var pass = form['pass'].value;

        $.ajax({
            url: action,
            method: method,
            data: {name: name, pass: pass},
            complete: function (xhr) {
                container.html(xhr.responseText);
            },
            error: function () {
                container.html("无法访问服务器");
            }
        });
    });
})();