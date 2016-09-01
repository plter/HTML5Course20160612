/**
 * Created by plter on 9/1/16.
 */

(function () {

    var message = $(".message");

    $(".user-info-form").on("submit", function (event) {
        event.preventDefault();

        message.html("正在保存信息...");

        $.post(
            "/api/updateuser",
            {
                id: this.id.value,
                name: this.name.value,
                age: this.age.value
            }
        ).done(function (data) {
            switch (data.state) {
                case 1:
                    message.html("保存信息成功");
                    break;
                case 2:
                    message.html("服务器端不存在该用户");
                    break;
                case 3:
                    message.html("保存用户信息失败");
                    break;
                default:
                    message.html("未知错误");
                    break;
            }
        }).fail(function () {

            console.log(arguments);

            message.html("无法连接服务器");
        });
    });

})();