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

                //读取文件完成以后执行该事件
                reader.onload = function () {
                    if (currentImg) {
                        currentImg.parentNode.removeChild(currentImg);
                    }

                    currentImg = document.createElement("img");
                    currentImg.src = reader.result;//获取读取结果
                    document.body.appendChild(currentImg);
                };
                //开始读取文件
                reader.readAsDataURL(file);
            }
        }
    }
})();