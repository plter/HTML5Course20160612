/**
 * Created by plter on 7/26/16.
 */

import Display from "cn/ucai/game2d/display/Display";

class Text extends Display {

    /**
     * 构造一个文本控件
     * @param {string} text 将呈现的文字
     * @param {number} fontSize 文字的大小,以像素为单位
     * @param {string} fontFamily 文字的字体
     * @param {string} color
     */
    constructor(text, fontSize, fontFamily, color) {
        super();

        this._fontSize = fontSize || 10;
        this._fontFamily = fontFamily || "sans-serif";
        this._color = color || "#000000";
        this.generateFontString();

        this._text = text;
    }

    setText(text) {
        this._text = text;
    }

    getText() {
        return this._text;
    }

    /**
     * @private
     */
    generateFontString() {
        this._font = `${this._fontSize}px ${this._fontFamily}`;
    }

    /**
     * @private
     */
    getFont() {
        return this._font;
    }

    getFontSize() {
        return this._fontSize;
    }

    getFontFamily() {
        return this._fontFamily;
    }

    setFontSize(value) {
        this._fontSize = value;
        this.generateFontString();
    }

    setFontFamily(value) {
        this._fontFamily = value;
        this.generateFontString();
    }

    setColor(value) {
        this._color = value;
    }

    getColor() {
        return this._color;
    }

    /**
     *
     * @param {CanvasRenderingContext2D} context2d
     */
    onDraw(context2d) {
        context2d.font = this._font;
        context2d.fillStyle = this._color;
        context2d.fillText(this._text, 0, this._fontSize);
    }
}

export default Text;