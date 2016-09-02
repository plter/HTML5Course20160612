/**
 * Created by plter on 9/2/16.
 */


(function () {

    var confirmPasswordAlert = $("#confirm-password-alert");
    var alertDiv = $("#alert-div");

    $("#register-form").on("submit", function (event) {
        event.preventDefault();

        if (this.password.value != this.passwordconfirm.value) {
            confirmPasswordAlert.html("两次输入密码不同");
            return;
        }
        confirmPasswordAlert.empty();

        $.post("/api/register",
            {login: this.login.value, password: this.password.value}
        ).done(function (data) {
            console.log(data);
        }).fail(function () {
            alertDiv.html("无法连接服务器");
        });
    });

})();