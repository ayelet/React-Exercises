import React, { useState } from "react";
import MyToDo from "./MyToDo";



const MyToDoList = (props) => {

  return (
    <div className="container">
      {props.data.map((item) => (
        <MyToDo data={item} />
      ))}
    </div>
  );
};

export default MyToDoList;
