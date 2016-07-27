/**
 * Created by plter on 7/27/16.
 */

import G2DEvent from "cn/ucai/game2d/events/G2DEvent";

class Move {
    constructor(target, propertyName, from, to, frames) {
        this._target = target;
        this._propertyName = propertyName;
        this._from = from;
        this._to = to;
        this._frames = frames;
        this._speed = (this._to - this._from) / this._frames;
        this._frameIndex = 0;
        this._running = false;
    }

    start() {
        if (!this._running) {
            this._frameIndex = 0;
            this._target[this._propertyName] = this._from;
            this._target.addEventListener(G2DEvent.ENTER_FRAME, this.enterFrameHandler.bind(this));
            this._running = true;
        }
    }

    enterFrameHandler(e) {
        this._target[this._propertyName] += this._speed;

        this._frameIndex++;
        if (this._frameIndex >= this._frames) {
            this._target.removeEventListener(G2DEvent.ENTER_FRAME);

            this._running = false;
            this._target[this._propertyName] = this._to;
        }
    }
}

export default Move;