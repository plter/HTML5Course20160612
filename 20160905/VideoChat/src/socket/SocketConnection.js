/**
 * Created by plter on 9/5/16.
 */
var module = module || {};
class SocketConnection {
    constructor(socket) {
        this._id = SocketConnection.__id;
        this._socket = socket;
        SocketConnection.__connections.set(this.id, this);
        this.addListeners();
        this.sendIdToClient();
        SocketConnection.__id++;
    }
    sendIdToClient() {
        this.socket.emit("receivedId", this.id);
    }
    addListeners() {
        this.socket.on("disconnect", () => {
            SocketConnection.__connections.delete(this.id);
        });
        this.socket.on("sendOffer", (data) => {
            let target = SocketConnection.__connections.get(data.targetId);
            console.log(SocketConnection.__connections);
            console.log(SocketConnection.__connections.size);
            if (target) {
                target.socket.emit("receivedOffer", { targetId: this.id, offer: data.offer });
            }
        });
        this.socket.on("sendAnswer", (data) => {
            let target = SocketConnection.__connections.get(data.targetId);
            if (target) {
                target.socket.emit("receivedAnswer", { targetId: this.id, answer: data.answer });
            }
        });
        this.socket.on("sendCandidate", (data) => {
            let target = SocketConnection.__connections.get(data.targetId);
            if (target) {
                target.socket.emit("receivedRemoteCandidate", { targetId: this.id, candidate: data.candidate });
            }
        });
    }
    get id() {
        return this._id;
    }
    get socket() {
        return this._socket;
    }
}
SocketConnection.__id = 1;
SocketConnection.__connections = new Map();
module.exports = SocketConnection;
//# sourceMappingURL=SocketConnection.js.map