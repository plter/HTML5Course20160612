/**
 * Created by plter on 7/27/16.
 */

import Game2dApp from "cn/ucai/game2d/app/Game2dApp";
import Card from "cn/ucai/cardmemory/Card";

class CardMemory extends Game2dApp {

    constructor() {
        super(400, 300);
        document.body.appendChild(this.getDom());

        this._points = [];
        this._cardWidth = 50;
        this._cardHeight = 50;
        this._currentNum = 1;

        this.restartGame();
    }

    restartGame() {
        this._currentNum = 1;

        this.removeAllChildren();
        this.generatePoints();
        this.addCards();
    }

    addCards() {

        var card, point, randIndex;

        for (let i = 1; i <= 5; i++) {
            card = new Card(i, this._cardWidth - 2, this._cardHeight - 2);
            randIndex = Math.floor(Math.random() * this._points.length);
            point = this._points[randIndex];
            this._points.splice(randIndex, 1);
            card.x = point.x;
            card.y = point.y;
            card.addEventListener("click", this.cardClickedHandler.bind(this));
            this.addChild(card);
        }
    }

    cardClickedHandler(e) {
        if (this._currentNum == e.getTarget().getNum()) {
            this.removeChild(e.getTarget());

            if (this._currentNum == 1) {
                for (let i = 0; i < this.getChildrenCount(); i++) {
                    this.getChildAt(i).showFaceB();
                }
            }
            this._currentNum++;

            if (this.getChildrenCount() == 0) {
                alert("成功了,游戏将重新开始");

                this.restartGame();
            }
        } else {
            alert("点错了");
        }
    }

    generatePoints() {
        this._points.length = 0;

        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 6; j++) {
                this._points.push({x: this._cardWidth * i, y: this._cardHeight * j});
            }
        }
    }
}

new CardMemory();
export default CardMemory;