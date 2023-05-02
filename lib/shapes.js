//contructor function to create function to change color of the svg image

function Color (fill){
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

class Circle extends Color{
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


function shapeChoice(data){

  return `<svg xmlns="http://www.w3.org/2000/svg">
  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg”>
    <circle cx="250" cy="75" r="20" stroke=orange" fill="transparent" stroke-width="5"/>
  
    </svg>`;
}




shapeChoice(); 

module.exports = Triangle, Circle, Square, shapeChoice;
