const circle = { //The curly bracers are refered to as object literals syntax, a colllection of key: value pairs
  radius: 1,  // key: value, a PROPERTY that holds values
  location: { //this time the value is an object, a PROPERTY
    x: 1,
    y: 1
  },
  draw: function (){ //method, defines logic 
    console.log("draw");
  }
};

circle.draw;