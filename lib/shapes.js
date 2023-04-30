class Triangle {
  constructor(points, stroke, fill) {
    this.points = points;
    this.stroke = stroke;
    this.fill = fill;
  }
  setColor(color) {
    const fill = color;
  }
}

const vega = new Triangle("2034 040 4040 404004",39 ,93);

console.log(vega);


function shapeChoice(choice)
if(choice === triangle){
    
function rendershape(data) {
  return `
            <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
            <defs>
                <style><![CDATA[
                    #MyRect {
                        stroke: black;
                        fill: red;
            }
                ]]></style>
                </defs>
                <rect x="10" height="180" y="10" width="180" id="MyRect"/>
                </svg>   
        
        `;
}

}else if (choice === circle) {
    function rendershape(data) {
        return `
                  <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
                  <defs>
                      <style><![CDATA[
                          #MyRect {
                              stroke: black;
                              fill: red;
                  }
                      ]]></style>
                      </defs>
                      <rect x="10" height="180" y="10" width="180" id="MyRect"/>
                      </svg>         
              `;

}
 } else 
function rendershape(data) {
    return `
              <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs>
                  <style><![CDATA[
                      #MyRect {
                          stroke: black;
                          fill: red;
              }
                  ]]></style>
                  </defs>
                  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
                  </svg>        
          `;
}