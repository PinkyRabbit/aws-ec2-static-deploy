const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const config = {
    "dir": "static",
    "port": 3000
};

function server (cb) {

    browserSync.init({
        "logLevel": "debug",
        "server": {"baseDir": config.dir},
        "port": config.port
    });

    gulp.watch("static/*.html").on(
        "change",
        browserSync.reload
    );

    cb();

}

exports.default = server;
