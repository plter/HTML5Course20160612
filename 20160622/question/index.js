/**
 * Created by plter on 6/22/16.
 */


(function () {
    
    function init() {
        
        $.get("questions.json").done(function (data) {
            console.log(data);
        });
    }
    
    init();
})();