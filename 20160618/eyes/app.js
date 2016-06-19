/**
 * Created by plter on 6/19/16.
 */

(function () {

    var eyes;

    function findEyes() {
        eyes = document.getElementsByClassName("eye");

        for (var i = 0; i < eyes.length; i++) {
            eyes[i].appendChild(new Eyeball().eyeballNode);
        }
    }

    function init() {
        findEyes();
    }

    init();
})();