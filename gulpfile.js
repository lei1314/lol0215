//必须要引入gulp
const gulp = require("gulp");
// 引入sass
const sass = require("gulp-sass");
// 压缩js
// const uglify = require("gulp-uglify");
// const babel = require("gulp-babel");
// const es2015Preset = require("babel-preset-es2015");
// 压缩图片
const imagemin = require("gulp-imagemin");
// 压缩css
const minifycss = require("gulp-minify-css");
// // 启动服务
// var connect=require("gulp-connect");
// gulp.task("server",function(){
//     connect.server({
//         root:"E:\\ss000000"
//     })
// })
// 拷贝所有的html
gulp.task("copy-file", async function () {
    gulp.src("*.html")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew"))
})

gulp.task("copy-css", async function () {
    gulp.src("css/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\css"));
})
gulp.task("copy-js", async function() {
    gulp.src("js/**/*")
        // .pipe(babel({ presets: [es2015Preset] }))
        // .pipe(uglify())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\js"));
})
gulp.task("copy-img", async function () {
    gulp.src("img/**/*")
    .pipe(imagemin())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\img"));
})
gulp.task("copy-head", async function () {
    gulp.src("head&foot/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\head&foot"));
})

// sass
gulp.task("copy-sass", async function () {
    gulp.src("sass/**/*")
        .pipe(sass())
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\css"));
})
// video
gulp.task("copy-video", async function () {
    gulp.src("video/**/*")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\video"));
})
// php
gulp.task("copy-php", async function () {
    gulp.src("*.php")
        .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew"));
})

// // 监听
gulp.task("watchall", async function () {

    // 1.html
    gulp.watch("*.html", async function () {
        gulp.src("*.html")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew"))
    })
    // // 2.img
    gulp.watch("img/**/*", async function () {
        gulp.src("img/**/*")
        .pipe(imagemin())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\img"))
    })
    // // 3.js
    gulp.watch("js/**/*", async function () {
        gulp.src("js/**/*")
            // .pipe(babel({ presets: [es2015Preset] }))
            // .pipe(uglify())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\js"))
    })
    // // 4.css
    gulp.watch("css/**/*", async function () {
        gulp.src("css/**/*")
            .pipe(minifycss())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\css"))
    })
    // 5.sass
    gulp.watch("sass/**/*", async function () {
        gulp.src("sass/**/*")
            .pipe(sass())
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\css"));
    })
    // 6.video
    gulp.watch("video/**/*", async function () {
        gulp.src("video/**/*")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\video"));
    })
    // 7.php
    gulp.watch("*.php", async function () {
        gulp.src("*.php")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew"));
    })
    // 8.HEAD&FOOT
    gulp.watch("head&foot/**/*", async function () {
        gulp.src("head&foot/**/*")
            .pipe(gulp.dest("D:\\phpStudy\\WWW\\lolnew\\head&foot"));
    })

});