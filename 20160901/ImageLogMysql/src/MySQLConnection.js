/**
 * Created by plter on 9/1/16.
 */

var mysql = require("mysql");

/**
 * @returns {Connection}
 */
module.exports.createConnection = function () {
    return mysql.createConnection({
        host: "localhost",
        user: "root",
        database: "imagelog"
    });
};