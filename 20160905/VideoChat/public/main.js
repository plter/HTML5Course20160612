/**
 * Created by plter on 9/5/16.
 */

(function () {

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;

    var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    var localStream, remoteStream;
    var localVideo = document.querySelector("#local-video");
    var remoteVideo = document.querySelector("#remote-video");
    var idInput = document.querySelector("#id-input");
    var pc;

    var socket;
    var myIdSpan = document.querySelector("#my-id-span");
    var myId, targetId;

    function setMyId(value) {
        myId = parseInt(value);
        myIdSpan.innerHTML = myId;
    }

    function setLocalStream(stream) {
        localStream = stream;
        localVideo.src = URL.createObjectURL(stream);
    }

    function setTargetId(value) {
        targetId = parseInt(value);
    }

    function setRemoteStream(stream) {
        remoteStream = stream;
        remoteVideo.src = URL.createObjectURL(stream);
    }

    function connectSocketServer() {
        socket = io.connect(location.origin);
    }

    function addSocketListeners() {
        socket.on("receivedId", function (data) {
            setMyId(data);
        });
        socket.on("receivedOffer", function (data) {
            setTargetId(data.targetId);

            pc.addStream(localStream);

            pc.setRemoteDescription(new SessionDescription(data.offer), function () {
                console.log("Success to set receiver's remote description");

                pc.createAnswer(function (answer) {
                    console.log("Success to create answer");
                    pc.setLocalDescription(answer, function () {
                        console.log("Success to set receiver's local description");
                        socket.emit("sendAnswer", {targetId: targetId, answer: answer});
                    }, function (err) {
                        console.error("Fail to set receiver's local description");
                    });
                }, function (err) {
                    console.error("Fail to create answer");
                });
            }, function (err) {
                console.error("fail to set receiver's remote description");
            });
        });
        socket.on("receivedAnswer", function (data) {
            setTargetId(data.targetId);

            pc.setRemoteDescription(new SessionDescription(data.answer), function () {
                console.log("Success to set the caller's remote description");
            }, function (err) {
                console.error("Fail to set the caller's remote description");
            });
        });
        socket.on("receivedRemoteCandidate", function (data) {

            console.log("receivedRemoteCandidate", data);

            setTargetId(data.targetId);

            if (data.candidate) {
                pc.addIceCandidate(data.candidate);
            }
        });
    }

    function displayCamera() {
        navigator.getUserMedia(
            {audio: true, video: {width: 320, height: 240}},
            function (stream) {
                setLocalStream(stream);
            }, function (err) {
                alert("你拒绝了使用摄像头");
            }
        );
    }

    function createPc() {
        pc = new PeerConnection(null);
        pc.onicecandidate = function (event) {
            console.log(event, targetId);
            socket.emit("sendCandidate", {targetId: targetId, candidate: event.candidate});
        };
        pc.onaddstream = function (event) {
            setRemoteStream(event.stream);
        }
    }

    function startACall() {
        //get the target id
        var targetId = parseInt(idInput.value);
        if (targetId) {
            setTargetId(targetId);
            pc.addStream(localStream);

            pc.createOffer(function (offer) {
                console.log("success to create offer");
                pc.setLocalDescription(offer, function () {
                    console.log("success to set the caller's local description");

                    socket.emit("sendOffer", {targetId: targetId, offer: offer});
                }, function (err) {
                    console.error("fail to set the caller's local description");
                });
            }, function (err) {
                console.error("fail to create offer");
            });
        } else {
            alert("没有设置对方ID");
        }
    }

    function addUIListeners() {
        document.querySelector("#btn-call").onclick = startACall;
    }

    function init() {
        displayCamera();
        connectSocketServer();
        addSocketListeners();
        addUIListeners();
        createPc();
    }

    init();
})();