var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// compile scc into css
function style (){
  return gulp.src('src/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream());
}

// watch changes and reload browser
function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('src/scss/**/*.scss', style);
  gulp.watch('*.html').on('change', browserSync.reload);
}

//Distribution task
function dist() {
  var plugins = [
        autoprefixer(),
        cssnano({preset: 'default'})
    ];
    return gulp.src('./src/css/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist/css'));
}



exports.style = style;
exports.watch = watch;
exports.dist = dist;
