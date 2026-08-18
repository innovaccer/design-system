const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const postcssColorMod = require('postcss-color-mod-function');
const cleaner = require('gulp-clean');
const path = require('path');
const { execFile } = require('child_process');

const { materialFont, sources } = require('./scripts/css-sources.cjs');

function clean() {
  return gulp.src('./dist/*', { allowEmpty: true }).pipe(cleaner());
}

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
  return gulp.src([materialFont]).pipe(gulp.dest('./dist'));
}

/**
 * Builds `dist/mds-scoped.css` — the same CSS wrapped in `@scope ([data-mds-root])`.
 *
 * Runs out of process because the scoped build is authored as an ES module (it needs
 * postcss' AST directly to hoist `@keyframes` above the `@scope` block, which a
 * streaming gulp pipeline cannot express). Errors propagate through `cb` so a broken
 * scoped build fails `gulp build` rather than passing silently.
 */
function cssScoped(cb) {
  execFile(
    process.execPath,
    [path.join(__dirname, 'scripts/build-scoped.mjs')],
    { cwd: __dirname },
    (err, stdout, stderr) => {
      if (stdout) process.stdout.write(stdout);
      if (stderr) process.stderr.write(stderr);
      cb(err);
    }
  );
}
cssScoped.displayName = 'css:scoped';

/** Both bundles read the same sources, so one watch rebuilds both. */
function watch() {
  return gulp.watch(sources, gulp.parallel(css, cssScoped));
}
watch.displayName = 'watch';

exports.build = gulp.series(clean, gulp.parallel(css, font, cssScoped));
exports.cssScoped = cssScoped;
exports.clean = clean;
exports.watch = watch;

gulp.task('watch', watch);
