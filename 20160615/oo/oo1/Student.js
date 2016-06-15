/**
 * Created by plter on 6/15/16.
 */

(function () {

    function Student(name) {

        var self = Human(name);

        self.learn = function () {
            console.log(self.name + " 学习");
        };

        var superSayHello = self.sayHello;
        self.sayHello = function () {
            // superSayHello();

            console.log("学生 " + self.name + " 说:“你好”");
        };

        return self;
    }

    window.Student = Student;

}());