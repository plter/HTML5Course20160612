/**
 * Created by plter on 9/5/16.
 */

(function () {

    navigator.getUserMedia = navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
    var localVideo = document.querySelector("#video-local");
    var remoteVideo = document.querySelector("#video-remote");
    var PeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    var SessionDescription = window.RTCSessionDescription || window.mozRTCSessionDescription || window.webkitRTCSessionDescription;
    var localPc, remotePc;
    var localStream;


    function showLocalVideo() {
        if (navigator.getUserMedia) {
            navigator.getUserMedia({
                audio: true, video: {width: 320, height: 240}
            }, function (stream) {
                localStream = stream;
                localVideo.src = URL.createObjectURL(localStream);
            }, function (err) {
                alert("你拒绝了该操作");
            });
        } else {
            alert("你的浏览器不支持该操作");
        }
    }

    function createPeerConnections() {
        localPc = new PeerConnection(null);

        remotePc = new PeerConnection(null);
        remotePc.onaddstream = function (event) {
            remoteVideo.src = URL.createObjectURL(event.stream);
        };
        remotePc.onicecandidate = function (event) {
            console.log(event);
            if (event.candidate) {
                localPc.addIceCandidate(event.candidate);
            }
        }
    }

    function addListeners() {
        document.querySelector("#btn-call").onclick = function () {
            // localPc.onaddstream = function (event) {
            //     console.log(event);
            //     remoteVideo.src = URL.createObjectURL(event.stream);
            // };
            localPc.addStream(localStream);
            localPc.onicecandidate = function (event) {
                console.log(event);
                if (event.candidate) {
                    remotePc.addIceCandidate(event.candidate);
                }
            };
            localPc.createOffer(function (offer) {
                console.log("创建呼叫邀请成功", offer);
                localPc.setLocalDescription(offer, function () {
                    console.log("本机终端设置SDP成功");
                }, function (err) {
                    console.error("本机终端设置SDP失败", err);
                });

                remotePc.setRemoteDescription(new SessionDescription(offer), function () {
                    console.log("远程终端设置本机的SDP成功");
                    remotePc.createAnswer(function (answer) {
                        remotePc.setLocalDescription(answer, function () {
                            console.log("远程终端设置SDP成功");
                        });
                        console.log("远程终端创建应答成功", answer);

                        localPc.setRemoteDescription(new SessionDescription(answer), function () {
                            console.log("本机终端设置远程SDP成功");
                        }, function (err) {
                            console.error("本机终端设置远程SDP失败", err);
                        });
                    }, function (err) {
                        console.error("远程终端创建应答时出错", err);
                    });
                }, function (err) {
                    console.error("远程终端设置本机的SDP时出错", err);
                });
            }, function (err) {
                console.log(err);
            });
        }
    }

    function init() {
        showLocalVideo();
        createPeerConnections();
        addListeners();
    }

    init();
})();