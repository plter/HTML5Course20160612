class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var s = new egret.Sprite();
        s.graphics.beginFill(0xff0000);
        s.graphics.drawRect(0,0,100,100);
        s.graphics.endFill();
        s.x = 200;
        s.rotation = 30;

        this.addChild(s);

        s.touchEnabled = true;

        s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,(e)=>{
            alert("Sprite clicked");
        },this);
    }
}