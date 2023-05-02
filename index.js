const drawShape = require("./lib/shapes");

const fs = require("fs");
const inquirer = require("inquirer");


inquirer
  .prompt([
    {
      type: "input",
      name: "fillcolor",
      message: "Enter the color of the shape:",
      validate: function (value) {
        let hex = /^#[0-9A-F]{6}$/i.test(value);
        let vcolor = "blue";
        if (hex || vcolor) {
          return true;
        } else {
          return "Please enter a valid hexidecimal color code.";
        }
      },
    },

    {
      type: "input",
      name: "strokecolor",
      message: "Enter the color for the stroke:",
      validate: function (value) {
        let hex = /^#[0-9A-F]{6}$/i.test(value);
        let vcolor = "green";
        if (hex || vcolor) {
          return true;
        } else {
          return "Please enter a valid hexidecimal color code.";
        }
      },
    },
    {
      type: "list",
      name: "choice",
      message: "Choose your shape:",
      choices: ["triangle", "circle", "square"],
    },
  ])
  .then((answers) => {
    const { choice } = answers;
    const info = drawShape(answers);

    if (choice === "triangle") {
      fs.writeFile("./examples/logo.svg", info, (err) => {
        if (err) throw err;
        else
        console.log("Generated logo.svg")
      });
    } else if (choice === "circle") {
      fs.writeFile("./examples/logo.svg", info, (err) => {
        if (err) throw err;
        else
        console.log("Generated logo.svg")
      });
    } else
      fs.writeFile("./examples/logo.svg", info, (err) => {
        if (err) throw err;
        else
        console.log("Generated logo.svg")
      });
  });
