/**
 * Created by plter on 7/2/16.
 */

(function () {

    window.Config = {EDITOR_HTML_ID: "container"}


    function Main() {

        // document.getElementById(Config.EDITOR_HTML_ID).innerHTML = dataContent;


        this._ue = UE.getEditor(Config.EDITOR_HTML_ID, {
            //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
            toolbars: [['FullScreen', 'Source', 'Undo', 'Redo', 'Bold', 'test']],
            //focus时自动清空初始化时的内容
            autoClearinitialContent: true,
            //关闭字数统计
            wordCount: false,
            //关闭elementPath
            elementPathEnabled: false,
            //默认的编辑区域高度
            initialFrameHeight: 300
            //更多其他参数，请参考ueditor.config.js中的配置项
        });
        this._ue.ready(function () {
            this._ue.setContent(this.getCachedDataContent());
        }.bind(this));
    }

    Main.prototype.getCachedDataContent = function () {
        var dataId = this.getCacheDataId();
        var data = localStorage.getItem("ueditor_preference");
        var dataObj = JSON.parse(data);
        var dataContent = dataObj[dataId];
        return dataContent;
    };

    Main.prototype.getCacheDataId = function () {
        /**
         *
         * @type {String}
         */
        var id = location.href;
        var endIndex = id.indexOf("?");
        if (endIndex == -1) {
            endIndex = id.indexOf("#");
            if (endIndex == -1) {
                endIndex = id.length;
            }
        }

        id = id.substring(0, endIndex);
        id = id.replace("://", "_").replace(":", "_").replace(/\//g, "_").replace(".", "_") + Config.EDITOR_HTML_ID + "-drafts-data";
        return id;
    };


    new Main();
})();