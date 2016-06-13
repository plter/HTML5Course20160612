/**
 * Created by plter on 6/13/16.
 */

(function () {


    var files = ["hello.js", "app.js"];

    files.forEach(function (file) {
        var scriptTag = document.createElement("script");
        scriptTag.async = false;
        scriptTag.src = file;
        document.body.appendChild(scriptTag);
    });
}());