/**
 * Created by plter on 7/28/16.
 */

var gulp = require("gulp");
var shell = require("gulp-shell");


gulp.task("default", shell.task([
    'egret build'
]));

gulp.watch("src/*.ts", ["default"]);