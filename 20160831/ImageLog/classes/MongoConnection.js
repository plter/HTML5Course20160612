/**
 * Created by plter on 8/31/16.
 */

const Config = require("./Config");
const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;


class MongoConnection {

    static connect(callback) {
        MongoClient.connect(Config.MONGODB_URL, callback);
    }
}

module.exports = MongoConnection;