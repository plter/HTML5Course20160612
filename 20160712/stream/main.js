/**
 * Created by plter on 7/12/16.
 */


(function () {

    var cols = [];
    var COL_COUNT = 3;
    var COL_WIDTH = 200;
    var container;
    var imageUrls = [];
    var imageIndex = 0;

    function initImageUrls() {
        for (var i = 0; i < 20; i++) {
            imageUrls.push("img1.jpg", "img2.jpg", "img3.jpg");
        }
    }

    function addCols() {
        for (var i = 0; i < COL_COUNT; i++) {
            var div = document.createElement("div");
            div.style.width = COL_WIDTH + "px";
            div.style.float = "left";
            container.appendChild(div);
            cols.push(div);
        }
    }

    function findElements() {
        container = document.getElementById("container");
        container.style.width = "600px";
    }

    function getMinHeightCol() {
        var min = cols[0];

        for (var i = 1; i < cols.length; i++) {
            if (cols[i].clientHeight < min.clientHeight) {
                min = cols[i];
            }
        }

        return min;
    }

    function addImage() {
        var img = document.createElement("img");
        img.onload = function () {
            getMinHeightCol().appendChild(img);

            imageIndex++;
            if (imageIndex < imageUrls.length) {
                addImage();
            }
        };
        img.width = COL_WIDTH;
        img.src = imageUrls[imageIndex];
    }

    function addImages() {
        imageIndex = 0;
        addImage();
    }

    function init() {
        initImageUrls();
        findElements();
        addCols();
        addImages();
    }

    init();
})();