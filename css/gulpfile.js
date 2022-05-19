const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcssColorMod = require('postcss-color-mod-function');
const cleaner = require('gulp-clean');
const classPrefix = require('gulp-class-prefix');

const materialIcons = './material-design-icons/iconfont/material-icons.css';
const materialFont = './material-design-icons/iconfont/*.{ttf,otf}';

const componentsCSS = './src/components/*.css';

function clean() {
  return gulp.src('./dist/*', { allowEmpty: true }).pipe(cleaner());
}

function componentsStyle() {
  return gulp.src(componentsCSS).pipe(concat('components.css')).pipe(classPrefix('Next-')).pipe(gulp.dest('./dist'));
}

const sources = [
  './src/tokens/*.css',
  './src/variables/*.css',
  materialIcons,
  './src/core/*.css',
  './src/utils/*.css',
  './dist/components.css',
];

function css() {
  return gulp
    .src(sources)
    .pipe(concat('index.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss([postcssColorMod()]))
    .pipe(postcss([autoprefixer()]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('./dist'));
}

function font() {
  return gulp.src(materialFont).pipe(gulp.dest('./dist'));
}

exports.build = gulp.series(clean, componentsStyle, gulp.parallel(css, font));

exports.clean = clean;

gulp.task('watch', () => {
  gulp.watch(sources, gulp.series(css));
});
