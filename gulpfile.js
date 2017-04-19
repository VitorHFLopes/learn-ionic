var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass', 'watch']);

gulp.task('sass', function (done) {
    gulp.src('./scss/ionic.app.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./www/css/'))
        .pipe(minifyCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(gulp.dest('./www/css/'))
        .on('end', done);
});

gulp.task('watch', function () {
    gulp.watch(paths.sass, ['sass']);
});

gulp.task('install', ['git-check'], function () {
    return bower.commands.install()
        .on('log', function (data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function (done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});


//app-build and watcher for changes
var ngAnnotate = require('gulp-ng-annotate');
var minify = require('gulp-minify');
var runSequence = require('run-sequence');

gulp.task('app-annotate', function () {
    return gulp.src([
        //app's js
        'www/js/app.js',
        'www/js/routes.js',
        'www/js/angular-locale_pt-br.js',
        'www/js/pusher.js',
        //factories
        'www/components/factories/api-services.js',
        'www/components/factories/data-storage.js',
        'www/components/factories/local-storage.js',
        'www/components/factories/google-analytics-abstraction.js',
        //services
        'www/components/login/services/check-login-service.js',
        //controllers
        'www/components/beacon/beacon-ctrl.js',
        'www/components/beacon/mixd-door/mixd-door-ctrl.js',
        'www/components/calendar/calendar-ctrl.js',
        'www/components/call/call-ctrl.js',
        'www/components/email/email-ctrl.js',
        'www/components/home/home-ctrl.js',
        'www/components/login/login-ctrl.js'
    ])
        .pipe(ngAnnotate({
            remove: true,
            add: true,
            single_quotes: true
        }))
        .pipe(concat('learn-ionic.js'))
        .pipe(gulp.dest('www/js'));
});

gulp.task('app-minify', function () {
    return gulp.src([
        'www/js/learn-ionic.js'
    ])
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            compress: {
                dead_code: true,
                warnings: true
            }
        }))
        .pipe(gulp.dest('www/js'));
});

//Annotate dependencies and minify to production
gulp.task('app-build', function () {
    runSequence('app-annotate', 'app-minify')
});

//Watch when a file changes
/*
var watchThisFiles = ["www/!**!/!*", "!www/lib/!**!/!*"];
gulp.watch(watchThisFiles, ['app-annotate']);*/
