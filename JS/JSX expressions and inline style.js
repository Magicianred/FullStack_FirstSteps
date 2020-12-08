//Create a react app from scratch.
//const React = require("react");
//const ReactDOM = require("react-dom");

import React from "react";
import ReactDOM from "react-dom";

//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
const name = "Akemi";
var year = new Date().getFullYear();

const customStyle = {
  color: "red",
  fontSize: "40px",
  border:"1px solid black"
}

customStyle.color = "blue";

ReactDOM.render(
  <div>
    <h1 style={customStyle}>Inline styles for changes "on the fly"</h1>
    <p>Created by {name}</p>
    <p>Copyright {year}</p>
  </div>,
  document.getElementById("root")
);

//E.g.
//Created by Your name.
//Copyright 2020.