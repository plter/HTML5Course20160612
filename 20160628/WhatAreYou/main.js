/**
 * Created by plter on 6/28/16.
 */

(function () {

    function Main() {
        this._canvas = document.getElementById("canvas");
        this._context2d = this._canvas.getContext("2d");

        this.buildUI();
        this.addListeners();

        this.render();
    }

    Main.prototype.buildUI = function () {
        this._title = new ucai.Text("告诉我你是什么?", 28);
        this._title.x = 100;

        this._btnImHuman = new ucai.Button("我是人");
        this._btnImHuman.y = 100;

        this._btnImPig = new ucai.Button("我是猪", "#00ff00");
        this._btnImPig.y = 100;
        this._btnImPig.x = 200;
    };

    Main.prototype.addListeners = function () {
        this._canvas.onclick = function (event) {
            if (this._btnImHuman.hitTestPoint(event.layerX, event.layerY)) {
                alert("你确实是个人");
            } else if (this._btnImPig.hitTestPoint(event.layerX, event.layerY)) {
                for (var i = 0; i < 3; i++) {
                    alert("终于承认你是个猪了吧");
                }
                alert("重要的事情说三遍");
            }
        }.bind(this);

        this._canvas.onmousemove = function (event) {
            if (this._btnImHuman.hitTestPoint(event.layerX, event.layerY)) {
                this._btnImHuman.x = Math.random() * 400;
                this._btnImHuman.y = Math.random() * 300;
            }
        }.bind(this);
    };

    Main.prototype.render = function () {
        this._context2d.clearRect(0, 0, this._canvas.width, this._canvas.height);

        this._title.draw(this._context2d);
        this._btnImPig.draw(this._context2d);
        this._btnImHuman.draw(this._context2d);

        requestAnimationFrame(this.render.bind(this));
    };

    new Main();
})();