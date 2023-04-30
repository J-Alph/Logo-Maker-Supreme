const shape = require('./lib/shapes')
const fs = require('fs');
const inquire = require('inquirer');

const questions =[

    {

    },
    {
    type: "input",
    name: "stroke",
    message: "What is the text color"

    },
    {
    type: "list",
    name:"shape",
    message: "What shape will you choose",
    choices: ['triangle', 'circle', 'square']

    },
    {type: "input",
    name: "shapecolor",
    message: "What is the color of the shape"

    }


]

function runPrompt (){
    return inquirer.prompt(questions)
        .then ((answers) => {
            const info = generateMarkdown(answers)
            fs.writeFile('examples', info, (err) => {
                err ? console.error(err) : console.log ('Success today') 
        }


)
}
   )}
   runPrompt();

