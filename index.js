const inquirer = require('inquirer');
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

async function generateSVG() {
    const userInput = await promptUser();
    let shape;
    switch (userInput.shape) {
        case 'Triangle':
            shape = new Triangle();
            break;
        case 'Circle':
            shape = new Circle();
            break;
        case 'Square':
            shape = new Square();
            break;
    }
    shape.setColor(userInput.shapeColor);

    const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="150" font-family="Arial" font-size="24" fill="${userInput.textColor}" text-anchor="middle">${userInput.text}</text>
    </svg>
`;
fs.writeFileSync('logo.svg',svgContent);

console.log("Generated logo.svg");
}

generateSVG();