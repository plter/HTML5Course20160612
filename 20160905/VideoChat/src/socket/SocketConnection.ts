/**
 * Created by plter on 9/5/16.
 */

var module = module || {};

class SocketConnection {

    static __id: number = 1;
    static __connections: Map<number,SocketConnection> = new Map();

    private _id: number;
    private _socket;

    constructor(socket) {
        this._id = SocketConnection.__id;
        this._socket = socket;
        SocketConnection.__connections.set(this.id, this);
        this.addListeners();
        this.sendIdToClient();

        SocketConnection.__id++;
    }

    private sendIdToClient() {
        this.socket.emit("receivedId", this.id);
    }

    private addListeners() {
        this.socket.on("disconnect", ()=> {
            SocketConnection.__connections.delete(this.id);
        });
        this.socket.on("sendOffer", (data)=> {
            let target = SocketConnection.__connections.get(data.targetId);
            if (target) {
                target.socket.emit("receivedOffer", {targetId: this.id, offer: data.offer});
            }
        });
        this.socket.on("sendAnswer", (data)=> {
            let target = SocketConnection.__connections.get(data.targetId);
            if (target) {
                target.socket.emit("receivedAnswer", {targetId: this.id, answer: data.answer});
            }
        });
        this.socket.on("sendCandidate", (data)=> {
            let target = SocketConnection.__connections.get(data.targetId);
            if (target) {
                target.socket.emit("receivedRemoteCandidate", {targetId: this.id, candidate: data.candidate});
            }
        });
    }

    get id(): number {
        return this._id;
    }

    get socket() {
        return this._socket;
    }
}

module.exports = SocketConnection;
