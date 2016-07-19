/**
 * Created by plter on 7/19/16.
 */


// const fs = require("fs");

class Main {

    constructor() {
        // fs.readdir("/", function () {
        //     console.log(arguments);
        // });

        $.get("http://www.baidu.com").done(function (data) {
            console.log(data);
        });
    }
}

new Main();