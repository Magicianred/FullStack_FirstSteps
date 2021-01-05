//if an object has more than one method it is said it has BEHAVIOR
//creating objects with objects literals syntax is an issue for behavior, the solution is to use Factory/Constructor function

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
