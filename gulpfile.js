const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();

gulp.task('styles', function() {
	return gulp.src('./scss/**/*.scss')		
	.pipe(sass().on("error", sass.logError))		
	.pipe(autoprefixer(['last 2 versions']))
	.pipe(gulp.dest('./css'))
	.pipe(browserSync.reload( {stream: true} ))
});

gulp.task('scripts', function() {   
   return gulp.src('./js/modules/*.js')
   .pipe(concat('script.min.js'))     
   .pipe(gulp.dest('./js'))
   .pipe(browserSync.stream());
});

function watch() {
    browserSync.init({
       server: {
           baseDir: "./"
       }
   });
   
   gulp.watch('./scss/**/*.scss', gulp.series('styles'))
   gulp.watch('./js/modules/*.js', gulp.series('scripts'))
   gulp.watch("./*.html").on('change', browserSync.reload);
 }
 gulp.task('default', watch);