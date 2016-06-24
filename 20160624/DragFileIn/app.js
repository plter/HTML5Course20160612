/**
 * Created by plter on 6/24/16.
 */

(function () {

    var currentImg;

    document.ondragover = function (e) {
        e.preventDefault();
    };

    document.ondrop = function (e) {
        e.preventDefault();

        var files = e.dataTransfer.files;
        if (files && files.length) {
            var file = files[0];

            if (file.type == "image/jpeg") {

                var reader = new FileReader();
                reader.onload = function () {
                    if (currentImg) {
                        currentImg.parentNode.removeChild(currentImg);
                    }

                    currentImg = document.createElement("img");
                    currentImg.src = reader.result;
                    document.body.appendChild(currentImg);
                };
                reader.readAsDataURL(file);
            }
        }
    }
})();