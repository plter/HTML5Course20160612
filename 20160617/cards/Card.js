/**
 * Created by plter on 6/17/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Card(frontImageUrl, backImageUrl) {
        this._frontImageUrl = frontImageUrl;
        this._backImageUrl = backImageUrl;
    }

    Object.prototype.getHtml = function () {
        return "" +
            "<div class=\"card\">" +
            "   <div class=\"front face\"> " +
            "       <img src=\"" + this.frontImageUrl + "\"> " +
            "   </div>" +
            "   <div class=\"back face\">" +
            "       <img src=\"" + this.backImageUrl + "\">" +
            "   </div>" +
            "</div>"
    };


    Object.defineProperty(Card.prototype, "frontImageUrl", {
        get: function () {
            return this._frontImageUrl;
        }
    });

    Object.defineProperty(Card.prototype, "backImageUrl", {
        get: function () {
            return this._backImageUrl;
        }
    });

    ucai.Card = Card;
})();