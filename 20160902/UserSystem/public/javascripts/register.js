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
            {login: this.login.value, password: md5(this.password.value)}
        ).done(function (data) {
            console.log(data);

            switch (data.state) {
                case 1:
                    location.href = "/";
                    break;
                case 1062:
                    alertDiv.html("用户名已存在");
                    break;
                case 2:
                    alertDiv.html("无法添加用户");
                    break;
                default:
                    alertDiv.html("未知错误");
                    break;
            }
        }).fail(function () {
            alertDiv.html("无法连接服务器");
        });
    });

})();