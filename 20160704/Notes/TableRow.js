/**
 * Created by plter on 7/4/16.
 */

window.ucai = window.ucai || {};

(function () {

    function TableRow(dbObject) {
        this._dbObject = dbObject;

        this._node = document.createElement("tr");
        this._node.appendChild(this._createTd(dbObject.name));
        this._node.appendChild(this._createTd(dbObject.date));
        this._node.appendChild(this._createTd(dbObject.amount));
        this._node.appendChild(this._createTd(dbObject.paied != 0 ? "是" : "否"));

        var td = this._createTd();
        td.appendChild(this._createDeleteButton());
        this._node.appendChild(td);
    }

    TableRow.prototype._createDeleteButton = function () {
        var btn = document.createElement("button");
        btn.innerHTML = "删除";
        btn.onclick = function () {
            if (this.onRequestDeleteRow) {
                this.onRequestDeleteRow(this._dbObject);
            }
        }.bind(this);
        return btn;
    };

    TableRow.prototype._createTd = function (content) {
        // content = content ? content : "";
        content = content || "";

        var td = document.createElement("td");
        td.innerHTML = content;
        return td;
    };

    Object.defineProperty(TableRow.prototype, "node", {
        get: function () {
            return this._node;
        }
    });

    Object.defineProperty(TableRow.prototype, "onRequestDeleteRow", {
        get: function () {
            return this._onRequestDeleteRow;
        },
        set: function (value) {
            this._onRequestDeleteRow = value;
        }
    });

    ucai.TableRow = TableRow;
})();