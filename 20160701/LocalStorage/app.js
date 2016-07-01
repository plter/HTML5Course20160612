/**
 * Created by plter on 7/1/16.
 */

(function () {

    function Main() {
        // this._storage = sessionStorage;
        this._storage = localStorage;

        this.getElements();
        this.addListeners();

        this.readData();
    }

    Main.prototype.readData = function () {
        this._output.innerHTML = "";

        for (var i = 0; i < this._storage.length; i++) {
            var key = this._storage.key(i);
            var div = document.createElement("div");
            div.innerHTML = key + ":" + this._storage.getItem(key);
            this._output.appendChild(div);
        }
    };

    Main.prototype.addListeners = function () {
        this._btnSaveKv.onclick = function () {

            var key = this._keyInput.value;
            if (!key || key == "") {
                alert("请填写key");
                return;
            }
            var value = this._valueInput.value;
            if (!value || value == "") {
                alert("请填写value");
                return;
            }

            this._storage.setItem(key, value);

            this._keyInput.value = "";
            this._valueInput.value = "";

            this.readData();
        }.bind(this);
    };

    Main.prototype.getElements = function () {
        this._keyInput = document.getElementById("keyinput");
        this._valueInput = document.getElementById("valueinput");
        this._btnSaveKv = document.getElementById("btnsavekv");
        this._output = document.getElementById("output");
    };

    new Main();
})();