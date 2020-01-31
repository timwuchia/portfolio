const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// compile scss to css
function style() {
  // 1. find scss file
  return gulp.src('./sass/style.scss')
  // 2. pass it to the sass compiler
    .pipe(sass().on('error', sass.logError))
  // 3. which css file should I save it to?
    .pipe(gulp.dest('.'))
  // 4. stream changes to all browsers
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    open: "external",
    // host: "192.168.1.12",
    proxy: "http://localhost/timwuweb/"
  });
  gulp.watch('./sass/**/*.scss', style).on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;