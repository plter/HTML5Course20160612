/**
 * Created by plter on 7/26/16.
 */

const gulp = require("gulp");
const shell = require("gulp-shell");
const fs = require("fs");

const closureCompilerFileName = "closure-compiler-v20160713.jar";
const closureCompilerFile = `${__dirname}/tools/${closureCompilerFileName}`;
const distDir = `${__dirname}/dist`;
const gcc/*Google closure compiler*/ = `java -jar ${closureCompilerFile}`;

function defineCompileAnimDemosTasks() {
    const distTestAnimFileName = "animdemos.min.js";
    const distTestAnimFile = `${distDir}/${distTestAnimFileName}`;
    const distTestAnimMapFileName = `${distTestAnimFileName}.map`;
    const cmSrcFiles = [
        "cn/ucai/game2d/events/G2DEvent.js",
        "cn/ucai/game2d/events/G2DMouseEvent.js",
        "cn/ucai/game2d/events/G2DEventDispatcher.js",
        "cn/ucai/game2d/display/Display.js",
        "cn/ucai/game2d/display/Rectangle.js",
        "cn/ucai/game2d/display/Text.js",
        "cn/ucai/game2d/display/Container.js",
        "cn/ucai/game2d/anim/Move.js",
        'cn/ucai/game2d/app/Game2dApp.js',
        "cn/ucai/demos/anim/AnimDemo.js"
    ];
    const compileCMScript = `${gcc} --js_output_file ${distTestAnimFile} --create_source_map ${distTestAnimMapFileName} --js ${cmSrcFiles.join(" ")}`;

    gulp.task("compileTestAnim", shell.task([
        `echo "${compileCMScript}"`,
        compileCMScript
    ], {cwd: "src"}));
    gulp.task("appendMapToTestAnim", ["compileTestAnim"], function () {
        fs.appendFileSync(distTestAnimFile, `\n//# sourceMappingURL=../src/${distTestAnimMapFileName}\n`);
    });

    gulp.task("ta", ["appendMapToTestAnim"]);
}


function init() {
    defineCompileAnimDemosTasks();

    gulp.task("default", ["ta"]);
}

init();