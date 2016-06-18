/**
 * Created by plter on 6/17/16.
 */

(function () {


    var imgs = [
        new ucai.Card("images/001.jpg", "images/002.jpg"),
        new ucai.Card("images/003.jpg", "images/004.jpg"),
        new ucai.Card("images/005.jpg", "images/006.jpg"),
        new ucai.Card("images/007.jpg", "images/008.jpg")
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