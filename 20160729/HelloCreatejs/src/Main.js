/**
 * Created by plter on 7/29/16.
 */
///<reference path="../node_modules/definitively-typed/easeljs/easeljs.d.ts"/>
var ucai;
(function (ucai) {
    var Main = (function () {
        function Main() {
            var stage = new createjs.Stage("canvas");
            createjs.Ticker.on("tick", function () {
                stage.update();
            });
            var mc = new window["lib"].MyMC();
            stage.addChild(mc);
            // var shape = new createjs.Shape();
            // shape.graphics.beginFill("#ff0000");
            // shape.graphics.drawRect(0, 0, 100, 100);
            // shape.graphics.endFill();
            // stage.addChild(shape);
            // // shape.rotation = 30;
            // shape.on("click", ()=> {
            //     // alert("Clicked");
            //
            //     createjs.Tween.get(shape).to({x: 300, alpha: 0}, 1000);
            // });
            // shape.on("tick", ()=> {
            //     shape.x++;
            // });
        }
        return Main;
    }());
    new Main();
})(ucai || (ucai = {}));
//# sourceMappingURL=Main.js.map