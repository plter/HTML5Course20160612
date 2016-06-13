/**
 * Created by plter on 6/13/16.
 */


function printf() {

    /**
     *
     * @type {String}
     */
    var formatString = arguments[0];

    if (!formatString) {
        console.error("参数不正确");
        return;
    }

    for (var i = 1; ; i++) {

        var index = formatString.indexOf("%");
        if (index == -1) {
            break;
        }

        var typeChar = formatString.charAt(index + 1);
        var replaceVar = arguments[i];
        switch (typeChar) {
            case "s":
                if (typeof replaceVar != "string") {
                    console.warn("第" + i + "类型不匹配");
                }
                break;
            case "f":
                if (typeof replaceVar != "number") {
                    console.warn("第" + i + "类型不匹配");
                }
                break;
        }


        formatString = formatString.substring(0, index) + replaceVar + formatString.substr(index + 2);
    }

    console.log(formatString);
}


printf("Hello %s,%f", "World", 100);