/**
 * Created by plter on 7/20/16.
 */

class Connection {


    constructor(socket) {
        Connection.__id++;
        this._id = Connection.__id;

        this._socket = socket;
        Connection.addConn(this);

        this.addListens();

        Connection.broadcast("login", `${this.remoteAddress}登陆了`);
    }

    addListens() {
        this._socket.on("disconnect", ()=> {
            Connection.removeConn(this);

            Connection.broadcast("logout", `${this.remoteAddress}离开了`);
        });

        this._socket.on("chat", (data)=> {
            Connection.broadcast("chat", `${this.remoteAddress}:${data}`);
        });
    }

    emit(type, data) {
        this._socket.emit(type, data);
    }

    get id() {
        return this._id;
    }

    get remoteAddress() {
        return this._socket.conn.remoteAddress;
    }
}

Connection.__id = 0;
Connection.__conns = new Map();

Connection.addConn = function (conn) {
    Connection.__conns.set(conn.id, conn);
};

Connection.removeConn = function (conn) {
    Connection.__conns.delete(conn.id);
};

Connection.broadcast = function (type, data) {
    for (var key of Connection.__conns.keys()) {
        Connection.__conns.get(key).emit(type, data);
    }
};

module.exports = Connection;