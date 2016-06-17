/**
 * Created by plter on 6/17/16.
 */

(function () {


    var imgs = [
        Card("images/001.jpg", "images/002.jpg"),
        Card("images/003.jpg", "images/004.jpg"),
        Card("images/005.jpg", "images/006.jpg"),
        Card("images/007.jpg", "images/008.jpg")
    ];

    function init() {

        var html = "";

        imgs.forEach(function (item) {
            html += item.getHtml();
        });

        document.body.innerHTML = html;
    }


    init();
})();