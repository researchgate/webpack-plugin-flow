'use strict'
var checkFlow = require('./flow-check');

function FlowCheck() {
}

FlowCheck.prototype.apply = function(compiler) {
    compiler.plugin('run', function(compiler, callback) {
        checkFlow('check', callback);
    });

    compiler.plugin('watch-run', function(watching, callback) {
        checkFlow('status', callback);
    });
};

module.exports = FlowCheck;
