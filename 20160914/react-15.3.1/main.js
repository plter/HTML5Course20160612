/**
 * Created by plter on 9/14/16.
 */

(function () {

    //虚拟DOM树
    // ReactDOM.render(
    //     <h1>Hello World</h1>,
    //     document.querySelector("#root")
    // );


    let tf = num => `${num >= 10 ? "" : "0"}${num}`;

    let time = "00:00:00";

    setInterval(()=> {
        let date = new Date();
        time = `${tf(date.getHours())}:${tf(date.getMinutes())}:${tf(date.getSeconds())}`;

        ReactDOM.render(<h1>{time}</h1>, document.querySelector("#root"));
    }, 1000);

})();