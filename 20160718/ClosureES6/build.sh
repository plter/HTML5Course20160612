#!/usr/bin/env bash


java -jar /opt/google/closure-compiler/closure-compiler-v20160713.jar \
    --js_output_file \
        app.min.js \
    --js \
        lib1.js \
        lib.js \
        Main.js
