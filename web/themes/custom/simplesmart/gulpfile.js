'use strict'; //should make variables global
//This provides a great tutorial: https://semaphoreci.com/community/tutorials/getting-started-with-gulp-js#h-using-the-first-plugin

// require("dotenv").config(); //should call the dotenv package for security

// console.log(process.env);
const gulp = require('gulp'); //calls gulp

/*
npm install --save-dev gulp-concat  //compiles js files
npm install --save-dev gulp-replace //should be used to clear browser cache
npm install --save-dev gulp-babel  //used to make js files backwards compatible on browsers
npm install --save-dev gulp-uglify //minifies js files
npm install --save-dev gulp-eslint //searches js files for errors
npm install --save-dev gulp-sass
npm install css-minify -g


if using eslint, in the project root (not themes), run
npx install-peerdeps --dev eslint-config-airbnb-base
npm install --save-dev eslint-config-prettier
npm install --save-dev eslint eslint-plugin-yml

run npm ls and check if everything's installed, but need to try to install prettier and postcss

*/
const { series, parallel, watch, src, dest } = require('gulp'); //sets the helpers
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
// const sass = require('gulp-sass'); I use the sass module that runs compile, watch, and minify
// const minify = require('css-minify');


//newest way to write gulp function as of 2022
// function taskName(cb) {
//     cb(new Error('Something bad has happened'));
// }

// function generateCSS(cb) {
//     src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('public/stylesheets'));
//     cb();
// }

// exports.css = generateCSS;


function compileJs() {
    return src(['js/custom/*.js', '!node_modules/**', '**/*.js'], { sourcemaps: true })
        // .pipe(sourcemaps.init())
        // .pipe(babel())
        // .pipe(uglify())
        // .pipe(sourcemaps.write('./'))
        .pipe(dest('js/', { sourcemaps: '.' }));
}

function watchJS() {
    watch(['js/custom/*.js', '!node_modules/**', '**/*.js'], parallel(compileJs));
}


exports.compileJavascript = compileJs;
exports.watch = watchJS;

exports.default = series(parallel(compileJs),watchJS);
