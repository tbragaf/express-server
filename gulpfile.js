let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let babel = require('gulp-babel');
let concat = require('gulp-concat');
let clean = require('gulp-clean');
let gutil = require('gulp-util');

gulp.task('clean', () => {
  return gulp.src(['dist', 'dev'])
    .pipe(clean({ force: true }));
});

gulp.task('transpile:dist', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat('index.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});

gulp.task('transpile:dev', () => {
  return gulp.src('src/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dev'));
});

gulp.task('dist', ['transpile:dist']);

gulp.task('dev', ['transpile:dev']);

gulp.task('watch', () => {
  return gulp.watch('src/**/*.js', ['transpile:dev']);
});

gulp.task('default', [
  gutil.env.production ? 'dist' : 'dev'
]);