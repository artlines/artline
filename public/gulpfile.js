var gulp = require('gulp'),
watch = require('gulp-watch'),
prefixer = require('gulp-autoprefixer'),
uglify = require('gulp-uglify'),
sass = require('gulp-sass'),
include = require("gulp-include"),
cssmin = require('gulp-clean-css'),
sourcemaps = require('gulp-sourcemaps'),
imagemin = require('gulp-imagemin'),
rimraf = require('rimraf');

var path = {
  build: {
    js: 'build/js/',
    css: 'build/css/',
    img: 'build/img/',
    fonts: 'build/fonts/'
  },
  src: {
    js: 'src/js/main.js',
    style: 'src/css/all.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  watch: {
    js: 'src/js/**/*.js',
    style: 'src/css/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: './build'
};

gulp.task('clean', function (cb) {
  rimraf(path.clean, cb);
});

gulp.task('js:build', function () {
  gulp.src(path.src.js)
    .pipe(sourcemaps.init())
    .pipe(include())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.js))
});

gulp.task('style:build', function () {
  gulp.src(path.src.style)
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['src/css/**/**'],
      outputStyle: 'compressed',
      sourceMap: true,
      errLogToConsole: true
    }))
    .pipe(prefixer())
    .pipe(cssmin())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.build.css))
});

gulp.task('image:build', function () {
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
});

gulp.task('fonts:build', function() {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
  'js:build',
  'style:build',
  'fonts:build',
  'image:build'
]);

gulp.task('watch', function(){
 gulp.watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
 gulp.watch([path.watch.js], function(event, cb) {
    gulp.start('js:build');
  });
 gulp.watch([path.watch.img], function(event, cb) {
    gulp.start('image:build');
  });
 gulp.watch([path.watch.fonts], function(event, cb) {
    gulp.start('fonts:build');
  });
});

gulp.task('default', ['build', 'watch']);