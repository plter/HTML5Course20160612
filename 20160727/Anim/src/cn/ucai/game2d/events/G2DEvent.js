/**
 * Created by plter on 7/26/16.
 */

class G2DEvent {

    constructor(type, data) {
        this._type = type;
        this._data = data;

        this._target = null;
    }

    getType() {
        return this._type;
    }

    getData() {
        return this._data;
    }

    internal_setTarget(value) {
        this._target = value;
    }

    getTarget() {
        return this._target;
    }
}

G2DEvent.ENTER_FRAME = "enterFrame";

export default G2DEvent;