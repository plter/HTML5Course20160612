/**
 * Created by plter on 6/21/16.
 */


(function () {
    function Student(name) {
        ucai.Human.call(this, name);
    }

    Student.prototype = new ucai.Human();

    Student.prototype.sayHi = function () {
        // ucai.Human.prototype.sayHi.call(this);

        console.log(this.name + "和大家打招呼");
    };

    ucai.Student = Student;
})();