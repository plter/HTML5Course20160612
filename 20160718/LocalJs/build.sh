#!/usr/bin/env bash

# On Windows it's bat file

tsc --out app.js cn/ucai/hello/Hello.ts cn/ucai/Main.ts
java -jar /opt/google/closure-compiler/closure-compiler-v20160713.jar --compilation_level ADVANCED --js_output_file app.min.js --js app.js