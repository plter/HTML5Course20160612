/**
 * Created by plter on 7/27/16.
 */

import Container from "cn/ucai/game2d/display/Container";
import Rectangle from "cn/ucai/game2d/display/Rectangle";
import Text from "cn/ucai/game2d/display/Text";


class Card extends Container {
    constructor(num, width, height) {
        super();

        this._num = num;

        this._faceA = new Container();
        this._faceABg = new Rectangle(width, height, "red");
        this._faceA.addChild(this._faceABg);
        this._text = new Text("" + num, 30);
        this._faceA.addChild(this._text);
        this.addChild(this._faceA);

        this._faceB = new Rectangle(width, height, "blue");
        this.addChild(this._faceB);

        this.showFaceA();
    }

    showFaceA() {
        this._faceA.setVisible(true);
        this._faceB.setVisible(false);
    }

    showFaceB() {
        this._faceA.setVisible(false);
        this._faceB.setVisible(true);
    }

    getNum() {
        return this._num;
    }
}

export default Card;