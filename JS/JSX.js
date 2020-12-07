
// Introduction to JSX and React

//Create a react app from scratch.
const React = require("react");
const ReactDOM = require("react-dom");

//It should display a h1 heading.
//It should display an unordered list (bullet points).
//It should contain 3 list elements.

const name = "Akemi";
const lastName = "Kondo"; //{name + " " + lastName}, {name} {lastName}
const number = 42;

ReactDOM.render(
  <div>
    <h1>Hello {`${name} ${lastName}`}</h1>
    <ul>
      <li>{number}</li>
      <li>{3 + 9}</li>
      <li>{Math.floor(Math.random() * 10)}</li>
      {/* <li>{if (name === "Angela"){
        return false;
      }}</li> */}
    </ul>
  </div>,
  document.getElementById("root")
);
