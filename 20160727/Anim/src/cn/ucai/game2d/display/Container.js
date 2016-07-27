/**
 * Created by plter on 7/26/16.
 */

import Display from "cn/ucai/game2d/display/Display";

class Container extends Display {

    constructor() {
        super();

        this._children = [];
    }

    /**
     * @param {Display} child
     */
    addChild(child) {
        if (this._children.indexOf(child) == -1) {
            this._children.push(child);
            child.internal_setParent(this);
        } else {
            throw new Error("The child is already in this container");
        }
    }

    /**
     *
     * @param {Display} child
     */
    removeChild(child) {
        var index = this._children.indexOf(child);
        if (index != -1) {
            this._children.splice(index, 1);
            child.internal_setParent(null);
        }
    }

    getChildren() {
        return this._children;
    }

    getChildrenCount() {
        return this._children.length;
    }

    getChildAt(index) {
        return this._children[index];
    }

    removeAllChildren() {
        var c;
        while (this._children.length) {
            c = this._children.pop();
            c.internal_setParent(null);
        }
    }

    onDraw(context2d) {
        for (let i = 0; i < this._children.length; i++) {
            this._children[i].internal_draw(context2d);
        }
    }

    internal_onClick(nativeEvent) {
        for (let i = 0; i < this._children.length; i++) {
            this._children[i].internal_onClick(nativeEvent);
        }
    }


    internal_enterFrame(e) {
        for (let i = 0; i < this._children.length; i++) {
            this._children[i].internal_enterFrame(e);
        }
        super.internal_enterFrame(e);
    }
}

export default Container;