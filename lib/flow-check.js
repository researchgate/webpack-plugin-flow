'use strict';
var flowPath = require('flow-bin');
var execFile = require('child_process').execFile;

function checkFlow(command, callback) {
    console.error('performing flow typechecking...');
    var args = [command];
    if (process.stdout.isTTY) {
        args.push('--color=always');
    }
    execFile(flowPath, args, function(error, stdout, stderr) {
        console.error(stdout);
        if (error) {
            return callback(new Error('Typecheck failed'));
        }
        callback(null);
    });
}

module.exports = checkFlow;
