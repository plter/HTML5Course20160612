/**
 * Created by plter on 7/1/16.
 */

(function () {

    window.Constants = {
        RECT_WIDTH: 10,
        MAX_HEIGHT: 300,
        CANVAS_HEIGHT: 400,
        FONT_SIZE: 25,
        KEYS: [{key: "chrome", color: "green"}, {key: "firefox", color: "red"}, {key: "ie", color: "blue"}]
    };

    function Main() {
        this._context2d = document.getElementById("canvas").getContext("2d");

        this.drawKeyArea();

        this.loadData(function (data) {
            this.drawData(data);
        }.bind(this));
    }

    Main.prototype.drawKeyArea = function () {

        var x = 300;
        var offsetY = 200;

        for (var i = 0; i < Constants.KEYS.length; i++) {
            var keyData = Constants.KEYS[i];

            var y = i * 30 + offsetY;
            this.drawText(this._context2d, x + 20, y, keyData.key);
            this.drawRect(this._context2d, x, y + 14, 10, 10, keyData.color);
        }
    };

    Main.prototype.drawData = function (data) {
        var index = 0;
        for (var k in data) {
            var item = data[k];

            var x = index * 100 + 10;
            this.drawText(this._context2d, x, Constants.CANVAS_HEIGHT - Constants.FONT_SIZE - 5, k);

            for (var i = 0; i < Constants.KEYS.length; i++) {
                var keyData = Constants.KEYS[i];
                var value = item[keyData.key];
                var height = value * Constants.MAX_HEIGHT / 100;
                var y = Constants.CANVAS_HEIGHT - height - 30;

                this.drawRect(this._context2d, x, y, Constants.RECT_WIDTH, height, keyData.color);
                x += Constants.RECT_WIDTH + 5;
            }

            index++;
        }
    };

    Main.prototype.drawRect = function (context2d, x, y, width, height, color) {
        context2d.save();
        context2d.fillStyle = color;
        context2d.fillRect(x, y, width, height);
        context2d.restore();
    };

    Main.prototype.drawText = function (context2d, x, y, text) {
        context2d.fillStyle = "black";
        context2d.font = Constants.FONT_SIZE + "px Courier";
        context2d.fillText(text, x, y + Constants.FONT_SIZE);
    };

    Main.prototype.loadData = function (successHandler) {
        $.get("data.json").done(successHandler).fail(function () {
            console.error("加载数据失败");
        });
    };


    new Main();
})();