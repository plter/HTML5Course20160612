/**
 * Created by plter on 7/20/16.
 */


(function () {

    var keyword = "javascript";

    var p = /\<h3 class=\"c-title\"\>\<a href=\"([^"]+)\"[^\>]+\>(.+?)<\/a>/g;
    var container = $("#container");

    function init() {
        $.get(`http://news.baidu.com/ns?word=${keyword}`).done(function (data) {

            var html = "";
            while (true) {
                var result = p.exec(data);
                if (result) {
                    console.log(result);
                    let link = result[1];
                    let content = result[2].replace("<em>", "").replace("</em>", "");

                    html += `<p><a href="${link}">${content}</a></p>`;
                } else {
                    break;
                }
            }

            container.html(html);

            $("a").click(function (e) {
                e.preventDefault();

                console.log(this);
                nw.Shell.openExternal(this.href);
            });
        });
    }

    init();
})();