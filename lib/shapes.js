//contructor function to create function to change color of the svg image

function Color(fill) {
  this.fill = fill;
}
//constructor class to create Triangle while extending Color class

class Triangle extends Color{
  constructor(points) {
    this.points = points;

  }
  setColor(color){
    fill = color;
  }
}

//constructor class to create circle while extending Color class

class Circle extends Color {
  constructor(points, fill) {
    this.points = points;
  }
}

// //constructor class to create square while extending Color class

class Square {
  constructor(points, fill) {
    this.points = points;
  }
}

function drawShape(data) {
  if (data.choice === "triangle") {
    return `<svg height="100" width="100">
  <polygon points="50,0 0,100 100,100" stroke="${data.strokecolor}" fill="${data.fillcolor}" ;stroke-width:1;stroke:"5" />
  </svg>`;

  } else if (data.choice === "circle") {
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle cx="25" cy="75" r="20" stroke="${data.strokecolor}" fill="${data.fillcolor}" stroke-width="5"/>
    </svg>`;

  } else
    return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <rect x="10" y="10" width="30" height="30" stroke="${data.strokecolor}" fill="${data.fillcolor}" stroke-width="5"/>
    
    `;
}

// function shapeSquare

module.exports = drawShape;
