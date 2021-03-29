import React, { useState } from "react";

const MyToDo = (props) => {
  const { name, isCompleted } = props.data;
  const [completed, setCompleted] = useState(isCompleted);
  //   const [check, setCheck] = useState("&#10003;");
  //   setCheck = () => (check = completed ? `&#10003` : `&#x58`);

  return (
    <div>
      <a
        style={{ textDecoration: "none" }}
        href="/#"
        onClick={() => {
          setCompleted(!completed);
        }}
      >
        <p
          style={
            completed
              ? { textDecoration: "line-through" }
              : { textDecoratio: "none" }
          }
        >
          {name}
          <span> </span>
          {completed ? <span> &#10003;</span> : <span> &#x58;</span>}
        </p>
      </a>
    </div>
  );
};

export default MyToDo;
