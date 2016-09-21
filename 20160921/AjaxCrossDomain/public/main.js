/**
 * Created by plter on 9/21/16.
 */


(function () {

    $.get("http://localhost:3000/data").done(data=> {
        console.log(data);
    }).fail(error=> {
        console.log(error);
    });

})();