var path = require('path');

module.exports = function (config) {

    var filesCollection = [
        'bower_components/lodash/lodash.js',
        'bower_components/jquery/dist/jquery.js',
        'bower_components/bootstrap/dist/js/bootstrap.js',
        'bower_components/angular/angular.js',
        'bower_components/angular-ui-router/release/angular-ui-router.js',
        'bower_components/socket.io-client/socket.io.js',
        'public/main.js',
        'tests/browser/**/*.js'
    ];

    var excludeFiles = [
        'tests/browser/karma.conf.js'
    ];

    var configObj = {
        browsers: ['Chrome'],
        frameworks: ['mocha'],
        basePath: path.join(__dirname, '../../'),
        files: filesCollection,
        exclude: excludeFiles
    };

    config.set(configObj);

};