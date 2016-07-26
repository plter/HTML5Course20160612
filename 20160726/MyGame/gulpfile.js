/**
 * Created by plter on 7/26/16.
 */

const gulp = require("gulp");
const shell = require("gulp-shell");
const closureCompilerFileName = "closure-compiler-v20160713.jar";
const closureCompilerFile = `${__dirname}/tools/${closureCompilerFileName}`;
const distDir = `${__dirname}/dist`;
const distFile = `${distDir}/game.min.js`;
const srcFiles = [
    "cn/ucai/game2d/display/Display.js",
    "cn/ucai/game2d/display/Rectangle.js",
    "cn/ucai/game2d/display/Container.js",
    'cn/ucai/game2d/app/Game2dApp.js',
    'cn/ucai/mygame/Game.js'
];

var script = `java -jar ${closureCompilerFile} --js_output_file ${distFile} --js ${srcFiles.join(" ")}`;

gulp.task("outputScript", function () {
    console.log(script);
});
gulp.task("compile", shell.task([script], {cwd: "src"}));

gulp.task("default", ["outputScript", "compile"]);