const obfuscate = require('gulp-obfuscate');
const gulp = require('gulp'); 

function comprimiJavaScript() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./scripts'));
}
exports.compress = comprimiJavaScript;