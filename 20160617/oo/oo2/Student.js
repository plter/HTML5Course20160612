/**
 * Created by plter on 6/17/16.
 */

window.ucai = window.ucai || {};


(function () {

    function Student(name) {
        ucai.Human.call(this, name);
    }

    //继承自Human
    Student.prototype = new ucai.Human();

    Student.prototype.learn = function () {
        console.log(this.name + "学习");
    };

    window.ucai.Student = Student;
})();