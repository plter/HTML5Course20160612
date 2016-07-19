/**
 * Created by plter on 7/19/16.
 */

module.exports = function (grunt) {

    // grunt.registerTask("a", function () {
    //     grunt.log.writeln("A");
    // });
    //
    // grunt.registerTask("b", function () {
    //     grunt.log.writeln("B");
    // });
    //
    // grunt.registerTask("default", ["a", "b"]);

    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        shell: {
            compile: {
                command: "java -jar ../tools/closure-compiler-v20160713.jar --js_output_file ../build/main.min.js --js cn/ucai/Hello.js cn/ucai/Hi.js App.js",
                options: {
                    execOptions: {
                        cwd: "src"
                    }
                }
            }
        }
    });

    grunt.registerTask("default", ["shell:compile"]);

};