//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
const date = new Date().getHours();
const customStyle = {
  color: ""
};
let greeting;
if (date < 12) {
  greeting = "Morning";
  customStyle.color = "red";
} else if (date < 18) {
  greeting = "Afternoon";
  customStyle.color = "green";
} else {
  greeting = "Night";
  customStyle.color = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={customStyle}>
      Good {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
