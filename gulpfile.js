var gulp        = require('gulp'),
    stylus      = require('gulp-stylus'),
    plumber     = require('gulp-plumber'),
    browserSync = require('browser-sync'),
    prefixer    = require('autoprefixer-stylus'),
    rupture     = require('rupture'),    
    reload      = browserSync.reload;

gulp.task('styles', function() {
  gulp.src('./assets/styl/*.styl')
    .pipe( plumber({
      handleError : function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(stylus({
      use:[prefixer(), rupture()],
      compress: true
      }))
    .pipe(gulp.dest('./assets/styles/'));
});

gulp.task('browser-sync', function() {
  browserSync({ 
    port: 3000,
    server : './',
    open   : false,
    notify : false
  });
});

gulp.task('bs-reload', function() {
	browserSync.reload();
});

var paths = [
  './assets/styl/*.styl', 
  './assets/styles/app.css',
  './assets/scripts/*.js',
  './*.html'
];

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(paths, ['styles', reload]);
  gulp.watch(['./*.html'], ['bs-reload']);
});
