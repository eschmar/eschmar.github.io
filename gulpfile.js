var gulp = require('gulp'),
    sass = require('gulp-sass'),
    uglifycss = require('gulp-uglifycss'),
    uglify = require('gulp-uglify');

gulp.task('sass', function(){
    gulp.src('scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(uglifycss())
        .pipe(gulp.dest('css/'));
});

gulp.task('js', function(){
    gulp.src('js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('js/dist/'));
});

gulp.task('default', function(){
    gulp.watch('scss/**/*.scss', ['sass']);
    gulp.watch('js/main.js', ['js']);
});
