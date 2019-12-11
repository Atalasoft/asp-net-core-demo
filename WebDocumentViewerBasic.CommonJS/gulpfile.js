/// <binding BeforeBuild='build' Clean='clean' />
'use strict';

const gulp = require('gulp'),
      rimraf = require("rimraf"),
      webpackStream = require('webpack-stream');

function buildComponent(releaseBuild) {
    const webpackConfig = require('./webpack.config');
    webpackConfig.mode = releaseBuild? 'production' : 'development';

    return webpackStream(webpackConfig).pipe(gulp.dest('wwwroot'));
}


gulp.task("build",
    () => { return buildComponent(false);});

gulp.task("clean",
    (done) => {
        return rimraf('wwwroot/bundle.*',done);
    });

gulp.task("rebuild", gulp.series("clean","build"));