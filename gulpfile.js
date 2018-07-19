const gulp = require("gulp");
const ts = require("gulp-typescript");
const fs = require("fs");
const webpack = require("gulp-webpack");
const babel = require("gulp-babel");

const tsProject = ts.createProject("tsconfig.json");

gulp.task("default", ["webpack"], function () {

});

gulp.task("webpack", function () {
    return gulp.src("src/Main.js")
        .pipe(webpack({
            output: {
                filename: "bundle.js"
            }
        }))
        .pipe(gulp.dest("dist/bundle/"));
});

gulp.task("watch", ["webpack"], function () {
    return gulp.watch("src/**/*.*", ["webpack"]);
});

