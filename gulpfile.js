"use strict";

const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require("gulp-cssnano");
const autoprefixer = require("gulp-autoprefixer");

function styles() {
  return gulp.src("./src/scss/main.scss")
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("./generated/css"));
}

exports.styles = styles;
exports.watch = function() {
  gulp.watch(['./src/*.scss', './src/**/*.scss'], { events: 'all', delay: 500 }, styles);
}
exports.default = gulp.parallel(styles);