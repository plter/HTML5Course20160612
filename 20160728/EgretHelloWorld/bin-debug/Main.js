var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        _super.call(this);
        var s = new egret.Sprite();
        s.graphics.beginFill(0xff0000);
        s.graphics.drawRect(0, 0, 100, 100);
        s.graphics.endFill();
        this.addChild(s);
    }
    var d = __define,c=Main,p=c.prototype;
    return Main;
}(egret.DisplayObjectContainer));
egret.registerClass(Main,'Main');
