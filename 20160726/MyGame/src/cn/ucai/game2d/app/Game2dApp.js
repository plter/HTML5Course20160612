/**
 * Created by plter on 7/26/16.
 */

import Container from "cn/ucai/game2d/display/Container"

class Game2dApp extends Container {


    constructor(stageWidth, stageHeight) {
        super();

        this._stageWidth = stageWidth;
        this._stageHeight = stageHeight;

        /**
         * @type {HTMLCanvasElement}
         * @private
         */
        this._canvas = document.createElement("canvas");
        this._canvas.width = this._stageWidth;
        this._canvas.height = this._stageHeight;
        this._context2d = this._canvas.getContext("2d");

        this.addNativeListeners();

        this.render(0);
    }

    /**
     * @private
     */
    addNativeListeners() {
        this._canvas.onclick = function (event) {
            this.internal_onClick(event);
        }.bind(this);
    }

    getStageWidth() {
        return this._stageWidth;
    }

    getStageHeight() {
        return this._stageHeight;
    }

    render(time) {
        this._context2d.clearRect(0, 0, this._stageWidth, this._stageHeight);
        this.internal_draw(this._context2d);
        requestAnimationFrame(this.render.bind(this));
    }

    getDom() {
        return this._canvas;
    }
}

export default Game2dApp;