#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const glob = require('glob');
const inquirer = require('inquirer');
const commander = require('commander');
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

let next = undefined;
function createRoot(target) {
    if (glob.sync('*').filter(name => {
        const entity = path.resolve(process.cwd(), path.join('.', name));
        return name === target && fs.statSync(entity).isDirectory();
    }).length > 0) {
        console.log(`project ${target} exists`);
        return;
    }
    createProject(path.basename(process.cwd()) === target ? '.' : target);
}

//create dir
function createProject(root) {
    prompt().then((answer) => {
        if (root !== '.') {
            fs.mkdirSync(root);
        } else {
            // todo: current dir
        }
        console.log(answer);
    });
}

function prompt() {
    return inquirer.prompt([
        {
            name: 'projectName',
            message: 'input your project name',
            type: 'input',
            default: "my-project"
        },
        {
            name: 'description',
            message: 'input description',
            type: 'input',
            default: "cli"
        },
        {
            name: 'author',
            message: 'input author',
            type: 'input',
            default: "someone"
        },
        {
            name: 'author',
            message: 'choose vue or react',
            type: 'list',
            default: "someone",
            choices: ["vue", "react", "common"]
        },
    ])
}
