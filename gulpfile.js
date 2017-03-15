var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('release', function() {
    return gulp.src(['./src/browsers.js','./src/commons.js', '../src/configuration.js', '../src/galen-overriding.js'])
        .pipe(concat('galen-framework-handler.js'))
        .pipe(gulp.dest('./dist/'));
});