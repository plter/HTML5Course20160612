/**
 * Created by plter on 7/29/16.
 */

///<reference path="../node_modules/definitively-typed/easeljs/easeljs.d.ts"/>


namespace ucai {
    class Main {

        constructor() {

            var stage = new createjs.Stage("canvas");
            createjs.Ticker.on("tick", ()=> {
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
    }

    new Main();
}