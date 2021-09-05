var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();

// compile scc into css
function style (){
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist/css'))
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
