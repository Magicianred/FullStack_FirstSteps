//if an object has more than one method it is said it has BEHAVIOR
//creating objects with objects literals syntax is an issue for behavior, the solution is to use Factory/Constructor function

//FACTORY Function
function createCircle(radius) {
  return { 
    radius, //key = value passed, so its omitted
    location: { 
      x: 1,
      y: 1
    },
    draw: function (){ //key : value
      console.log("draw");
    }
  };
};
const circle = createCircle(1);
circle.draw;

//CONSTRUCTOR Function (with capital letter)
function Circle(radius) { //will create an empty object
  this.radius = radius;   //assigns to the created object
  this.draw = function() {
    console.log("draw");
  }
};
const another = new Circle(1); //HAVE to use the "new" operator
//every object have a constructor property that reveals the function that made them
//another.constructor()
//f Circle(radius){ 
//   this.radius = radius;   
//   this.draw = function() {
//     console.log("draw");
//   }
// };
