var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');


//
//  Sass
//
gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss())
        .pipe(gulp.dest('css/'));
});

//
//  Js
//
gulp.task('js', function(){
    gulp.src([
            'js/vendor/game-of-life.min.js',
            'js/vendor/trianglify.min.js',
            'js/vendor/jquery.pressure.min.js',
            'js/main.js'
        ])
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(gulp.dest('js/dist/'));
});

//
//  Watch
//
gulp.task('watch', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/main.js', ['js']);
});

//
//  Default
//
gulp.task('default', [
    'sass',
    'js'
]);
