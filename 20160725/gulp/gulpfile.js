/**
 * Created by plter on 7/25/16.
 */

var gulp = require("gulp");
var shell = require("gulp-shell");

gulp.task("task1", function () {
    console.log("Task1");
});

gulp.task("default", ["task1"], function () {
    console.log("Hello Gulp");
});

// gulp.task("default", shell.task([
//     "java -help"
// ]));