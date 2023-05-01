const shape = require('./lib/shapes')
const fs = require('fs');
const inquirer = require('inquirer');



// const questions =[

//     {
//     type: "input",
//     name: "title",
//     message: "What is the title of your project?",

//     },

//     {
//     type: "input",
//     name: "stroke",
//     message: "Enter comma seperate rgb values for the text color"
//     },

//     {
//     type: "list",
//     name:"shape",
//     message: "What shape will you choose",
//     choices: ['triangle', 'circle', 'square']
//     },

//     {
//     type: "input",
//     name: "shapecolor",
//     message: "Enter comma seperate rgb values for the shape color",
//     },
// ]

const svg = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
<polygon points="50,0 50,100 0,100" />
</svg>`;

// function runPrompt (){
//     return inquirer.prompt(questions)
//         .then ((answers) => {
//             const info = new shape(answers)
            fs.writeFile("logo.svg", svg, function (err) {
                if (err) console.log(err);
        }


)


fs.writeFile("logo2.svg", shape(), function (err) {
    if (err) console.log(err);
}
)
// }
//    )}

//    runPrompt();

