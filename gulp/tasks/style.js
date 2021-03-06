var gulp = require('gulp'),
    config = require('../config'), // Relative to this file
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    please = require('gulp-pleeease'),
    sassLint = require('gulp-sass-lint'),
    reload = browserSync.reload;

gulp.task('styles', function() {
  return gulp.src(config.paths.css.all)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
    .pipe(sass())
    .pipe(please({
      "autoprefixer": true,
      "filters": true,
      "rem": true,
      "opacity": true
    }))
    .pipe(rename(config.names.css))
    .pipe(gulp.dest(config.paths.css.dest))
    .pipe(reload({
      stream: true
    }));
});