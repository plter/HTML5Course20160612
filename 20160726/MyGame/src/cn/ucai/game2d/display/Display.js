/**
 * Created by plter on 7/26/16.
 */


class Display {

    constructor() {
        this.x = 0;
        this.y = 0;
        this.scaleX = 1;
        this.scaleY = 1;
        this.rotation = 0;
    }

    /**
     * @param {CanvasRenderingContext2D} context2d
     * @protected
     * @abstract
     */
    onDraw(context2d) {
    }

    /**
     *
     * @param {CanvasRenderingContext2D} context2d
     */
    internal_draw(context2d) {
        context2d.save();
        context2d.translate(this.x, this.y);
        context2d.scale(this.scaleX, this.scaleY);
        context2d.rotate(this.rotation);

        this.onDraw(context2d);
        context2d.restore();
    }
}

export default Display;