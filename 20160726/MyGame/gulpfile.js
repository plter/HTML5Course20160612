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

function defineCompileCardMemoryTasks() {
    const distCMFileName = "cardmemory.min.js";
    const distCMFile = `${distDir}/${distCMFileName}`;
    const distCMMapFileName = `${distCMFileName}.map`;
    const cmSrcFiles = [
        "cn/ucai/game2d/events/G2DEvent.js",
        "cn/ucai/game2d/events/G2DMouseEvent.js",
        "cn/ucai/game2d/events/G2DEventDispatcher.js",
        "cn/ucai/game2d/display/Display.js",
        "cn/ucai/game2d/display/Rectangle.js",
        "cn/ucai/game2d/display/Text.js",
        "cn/ucai/game2d/display/Container.js",
        'cn/ucai/game2d/app/Game2dApp.js',
        "cn/ucai/cardmemory/Card.js",
        "cn/ucai/cardmemory/CardMemory.js"
    ];
    const compileCMScript = `${gcc} --js_output_file ${distCMFile} --create_source_map ${distCMMapFileName} --js ${cmSrcFiles.join(" ")}`;

    gulp.task("compileCM", shell.task([
        `echo "${compileCMScript}"`,
        compileCMScript
    ], {cwd: "src"}));
    gulp.task("appendMapToCM", ["compileCM"], function () {
        fs.appendFileSync(distCMFile, `\n//# sourceMappingURL=../src/${distCMMapFileName}\n`);
    });

    gulp.task("cm", ["appendMapToCM"]);
}


function init() {
    defineCompileCardMemoryTasks();

    gulp.task("default", ["cm"]);
}

init();