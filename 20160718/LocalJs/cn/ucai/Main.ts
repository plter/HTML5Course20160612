/**
 * Created by plter on 7/18/16.
 */

namespace cn.ucai {

    import Hello = cn.ucai.hello.Hello;

    export class Main {
        constructor() {
            // var h = new cn.ucai.hello.Hello();
            var h:Hello = new Hello();
            h.sayHello();
        }
    }
}

new cn.ucai.Main();