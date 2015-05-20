var gulp = require('gulp');
var bower = require('gulp-bower');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var watch = require('gulp-watch');
var livereload = require('gulp-livereload');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer-core');

gulp.task('bower', function () {
    return bower()
        .pipe(gulp.dest('bower_components'))
});
gulp.task('minify-js', ['bower'], function() {
    return gulp.src('js/*.js')
            .pipe(uglify())
            .pipe(rename(function (path) {
                path.basename += ".min";
            }))
            .pipe(gulp.dest('dist'));
});

gulp.task('less', function () {
    return gulp.src(['less/*.less'])
            .pipe(sourcemaps.init())
            .pipe(less())
            .pipe(postcss([autoprefixer({browsers: ['> 2%']})]))
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/css'))
            .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch(['less/*.less'], ['less']);
});

gulp.task('default', ['bower', 'minify-js']);