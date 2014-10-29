/* gulpfile.js */

// Load some modules which are installed through NPM.
var gulp = require('gulp');
var browserify = require('browserify');  // Bundles JS.
var del = require('del');  // Deletes files.
var reactify = require('reactify');  // Transforms React JSX to JS.
var changed = require('gulp-changed');
var source = require('vinyl-source-stream');
//var stylus = require('gulp-stylus');  // To compile Stylus CSS.
var browserSync = require("browser-sync");

// Define some paths.
var paths = {
   // css: ['src/css/**/*.styl'],
    app_js: ['./src/js/sdtgrid.jsx'],
    js: ['src/js/*.js']
};
var staticPaths = ['./src/*.html','./src/css/*.css'];

// An example of a dependency task, it will be run before the css/js tasks.
// Dependency tasks should call the callback to tell the parent task that
// they're done.
gulp.task('clean', function(done) {
    del(['build'], done);
});

gulp.task('static',function() {
    return gulp.src(staticPaths,{ base :"src/"})
        .pipe(changed('./src/*.html'))
        .pipe(changed('./src/css/*.css'))
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({stream:true}));
});
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./dist",
            index: "index.html"
        }
    });
});
// Our CSS task. It finds all our Stylus files and compiles them.
/*gulp.task('css', ['clean'], function() {
    return gulp.src(paths.css)
        .pipe(stylus())
        .pipe(gulp.dest('./src/css'));
});*/

// Our JS task. It will Browserify our code and compile React JSX files.
gulp.task('js', ['clean'], function() {
    // Browserify/bundle the JS.
    browserify(paths.app_js)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/'));
});

// Rerun tasks whenever a file changes.
gulp.task('watch', function() {
    //gulp.watch(paths.css, ['css']);
    gulp.watch(staticPaths[0],['static', browserSync.reload]);
    gulp.watch(staticPaths[1],['static', browserSync.reload]);
    gulp.watch(paths.js, ['js',browserSync.reload]);
});

// The default task (called when we run `gulp` from cli)
//gulp.task('default', ['watch', 'css', 'js']);
gulp.task('default', ['browser-sync','static','watch','js']);