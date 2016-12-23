var gulp=require('gulp'),
    compass=require('gulp-compass'),
     mincss=require('gulp-minify-css'),
     htmlmin = require('gulp-htmlmin'),
     rev = require('gulp-rev');

     //压缩html
gulp.task('html',function(){
  return gulp.src('html/*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(rev())
  .pipe(gulp.dest('./newhtml/'))
});
//压缩CSS
gulp.task('css',function(){
   gulp.src('./sass/*.scss')
    .pipe(compass({
        config_file:'./config.rb',
        css:'stylesheets',
        sass:'sass'
    }))
    .pipe(rev())
    .pipe(mincss())
    .pipe(gulp.dest('stylesheets'));
  });

gulp.task('default', function() {
  gulp.run('css','html');
  //监听html文件变化
  gulp.watch('./html/*.html',function(){
    gulp.run('html');
  });
  //watch .css files
   gulp.watch('./sass/*.scss',['css']);
  
});