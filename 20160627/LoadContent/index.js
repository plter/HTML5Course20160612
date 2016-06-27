/**
 * Created by plter on 6/27/16.
 */


(function () {

    Promise.all([
        new Promise(function (resolve, reject) {
            $.get("data1.txt").done(resolve).fail(reject);
        }),
        new Promise(function (resolve, reject) {
            $.get("data2.txt").done(resolve).fail(reject);
        }),
        new Promise(function (resolve, reject) {
            $.get("data3.txt").done(resolve).fail(reject);
        })
    ]).then(function (result) {
        console.log(result);
    }).catch(function (error) {
        console.log(error);
    });

})();