var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('sass', function() {
  return gulp.src('assets/css/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets/css'))
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
  gulp.watch('assets/css/**/*.sass', ['sass']);
  gulp.watch('assets/css/**/*.scss', ['sass']);
});
