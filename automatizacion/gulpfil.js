const gulp = require('gulp');
const { setDefaultHighWaterMark } = require('stream');

gulp.task('build', function (cb) {
    console.log('construyendo el sitio');
    setTimeout(cb, 1200);
});
