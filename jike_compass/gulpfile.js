var gulp = require('gulp'),
    htmlmin = require('gulp-htmlmin'), //html压缩
     compass=require('gulp-compass'),
    mincss=require('gulp-minify-css'),//css压缩
    jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    notify = require('gulp-notify'),//提示信息
    rev = require('gulp-rev'); //md5


//压缩html
gulp.task('html',function(){
  return gulp.src('./src/html/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(rev())
  .pipe(gulp.dest('./dist/newhtml/'))
  .pipe(notify({message:'html task ok'}));
});
//压缩CSS
gulp.task('css',function(){
   gulp.src('./src/sass/*.scss')
    .pipe(compass({
        config_file:'./config.rb',
        css:'./dist/stylesheets',
        sass:'sass'
    }))
    .pipe(mincss())
    .pipe(rev())
    .pipe(gulp.dest('./dist/stylesheets'))
    .pipe(notify({ message: 'css task ok' }));
  });
// 检查js
gulp.task('lint', function() {
  return gulp.src('./src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});
 
// 合并、压缩js文件
gulp.task('js', function() {
  return gulp.src('./src/js/*.js')
     .pipe(uglify())
      .pipe(rename({ suffix: '.min' }))
      .pipe(rev())
      .pipe(gulp.dest('./src/js'))
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist/javascripts'))
    .pipe(notify({ message: 'js task ok' }));
});
//默认任务
gulp.task('default', function() {
  gulp.run('css','lint','js','html');
  //监听html文件变化
  gulp.watch('./src/html/*.html',function(){
    gulp.run('html');
  });
  //watch .css files
   gulp.watch('./src/sass/*.scss',['css']);
     // Watch .js files
  gulp.watch('./src/js/*.js', [ 'lint','js']);
  
});
