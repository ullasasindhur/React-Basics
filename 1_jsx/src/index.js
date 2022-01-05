// Import the React and React DOM libraries
import React from "react";
import ReactDom from "react-dom";

// Create a react components
const App = () => {
  return (
    <div>
      <h1>Hi there!</h1>
      <p>This is my first react app in 2022</p>
    </div>
  );
};

// take the react component and show it on the screen

ReactDom.render(<App />, document.querySelector("#root"));
