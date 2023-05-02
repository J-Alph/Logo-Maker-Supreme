const shapeChoice = require('./lib/shapes')
const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter the color of the triangle:',
    },
    {
      type: 'input',
      name: 'rgb',
      message: 'Enter the RGB value of the color:',
    },
    {
    type: 'list',
    name: 'choice',
    message: 'Choose your shape:',
    choices: ['triangle', 'circle', 'square']
    },

  ]).then((answers) => {
    const { color, rgb, choice } = answers;
    const drawTriangle = `<svg height="100" width="100">
                  <polygon points="50,0 0,100 100,100" style="fill:${color};stroke-width:1;stroke:${rgb}" />
                </svg>`;

    
    const drawCircle=`
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="red" fill="${color}" stroke-width="${rgb}"/>
    </svg>`;

    const drawSquare =`
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="10" width="30" height="30" stroke="black" fill="${color}" stroke-width="${rgb}"/>
    
    `;


    if(choice === 'triangle'){
    fs.writeFile('triangle.svg', drawTriangle, (err) => {
      if (err) throw err;
    }
    )
    }else if(choice === 'circle'){
        fs.writeFile('circle.svg', drawCircle, (err) => {
            if (err) throw err; 
          }
          )    
    }else
    fs.writeFile('square.svg', drawSquare, (err) => {
        if (err) throw err; 
      }
      )   
    
    ; 
  }
  );






