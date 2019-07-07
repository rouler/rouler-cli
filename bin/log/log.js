const chalk = require('chalk');

function info(...args) {
    console.log.apply(this, args);
}

function keyinfo(...args) {
    console.log(chalk.bold.apply(this, args));
}

function keypath(...args) {
    console.log(chalk.cyan.bold.apply(this, args));
}

function warn(...args) {
    console.log(chalk.yellow.bold.apply(this, ['warn:'].concat(args)));
}

function error(...args) {
    console.log(chalk.red.bold.apply(this, ['error:'].concat(args)));
}

function done() {
    console.log(chalk.green.bold('done!'));
}

function success(...args) {
    let literal = ['success'];
    if (args.length > 0) {
        literal = ['success:'].concat(args);
    }
    console.log(chalk.green.bold.apply(this, literal));
}

function built(...args) {
    console.log.apply(this, args.concat(chalk.green.bold('[built]')));
}


module.exports = {
    info,
    keyinfo,
    keypath,
    done,
    success,
    error,
    warn,
    built
}