/**
 * Created by plter on 7/4/16.
 */

(function () {

    window.Config = {DB_NAME: "Notes", DB_VERSION: 1};

    function Main() {
        this.getElements();
        this.addListeners();

        this.connectDB(function () {
            this.readData();
        }.bind(this));
    }

    var p = Main.prototype;

    p.getElements = function () {
        this._dataContainer = document.getElementById("datacontainer");
        this._msgContainer = document.getElementById("msgcontainer");
        this._form = document.getElementById("form");
    };

    p.addListeners = function () {
        this._form.onsubmit = function (event) {
            event.preventDefault();

            var name = this._form['name'];
            var date = this._form["date"];
            var amount = this._form["amount"];
            var paied = this._form["paied"];

            this.saveData({name: name.value, date: date.value, amount: amount.value, paied: paied.value});
        }.bind(this)
    };

    p.clearFormFields = function () {
        this._form["name"].value = "";
        this._form["amount"].value = "";
        this._form["paied"].value = "";
    };

    Main.prototype.saveData = function (data) {
        var trans = this._db.transaction("notes", "readwrite");
        var os = trans.objectStore("notes");
        var req = os.put(data);
        req.onsuccess = function () {
            this._msgContainer.innerHTML = "保存数据成功";
            this.clearFormFields();

            this.readData();
        }.bind(this);
        req.onerror = function () {
            this._msgContainer.innerHTML = "保存数据失败";
        }.bind(this);
    };


    Main.prototype.readData = function () {
        var trans = this._db.transaction("notes");
        var os = trans.objectStore("notes");
        var req = os.getAll();
        req.onerror = function () {
            this._msgContainer.innerHTML = "读取数据失败";
        }.bind(this);
        req.onsuccess = function () {
            var data = event.target.result;
            this.showData(data);
        }.bind(this)
    };

    Main.prototype.showData = function (data) {
        if (this._table) {
            this._table.parentNode.removeChild(this._table);
        }

        this._table = document.createElement("table");
        var _tr = document.createElement("tr");
        this._table.appendChild(_tr);
        _tr.appendChild(this.createElementAndContent("td", "名字"));
        _tr.appendChild(this.createElementAndContent("td", "日期"));
        _tr.appendChild(this.createElementAndContent("td", "欠钱数额"));
        _tr.appendChild(this.createElementAndContent("td", "是否还清"));

        for (var i = 0; i < data.length; i++) {

            var tr = new ucai.TableRow(data[i]);
            tr.onRequestDeleteRow = this.requestDeleteRowHandler.bind(this);
            this._table.appendChild(tr.node);
        }

        this._dataContainer.appendChild(this._table);
    };

    Main.prototype.requestDeleteRowHandler = function (dbObject) {
        var trans = this._db.transaction("notes", "readwrite");
        var os = trans.objectStore("notes");
        var req = os.delete(dbObject.id);
        req.onerror = function () {
            this._msgContainer.innerHTML = "删除数据失败";
        }.bind(this);
        req.onsuccess = function () {
            this._msgContainer.innerHTML = "删除数据成功";

            this.readData();
        }.bind(this);
    };

    Main.prototype.createElementAndContent = function (tagName, content) {
        var tag = document.createElement(tagName);
        tag.innerHTML = content;
        return tag;
    };

    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);
        req.onsuccess = function (event) {
            this._db = event.target.result;

            sucCallback();
        }.bind(this);
        req.onerror = function (event) {
            console.error(event);
        };
        req.onupgradeneeded = function (event) {

            var db = event.target.result;

            var os = db.createObjectStore("notes", {keyPath: "id", autoIncrement: true});
            os.createIndex("name", "name");
            os.createIndex("date", "date");
            os.createIndex("amount", "amount");
            os.createIndex("paied", "paied");
        };
    };


    new Main();
})();