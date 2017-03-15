var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('release', function() {
    return gulp.src('./src/*.js')
        .pipe(concat('galen-framework-handler.js'))
        .pipe(gulp.dest('./dist/'));
});