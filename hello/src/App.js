import React from "react";

function App() {
  const data = ["hello", "world"];
  const number1 = 5;
  const number2 = 6;
  const string = "I love React!";

  return (
    <div>
      <h1>{data.map((d) => d.charAt(0).toUpperCase() + d.slice(1) + " ")}</h1>
      <h1>
        {number1} + {number2} = {number1 + number2}
      </h1>
      <h1>The string’s length is {string.length}</h1>
    </div>
  );
}

export default App;
