var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

// compile scc into css
function style (){
  // 1. where ist my scss file
  return gulp.src('src/scss/**/*.scss')
  // 2. pass that file through sass compiler
  .pipe(sass())
  // 3. where do Isave the compiled css?
  .pipe(gulp.dest('dist/css'))
  // 4. stream changes to all browser
  .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/scss/**/*.scss', style);
  gulp.watch('*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
