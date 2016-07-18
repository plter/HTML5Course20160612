/**
 * Created by plter on 7/18/16.
 */

"use strict";

class Main {

    index = 0;

    constructor() {

    }

    startTimer() {
        setInterval(()=> {
            console.log(this.index++);
        }, 1000);

        // setInterval(function () {
        //     console.log(this);
        //     console.log(this.index++);
        // }, 1000);
    }
}

var m = new Main();
m.startTimer();