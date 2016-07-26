/**
 * Created by plter on 7/26/16.
 */

import Game2dApp from "cn/ucai/game2d/app/Game2dApp";
import Rectangle from "cn/ucai/game2d/display/Rectangle";

class Game extends Game2dApp {
    constructor() {
        super(400, 300);

        this._rect = new Rectangle(100, 100, "#ff0000");
        this.addChild(this._rect);

        document.body.appendChild(this.getDom());
    }
}

new Game();