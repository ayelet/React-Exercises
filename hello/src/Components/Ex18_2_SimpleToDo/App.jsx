import React from "react";
import MyToDoList from "./MyToDoList";

const data = [
  { name: "CSS", completed: true },
  { name: "JavaScript", completed: true },
  { name: "Learn React", completed: false },
  { name: "Learn mongoDB", completed: false },
  { name: "Learn Node JS", completed: false },
];

const App = () => {
  return <MyToDoList data={data} />;
};

export default App;
