var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('src/css/**/*.sass', ['sass']);
  gulp.watch('src/css/**/*.scss', ['sass']);
});
