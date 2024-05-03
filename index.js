const inquirer = require('inquire');
const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const { type } = require('os');

async function promptUser() {
    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter text(up to three characters):',
            validate: function(input) {
                return input.length <= 3 ? true : "Please enter up to three characters.";
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color:',
            default: 'black'
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Choose a shape:',
            choices: ['Triangle', 'Circle', 'Square']
        },
        {
            type:'input',
            name: 'shapeColor',
            message: 'Enter shape color:',
            default: 'white'
        }
    ]);
    return answers;
}

async