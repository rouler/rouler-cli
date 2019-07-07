#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const commander = require('commander');
const log = require('./log/log');
const program = new commander.Command();

program.version('0.0.1', '-v, --version')
    .usage('<command> [project name]')
    .option('-i, --init <project name>', 'init project')
    .option('-r, --remove <module name>', 'module name')
    .on('--help', () => {
        // todo: exsamples for --help
    })
    .parse(process.argv);

// init command
if (program.init) {
    let name = program.init;
    createRoot(name);
}

// remove command
if (program.remove) {
    // todo:
}

function createRoot(target) {
    if (glob.sync('*').filter(name => {
        const entity = path.resolve(process.cwd(), path.join('.', name));
        return name === target && fs.statSync(entity).isDirectory();
    }).length > 0) {
        log.keyinfo(`project ${target} already exists!!!`);
        return;
    }
    createDir(path.basename(process.cwd()) === target ? '.' : target);
}

//create dir
function createDir(root) {
    if (root !== '.') {
        fs.mkdirSync(root);
    } else {
        // todo: current dir
    }
    log.done();
}
