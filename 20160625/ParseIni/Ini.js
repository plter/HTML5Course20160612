/**
 * Created by plter on 6/25/16.
 */

window.ucai = window.ucai || {};

(function () {

    /**
     * 根据Ini文件内容创建一个Ini对象
     * @param str {String} ini文件内容
     * @constructor
     */
    function Ini(str) {
        var pNode = /\[(.*)\]/g;
        var pKv = /(.*)=(.*)/g;

        while (true) {
            var result = pNode.exec(str);
            if (result) {
                var nodeName = result[1];
                this[nodeName] = {};

                var startIndex = result.index + result[0].length;
                var endIndex = str.indexOf("[", startIndex);
                if (endIndex == -1) {
                    endIndex = str.length;
                }

                var nodeContent = str.substring(startIndex, endIndex);

                while (true) {
                    var kvResult = pKv.exec(nodeContent);

                    if (kvResult) {
                        this[nodeName][kvResult[1].trim()] = kvResult[2].trim();
                    } else {
                        break;
                    }
                }
            } else {
                break;
            }
        }
    }

    ucai.Ini = Ini;
})();