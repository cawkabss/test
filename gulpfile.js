const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const sorcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const rimraf = require("rimraf");
const spritesmith  = require("gulp.spritesmith");
const sequence  = require("run-sequence");
const watch = require("gulp-watch");

const vendors = {
    js: {
        jquery: 'node_modules/jquery/dist/jquery.js',
        bootstrap: 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.js',
        slick: 'node_modules/slick-carousel/slick/slick.js'
    },
    fonts: {
        awesome: 'node_modules/font-awesome/fonts/*.*',
        slick: 'node_modules/slick-carousel/slick/fonts/*.*'
    }
};

/* -------- Server -------- */

gulp.task('server', function(){
    browserSync.init({
        server: {
            baseDir: "build"
        }
    });
});

/* -------- Reload -------- */

gulp.task('reload', function(){
    return browserSync.reload();
});

/* -------- Compile html -------- */

gulp.task('compile:html', function(){
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build'))
});

/* -------- Compile styles -------- */

gulp.task('compile:styles', function(){
    return gulp.src('src/scss/main.scss')
        .pipe(sorcemaps.init())
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(postcss([autoprefixer({
            browsers: ['last 5 versions']
        })]))
        .pipe(rename('main.min.css'))
        .pipe(sorcemaps.write('./maps'))
        .pipe(gulp.dest('build/css'))
});

/* -------- Compile JS -------- */

gulp.task('compile:js', function(){
   gulp.src([vendors.js.jquery, vendors.js.bootstrap, vendors.js.slick, 'src/js/main.js'])
       .pipe(concat('common.min.js'))
       .pipe(uglify())
       .pipe(gulp.dest('build/js'))
});

/* -------- Clean -------- */

gulp.task('clean', function(cb){
    return rimraf('build', cb)
});

/* -------- Copy fonts -------- */

gulp.task('copy:fonts', function(){
    return gulp.src(['src/fonts/**/*', vendors.fonts.awesome, vendors.fonts.slick])
        .pipe(gulp.dest('build/fonts'))
});

/* -------- Copy images -------- */

gulp.task('copy:images', function(){
    return gulp.src('src/imgs/**/*')
        .pipe(gulp.dest('build/imgs'))
});

/* -------- Copy -------- */

gulp.task('copy', function(){
    return sequence(['copy:fonts', 'copy:images'])
});

/* -------- Watchers -------- */

gulp.task('watch', function(){
    watch('src/index.html', function() {
        sequence('compile:html', 'reload');
    });
    watch('src/scss/**/*', function() {
        sequence('compile:styles', 'reload');
    });
    watch('src/js/**/*', function() {
        sequence('compile:js', 'reload');
    });
    watch('src/images/**/*', function() {
        sequence('copy:images', 'reload');
    });
    watch('src/fonts/**/*', function() {
        sequence('copy:fonts', 'reload');
    });
});

/* -------- Default -------- */

gulp.task('default', function(){
    return sequence('clean', ['compile:html', 'compile:js', 'compile:styles', 'sprite', 'copy'], ['watch', 'server'])
});