/**
 * Created by plter on 7/20/16.
 */

"use strict";

class Connection {

    constructor(socket) {

        Connection.__id++;
        this._id = Connection.__id;

        console.log(`current id is ${this._id}`);

        this._socket = socket;

        Connection.addConn(this);
        this.addListeners();
    }

    addListeners() {
        this._socket.on("data", (data)=> {
            // this._socket.write(String(data));
            var msg = String(data);
            // console.log(msg);
            Connection.broadcast(msg);
        });

        this._socket.on("error", (err)=> {
            console.log(err);
        });

        this._socket.on("close", ()=> {
            Connection.removeConn(this);
        });
    }

    write(msg) {
        this._socket.write(msg);
    }

    getId() {
        return this._id;
    }
}

Connection.__id = 0;
Connection.__conns = new Map();

/**
 *
 * @param {Connection} conn
 */
Connection.addConn = function (conn) {
    Connection.__conns.set(conn.getId(), conn);
};

Connection.removeConn = function (conn) {
    Connection.__conns.delete(conn.getId());
};

/**
 * Broadcast message to all clients
 * @param {String} data
 */
Connection.broadcast = function (data) {
    for (var key of Connection.__conns.keys()) {
        Connection.__conns.get(key).write(data);
    }
};

module.exports = Connection;