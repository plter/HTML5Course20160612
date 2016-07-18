/**
 * Created by plter on 7/18/16.
 */

(()=> {

    var add = (a, b)=> a + b;

    var result = add(2, 3);
    console.log(result);

    setInterval(()=> {
        console.log("Hello");
    }, 1000);
})();