class Main extends egret.DisplayObjectContainer {

    public constructor() {
        super();

        var s = new egret.Sprite();
        s.graphics.beginFill(0xff0000);
        s.graphics.drawRect(0, 0, 100, 100);
        s.graphics.endFill();

        this.addChild(s);
    }
}