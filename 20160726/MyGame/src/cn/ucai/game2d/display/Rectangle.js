/**
 * Created by plter on 7/26/16.
 */

import Display from "cn/ucai/game2d/display/Display";

class Rectangle extends Display {


    constructor(width, height, color) {
        super();

        this._width = width;
        this._height = height;
        this._color = color;
    }


    /**
     *
     * @param {CanvasRenderingContext2D} context2d
     */
    onDraw(context2d) {
        context2d.fillStyle = this._color;
        context2d.fillRect(0, 0, this._width, this._height);
    }


    hitTestPoint(globalX, globalY) {
        return globalX > this.getGlobalX() &&
            globalY > this.getGlobalY() &&
            globalX < this.getGlobalX() + this._width &&
            globalY < this.getGlobalY() + this._height;
    }
}

export default Rectangle;