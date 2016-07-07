/**
 * Created by plter on 7/7/16.
 */

(function () {
    
    $.fn.card = function (args) {

        var jqSelf = this;

        var width = "200px";
        var height = "200px";
        var onclickHandler = null;

        function initArgs() {
            if (args) {
                if (args.width) {
                    width = args.width;
                }
                if (args.height) {
                    height = args.height;
                }
                if (args.onclick) {
                    onclickHandler = args.onclick;
                }
            }
        }

        function initStyles() {
            jqSelf.css({
                width: width,
                height: height
            });

            var faceA = jqSelf.find(".face-a");
            faceA.css({width: "100%", height: "100%", margin: "0 auto"});

            var faceB = jqSelf.find(".face-b");
            faceB.css({width: "100%", height: "100%", margin: "0 auto"});

            faceB.hide();
            jqSelf.prop("faceAVisible", true);
        }

        function addListeners() {
            if (onclickHandler) {
                jqSelf.click(onclickHandler);
            }
        }

        function init() {
            initArgs();
            initStyles();
            addListeners();
        }

        init();
    };

    $.fn.showFaceB = function () {
        var jqSelf = this;

        if (!jqSelf.prop("animating") && jqSelf.prop("faceAVisible")) {
            jqSelf.prop("animating", true);

            var faceA = this.find(".face-a");
            var faceB = this.find(".face-b");

            faceA.animate({width: "0"}, 300, function () {
                faceA.hide();
                jqSelf.prop("faceAVisible", false);

                faceB.show();
                faceB.css("width", "0");
                faceB.animate({width: "100%"}, 300, function () {
                    jqSelf.prop("animating", false);
                });
            });
        }
    };

    $.fn.showFaceA = function () {
        var jqSelf = this;

        if (!jqSelf.prop("animating") && !jqSelf.prop("faceAVisible")) {
            jqSelf.prop("animating", true);

            var faceA = this.find(".face-a");
            var faceB = this.find(".face-b");

            faceB.animate({width: "0"}, 300, function () {
                faceB.hide();
                faceA.show();
                jqSelf.prop("faceAVisible", true);

                faceA.css("width", "0");
                faceA.animate({width: "100%"}, 300, function () {
                    jqSelf.prop("animating", false);
                })
            });
        }
    };

    $.fn.toggleFace = function () {
        var jqSelf = this;
        if (!jqSelf.prop("animating")) {
            if (jqSelf.prop("faceAVisible")) {
                this.showFaceB();
            } else {
                this.showFaceA();
            }
        }
    }
})();