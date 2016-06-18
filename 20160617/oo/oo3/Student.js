/**
 * Created by plter on 6/18/16.
 */

window.ucai = window.ucai || {};

(function () {

    function Student(name) {
        ucai.Human.call(this, name);

        var superSayHello = this.sayHello;

        this.sayHello = function () {
            // superSayHello.call(this);
            console.log(this.name + "说你好");
        };
        
        this.sayHi = function () {
            this.sayHello();
        }
    }

    Student.prototype = new ucai.Human();

    ucai.Student = Student;

})();