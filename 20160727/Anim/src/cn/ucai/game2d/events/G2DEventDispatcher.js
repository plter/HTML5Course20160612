/**
 * Created by plter on 7/26/16.
 */

class G2DEventDispatcher {

    constructor() {
        this._listeners = new Map();
    }

    addEventListener(type, func) {
        var listeners = this._listeners.get(type);
        if (!listeners) {
            listeners = [];
            this._listeners.set(type, listeners);
        }
        listeners.push(func);
    }

    /**
     *
     * @param {string} type
     * @param {Function} func 如果该参数为空,则移除同类型的所有侦听器
     */
    removeEventListener(type, func) {
        var listeners = this._listeners.get(type);
        if (listeners) {
            if (func) {
                var index = listeners.indexOf(func);
                if (index != -1) {
                    listeners.splice(index, 1);
                }
            } else {
                listeners.length = 0;
            }
        }
    }

    /**
     *
     * @param {G2DEvent} event
     */
    dispatchEvent(event) {
        var listeners = this._listeners.get(event.getType());
        if (listeners && listeners.length > 0) {
            for (let i = 0; i < listeners.length; i++) {
                listeners[i](event);
            }
        }
    }
}


export default G2DEventDispatcher;