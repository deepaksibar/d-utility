var gulp = require("gulp");
var concat = require('gulp-concat');  
var rename = require('gulp-rename');  
var uglify = require('gulp-uglify'); 
var less = require('gulp-less');

const del = require('del');
const optimize = true;

const PATHS = {
    APP: "src/**/*.js",
    CSS: 'src/**/*.css',
	IMAGES: 'src/images/**/*',
    BUILD: "./dist",
    DEST_APP:'./dist',
    DEST_CSS:'./dist/styles',
	DEST_IMAGES:'./dist/images'
};

gulp.task('clean-build-dir', function () {
    return del(PATHS.BUILD + '/**/*', {force: true});
});

gulp.task("concat-uglify-js", ['clean-build-dir'], function () {
    return gulp.src(PATHS.APP)
        .pipe(concat('igv.js'))
        .pipe(gulp.dest(PATHS.DEST_APP))
		.pipe(rename('igv.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(PATHS.DEST_APP));
});

gulp.task("compile-less", ['clean-build-dir'], function () {
    return gulp.src(PATHS.CSS)
        .pipe(less({compress: optimize}))
        .pipe(gulp.dest(PATHS.DEST_CSS));
});

gulp.task("copy-images", ['clean-build-dir'], function () {
    return gulp.src(PATHS.IMAGES)
        .pipe(gulp.dest(PATHS.DEST_IMAGES));
});

gulp.task("default", ["clean-build-dir", "concat-uglify-js", "compile-less", "copy-images"]);
