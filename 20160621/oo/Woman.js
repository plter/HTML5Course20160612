/**
 * Created by plter on 6/21/16.
 */


(function () {

    function Woman(name) {
        ucai.Human.call(this, name);
    }

    Woman.prototype = new ucai.Human();

    ucai.Woman = Woman;
})();