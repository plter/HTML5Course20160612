/**
 * Created by plter on 8/31/16.
 */

const Config = require("./Config");
const mongodb = require("mongodb");
const Collection = mongodb.Collection;
const MongoClient = mongodb.MongoClient;


class MongoConnection {

    static connect(callback) {
        MongoClient.connect(Config.MONGODB_URL, function (err, db) {

            Object.defineProperty(db, "images", {
                get: function () {
                    return this.collection("images");
                }
            });

            callback(err, db);
        });
    }
}

module.exports = MongoConnection;