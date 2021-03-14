import logo from "./logo.svg";
import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

const data = ["hello", "world"];
// const numbers = [1, 2, 3, 4, 5];
// const listItems = numbers.map((numbers) => <span> {numbers} </span>);
function getData() {
  data.map((word) => <span>word</span>);
}
ReactDOM.render(getData(), document.getElementById("root"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Me
        </a>
      </header>
    </div>
  );
}

export default App;
