'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var concat    = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
  gulp.src([
    'scss/*.scss'
  ])
  .pipe(sass())
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(concat('app.css'))
  .pipe(minifyCss())
  .on('error', function(err) {
    console.log(err.toString());
  })
  .pipe(gulp.dest('css'));
});


gulp.task('browserify', function () {
  var options;

  options = {
    paths: [
      './node_modules',
      './app',
      './apis',
      './components'
    ]
  };

  browserify('./app/app.js', options)
  .transform(reactify)
  .bundle()
  .pipe(source('app.js'))
  .on('error', function(err) {
    console.log(err.toString());
  })
  .pipe(gulp.dest('js/dist'));
});
