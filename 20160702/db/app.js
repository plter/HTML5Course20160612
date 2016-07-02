/**
 * Created by plter on 7/2/16.
 */

(function () {

    window.Config = {DB_NAME: "MyDB", DB_VERSION: 1};

    function Main() {
        this.connectDB(function () {
            this.writeData();
            // this.readData();
        }.bind(this));
    }

    Main.prototype.readData = function () {
        var trans = this._db.transaction("app");
        var os = trans.objectStore("app");

        // var req = os.getAll();
        var req = os.get("version");
        req.onsuccess = function () {
            console.log(req.result);
        };
        req.onerror = function () {
            console.error("读取失败");
        };
    };

    Main.prototype.writeData = function () {
        var trans = this._db.transaction("app", "readwrite");
        var os = trans.objectStore("app");

        var req;
        new Promise(function (receive, reject) {
            req = os.put("My Application", "name");
            req.onerror = reject;
            req.onsuccess = receive;
        }).then(function (event) {
            console.log("成功写入应用名字");

            new Promise(function (receive, reject) {
                req = os.put("1.0", "version");
                req.onsuccess = receive;
                req.onerror = reject;
            }).then(function (event) {
                console.log("成功写入应用版本");
            }).catch(function (error) {
                console.log(error);
            });
        }).catch(function (error) {
            console.log(error);
        });
    };

    Main.prototype.connectDB = function (sucCallback) {
        var req = indexedDB.open(Config.DB_NAME, Config.DB_VERSION);
        req.onerror = function (error) {
            console.error(error);
        };
        req.onsuccess = function () {
            this._db = req.result;

            sucCallback();
        }.bind(this);
        req.onupgradeneeded = function (event) {
            var db = event.target.result;

            var os = db.createObjectStore("app");
            os.createIndex("name", "name");
            os.createIndex("version", "version");
        };
    };

    new Main();
})();