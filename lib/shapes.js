function Color (fill){
    this.fill = fill;
    console.log("zzz")
}

 

class Triangle {
  constructor(points, fill) {
    this.points = points;
    this.fill = fill;
  }
  setColor(color) {
    const fill = color;
  }
}


class Circle {
  constructor(points, fill) {
    this.points = points;
    this.fill = fill;
  }
  setColor(color) {
    const fill = color;
  }
}

class Square {
  constructor(points, fill) {
    this.points = points;
    this.fill = fill;
  }
  setColor(color) {
    const fill = color;
  }
}





function shapeChoice(){

  return `<svg xmlns="http://www.w3.org/2000/svg">
  viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg”>
    <circle cx="250" cy="75" r="20" stroke="blue" fill="transparent" stroke-width="5"/>
  
    </svg>`;
}


shapeChoice(); 

module.exports = Triangle;
module.exports = Circle;
module.exports = Square;
module.exports = shapeChoice;