/**
 * Created by plter on 7/26/16.
 */

class G2DEvent {

    constructor(type, data) {
        this._type = type;
        this._data = data;
    }

    getType() {
        return this._type;
    }

    getData() {
        return this._data;
    }
}

export default G2DEvent;