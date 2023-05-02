const shapeChoice = require('./lib/shapes')
const fs = require('fs');
const inquirer = require('inquirer');



inquirer.prompt([
    {
      type: 'input',
      name: 'fillcolor',
      message: 'Enter the color of the shape:',
      validate:  function (value){
        let hex = /^#[0-9A-F]{6}$/i.test(value);
            if (hex){
                return true;
            }else {
                return 'Please enter a valid hexidecimal color code.';
                }
            },   
      }   
     
    
    ,
    {
      type: 'input',
      name: 'strokecolor',
      message: 'Enter the color for the stroke:',
      validate: function(value){
        let hex = /^#[0-9A-F]{6}$/i.test(value);
            if (hex){
                return true;
            }else {
                return 'Please enter a valid hexidecimal color code.';
                }
            }
    },
    {
    type: 'list',
    name: 'choice',
    message: 'Choose your shape:',
    choices: ['triangle', 'circle', 'square']
    },

  ]).then((answers) => {
    const { fillcolor, strokecolor, choice } = answers;
    const drawTriangle = `<svg height="100" width="100">
                  <polygon points="50,0 0,100 100,100" stroke="${strokecolor}" fill="${fillcolor}" ;stroke-width:1;stroke:"5" />
                </svg>`;

    
    const drawCircle=`
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="${strokecolor}" fill="${fillcolor}" stroke-width="5"/>
    </svg>`;

    const drawSquare =`
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="10" width="30" height="30" stroke="${strokecolor}" fill="${fillcolor}" stroke-width="5"/>
    
    `;


    if(choice === 'triangle'){
    fs.writeFile('./examples/triangle.svg', drawTriangle, (err) => {
      if (err) throw err;
    }
    )
    }else if(choice === 'circle'){
        fs.writeFile('./examples/circle.svg', drawCircle, (err) => {
            if (err) throw err; 
          }
          )    
    }else
    fs.writeFile('./examples/square.svg', drawSquare, (err) => {
        if (err) throw err; 
      }
      )   
    
    ; 
  }
  );






